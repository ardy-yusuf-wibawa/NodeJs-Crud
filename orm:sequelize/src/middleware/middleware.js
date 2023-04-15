exports.myMiddleware = (req, res, next) => {
    req.model = 'Ini Middleware'
    next()
}