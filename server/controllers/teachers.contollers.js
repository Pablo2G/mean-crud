const Teacher = require('../models/teacher')

const teacherCtrl = {};

teacherCtrl.getTeachers = async (req, res) =>{
    //Ultima forma de trabajar con las peticiones de busqueda
    const teachers = await Teacher.find();
    res.json(teachers);
};

teacherCtrl.createTeacher = async (req, res) =>{
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.json({
        status: 'Teacher save'
    });
}

teacherCtrl.getTeacher =  async (req, res) =>{
    const teacher = await Teacher.findById(req.params.id);
    res.json(teacher);
};

teacherCtrl.editTeacher = async (req, res) =>{
    const { id } = req.params;
    const teacher = {
        name : req.body.name,
        surname : req.body.surname,
        area : req.body.area,
        salary : req.body.salary
    }
    await Teacher.findByIdAndUpdate(id, {$set:teacher}, {new:true});
    res.json({
        status: 'Teacher update'
    });
}

teacherCtrl.deleteTeacher = async (req, res) =>{
    await Teacher.findOneAndDelete(req.params.id)
    res.json({
        status: 'Teacher Delete'
    });
}

module.exports = teacherCtrl;