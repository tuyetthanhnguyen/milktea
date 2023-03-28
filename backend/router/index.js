
const homeCafeRouter = require('./homeCafe')


function route(app) {
    app.use('/', homeCafeRouter)
    
}

module.exports = route;