const fs = require('fs')
const os = require('os')
const prvCert = fs.readFileSync(__dirname + "/certs/auth_private.pem", "utf-8")
const pubCert = fs.readFileSync(__dirname + "/certs/auth_public.pem", "utf-8")
const jwt = require("jsonwebtoken")

module.exports = {

    /**
     * Current Node Information
     */
    port: 3030,
    endpointPath: __dirname + "/../endpoints/",
    maxLogsPerUser: 50,


    /**
     * token config
     */
    iss: "http://localhost:3030",
    exp: "1h",
    alg: "RS256",


    /**
     * Databases
     */
    mongoPort: 27017,
    mongoURL: "mongodb://localhost/blitz-js-auth",


    /**
     * Authorization properties
     */
    certPrivate: prvCert,
    certPublic: pubCert,
    scopes: require("./scopes/scopes.js"),


    /**
     * Target Node URLs
     */
     apiURL: "http://localhost:3030",
     authURL: "http://localhost:3030",


    /**
     * Authentication Credentials for core-node
     */
    user_key: "dev-VerifyBySignature",
    user_secret: jwt.sign({
        authorized: true
    }, prvCert, {
        algorithm: "RS256"
    }),


    /**
     * Cluster config
     */
    cores: os.cpus().length
}
