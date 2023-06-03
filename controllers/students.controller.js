//Dummy data

let students = [
  {
    id: 1,
    name: "Ravindu Perera",
    email: "ravindu@gmail.com",
    gender: "Male",
    nickName: "Bakara",
  },
  {
    id: 2,
    name: "Shavindini Ekanayake",
    email: "shavidini@gmail.com",
    gender: "Female",
    nickName: "Shavi",
  },
  {
    id: 3,
    name: "Sasindu Nanayakkara",
    email: "sasindu@gmail.com",
    gender: "Male",
    nickName: "Sasi",
  },
];



const createStudent = (req, res) => {
  try {
    const isExist = students.find((student) => student.email == req.body.email);

    if (isExist) {
      res.status(409).json({
        success: false,
        message: "Email already exist !",
      });
      return;
    }

    const student = {
      id: Math.max.apply(Math, students.map((student)=>  Number(student.id))) +1,
      name: req.body.name,
      gender: req.body.gender,
      email: req.body.email,
      nickName: req.body.nickName,
    };

    students.push(student);

    res.status(201).json({
      success: true,
      data: { ...student },
    });
  } catch (error) {
    // Exception might be able to handle with few more specific status codes like
    // 304 (Not Modified)
    // 404 (not found)
    // 409 (conflic)
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};



const updateStudnet = (req, res) => {
  try {
    const userId = req.params.id;
    const user = students.find((student) => student.id == userId);

    if (user == undefined) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });

      return;
    }

    user.name = req.body.name;
    user.gender = req.body.gender;
    user.email = req.body.email;
    user.nickName = req.body.nickName;

    res.status(200).json({
      success: true,
      data: { ...user },
    });
  } catch (error) {
    // Exception might be able to handle with few more specific status codes like
    // 304 (Not Modified)
    // 404 (not found)
    // 409 (conflic)
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};



const changeStudentEmail = (req, res) => {
  try {
    const userId = req.params.id;
    const user = students.find((student) => student.id == userId);

    if (user == undefined) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });

      return;
    }

    user.email = req.body.email;

    res.status(200).json({
      success: true,
      data: { ...user },
    });
  } catch (error) {
    // Exception might be able to handle with few more specific status codes like
    // 304 (Not Modified)
    // 404 (not found)
    // 409 (conflic)
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};



const deleteStudent = (req, res) => {
  try {
    const userId = req.params.id;
    const user = students.find((student, index, arr) => {
      if (student.id == userId) {
        arr.splice(index, 1);
        return true;
      }
    });

    if (user == undefined) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });

      return;
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    // Exception might be able to handle with few more specific status codes like
    // 304 (Not Modified)
    // 404 (not found)
    // 409 (conflic)
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};



const getAllStudents = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: students,
    });
  } catch (error) {
    // Exception might be able to handle with few more specific status codes like
    // 304 (Not Modified)
    // 404 (not found)
    // 409 (conflic)

    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

// Export of all methods one by one
module.exports = {
  createStudent,
  updateStudnet,
  changeStudentEmail,
  deleteStudent,
  getAllStudents,
};
