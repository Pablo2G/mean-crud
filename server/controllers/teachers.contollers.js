const Teacher = require('../models/teacher')

const teacherCtrl = {};

teacherCtrl.getTeachers = async (req, res) =>{
    //Ultima forma de trabajar con las peticiones de busqueda
    const teachers = await Teacher.find();
    res.json(teachers);
};

teacherCtrl.createTeacher = (req, res) =>{
    res.json({
        status:"Api Works",
        teacher:"All teachers"
    })
}

teacherCtrl.getTeacher = (req, res) =>{

};

teacherCtrl.editTeacher = function(){

}

teacherCtrl.deleteTeacher = function(){

}

module.exports = teacherCtrl;