import merge from 'lodash.merge'

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const stage = process.env.STAGE || "local"

let envCofig

if(stage === 'production'){
  envCofig = require('./prod').default
} else if(stage === 'testing'){
  envCofig = require('./testing').default
}else{
  envCofig = require('./local').default
}

export default merge({
  stage,
  env: process.env.NODE_ENV,
  port: 3002,
  secrets: {
    jwt: process.env.JWT_SECRET,
    dbUrl: process.env.DATABASE_URL
  }
}, envCofig)