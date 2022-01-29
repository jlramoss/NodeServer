/*
1. First install dependencies and framework. 
install nodemon by using  "npm install nodemon --save -dev"
refreshes the console anytime you make changes to the file
*/


/* 2. next install babel which is a tool to convert ecmascript 2015 
to the new version. so that old browsers can understand the new javascript.
npm install @babel/core @babel/cli @babel/preset-env @babel/node @babel/runtime @babel/plugin-transform-runtime --save-dev
*/

/* 3. These tools will be identifying, reporting
 and formatting on patterns found in ECMAScript/JavaScript code, with the goal of making the code more 
 consistent and avoiding bugs. */


// once all the dependencies are install install express
import  './functions/dotenv'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import pino from 'pino'
import pretty from 'pino-pretty'

const app = express()

const port = parseInt(process.env.PORT ? process.env.PORT : 3000 ,10 )

 app.use(morgan(process.env.MORGAN))
// morgan is just the logger so that we can see the changes in our console
// when we make a request to our server .
app.use(cors({origin: process.env.ORIGIN}))

app.use(helmet())

const stream = pretty({
    colorize: true,
    translateTime: true,
    singleLine: true
})

const logger = pino(pretty(stream))
app.get('/', (req, res) => {
    res.send({ msg: process.env.TITLE + "is now running and waiting for command. " })
    logger.warn(`application running on ${process.env.PORT}`)
})

app.listen(port)

// next we installed dotenv
// npm install dotenv

// next we installed cors
//npm install cors

// next install pino logger and pino pretty


