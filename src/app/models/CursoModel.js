class CursoModel {

    findAll() {
        return [
            {"nome": "Curso GO", "tipo": "Back-End"},
            {"nome": "Curso Python 3", "tipo": "Back-End"},
            {"nome": "Curso NodeJS", "tipo": "Back-End"},
        ];
    }

}

module.exports = new CursoModel();