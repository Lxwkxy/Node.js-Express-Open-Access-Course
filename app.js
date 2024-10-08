import express from 'express'
import chalk from 'chalk';
// const express = require('express');
// const chalk = require('chalk')
import createDebug from 'debug'
const debug = createDebug('app')
// const debug = require('debug')('app');
import morgan from 'morgan';
// const morgan = require('morgan')
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req,res) =>{
    res.send('Hello borntoDev Co., Lt.');
})

app.listen(port, ()=>{
    debug("Listening on port " + chalk.green(port));
})
