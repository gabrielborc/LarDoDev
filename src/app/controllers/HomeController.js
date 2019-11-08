const CursoModel = require('../models/CursoModel');

class HomeController {

    index(req, res) {
        res.render('home', {cursos: CursoModel.findAll()});
    }

}

module.exports = new HomeController();