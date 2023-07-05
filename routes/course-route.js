const router = require('express').Router();
const Course = require('../models').course;
const courseValidation = require('../validation').courseValidation;

router.use((req, res, next) => {
  console.log('course route 正在接受一個request...');
  next();
})

// 用講師 id 來尋找課程
router.get('/instructor/:_instructor_id', async (req, res) => {
  let { _instructor_id } = req.params;
  try {
    let coursesFound = await Course.find({instructor: _instructor_id}).populate('instructor', ['username', 'email']).exec();
    return res.send(coursesFound);
  } catch (e) {
    return res.status(500).send(e);
  }
});

// 用學生id來尋找註冊過的課程
router.get('/student/:_student_id', async (req, res) => {
  let { _student_id } = req.params;
  let courseFound = await Course.find({students: _student_id}).populate('instructor', ['username', 'email']).exec();
  return res. send(courseFound)
});

// 獲得系統中的所有課程
router.get('/', async (req, res) => {
  try {
    let courseFound = await Course.find({}).populate('instructor', ['username', 'email']).exec();
    return res.send(courseFound);
  } catch (e) {
    return res.status(500).send(e);
  }
})

// 用課程 id 尋找課程
router.get('/:_id', async (req, res) => {
  let { _id } = req.params;
  try {
    let courseFound = await Course.findOne({ _id }).populate('instructor', ['email']).exec();
    return res.send(courseFound);
  } catch (e) {
    return res.status(500).send(e);
  }
})


// 新增課程
router.post('/', async (req, res) => {
  // 驗證數據符合規範
  let { error } = courseValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  if (req.user.isStudent()) {
    return res.status(400).send('只有講師才能發布新課程。若你已經是講師，請透過講師帳號登入。');
  }
  let { title, description, price } = req.body;
  try {
    let newCourse = new Course({ title, description, price, instructor: req.user._id });
    let savedCourse = await newCourse.save();
    return res.send({
      message: '新課程已經保存'
    })
  } catch (e) {
    return res.status(500).send('無法創建課程。。。')
  }
})

// 更改課程
router.patch('/:_id', async (req, res) => {
  // 驗證數據符合規範
  let { error } = courseValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let { _id } = req.params;
  // 確認課程存在
  try {
    let courseFound = await Course.findOne({ _id });
    if (!courseFound) {
      return res.status(400).send('找不到此課程，無法更新課程內容');
    }
    // 使用者必須是此課程講師才能編輯課程
    if (courseFound.instructor.equals(req.user._id)) {
      let updatedCourse = await Course.findOneAndUpdate({ _id }, req.body, {
        new: true,
        runValidators: true
      });
      return res.send({
        message: '課程已經更新成功',
        updatedCourse
      })
    } else {
      return res.status(403).send('只有此課程講師才能編輯課程。')
    }

  } catch (e) {
    return res.status(500).send(e);
  }
})

router.delete('/:_id', async (req, res) => {
  let { _id } = req.params;
  // 確認課程存在
  try {
    let courseFound = await Course.findOne({ _id }).exec();
    if (!courseFound) {
      return res.status(400).send('找不到此課程，無法刪除課程。');
    }
    // 使用者必須是此課程講師才能刪除課程
    if (courseFound.instructor.equals(req.user._id)) {
      await Course.deleteOne({ _id }).exec();
      return res.send('課程已被刪除成功。');
    } else {
      return res.status(403).send('只有此課程講師才能刪除此課程。');
    }

  } catch (e) {
    return res.status(500).send(e);
  }
})

// 學生透過id註冊課程
router.post('/enroll/:_id', async (req, res) => {
  let { _id } = req.params;
  try {
    let course = await Course.findOne({ _id }).exec();
    // 使用者有JWT的資訊 
    course.students.push(req.user._id);
    await course.save();
    res.send('註冊完成');
  } catch (e) {
    return res.status(500).send(e);
  }
})

module.exports = router;
