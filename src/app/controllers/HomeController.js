class HomeController {

    index(req, res) {
        res.render('home', { title: 'Hey', message: 'Hello there!'});
    }

}

module.exports = new HomeController();