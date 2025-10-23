const AuthorizedUser = function() {
    if(req.user) {
        return res.redirect() // redirect to create a seller account first
    }
    next()
}
