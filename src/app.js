const express = require('express')
const mongoose = require('mongoose')
const app = express();
const cors = require("cors");
require('dotenv').config()

app.use(express.json())
app.use(cors())
require('./database/init.mongodb')
app.use('/', require('./router/admin.router'))

app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

app.use((err, req, res, next) => {
    const statusCode = err.status || 500
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: err.message || "Internal Server Error",
    })
})

module.exports = app;
