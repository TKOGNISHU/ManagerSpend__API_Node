const user = require('./user')

module.exports = function router(app) {
    app.use('/api/users', user)
}
