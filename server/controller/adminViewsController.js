exports.adminDashboard = (req, res) => {
    res.render("./admin/admin_dashboard", {
        title: "Admin dashboard",
        // data: req.admin,
        // message: req.flash("message")
    })
}
exports.addAboutView = (req, res) => {
    res.render("./admin/about", {
        title: "About",
        // data: req.admin,
        // message: req.flash("message")
    })
}
exports.addBlogView = (req, res) => {
    res.render("./admin/blog", {
        title: "Blog",
        // data: req.admin,
        // message: req.flash("message")
    })
}
exports.postJobView = (req, res) => {
    res.render("./admin/job", {
        title: "Post job",
        // data: req.admin,
        // message: req.flash("message")
    })
}
exports.addCategoryView = (req, res) => {
    res.render("./admin/category", {
        title: "Add category",
        // data: req.admin,
        // message: req.flash("message")
    })
}