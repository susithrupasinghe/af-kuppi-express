
const { Router } = require('express');
  
// import controllers
const studentController = require('../controllers/students.controller');
  
// Router Initialization
const router = Router();
  
// Requests resolvers 
router.get('/', studentController.getAllStudents);
router.post('/', studentController.createStudent);
router.put('/:id', studentController.updateStudnet);
router.patch('/:id', studentController.changeStudentEmail);
router.delete('/:id', studentController.deleteStudent);
  
module.exports = router;