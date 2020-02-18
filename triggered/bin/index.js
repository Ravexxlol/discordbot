#! /usr/bin/env node
const bodyParser = require('koa-bodyparser')
const router = require('koa-simple-router')
const koa = require('koa')
const path = require('path')
const { spawn } = require('child_process')
const app = new koa()

const CWD = process.cwd()
const PORT = process.env.PORT || 3001

// main entry
let application;

// Get config
const config = require(path.join(CWD, 'triggered.config.json'))

async function pullRepo(callback) {
    const child = spawn('git', ['pull']);

    // use child.stdout.setEncoding('utf8'); if you want text chunks
    child.stdout.on('data', (data) => {
        console.log(data.toString())
    });

    child.on('close', (code) => {
        callback()
    });
}

async function trigger() {
    if (application) {
        application.kill()
    }

    application = spawn(config.trigger, [], { shell: true })

    // use child.stdout.setEncoding('utf8'); if you want text chunks
    application.stdout.on('data', (data) => {
        console.log(data.toString())
    });

    application.on('close', (code) => {
        console.log('Application killed..')
    });
}

// look for webhook detials
const webhookPush = async (ctx) => {
    console.log('Running new deploy..')
    pullRepo(() => {
        trigger()
    })
    ctx.body = 'got a push yo'
}

app.use(bodyParser())
app.use(router(_ => {
    _.post('/push', webhookPush)
}))

// run server
app.listen(PORT)
console.log(`Triggered up and running on http://localhost:${PORT}`)

// Start application
pullRepo(() => {
    trigger()
})