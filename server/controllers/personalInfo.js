const {
  mysql
} = require('../qcloud')

module.exports = async (ctx) => {
  const {
    open_id,
    wxNumber,
    sex,
    date,
    height,
    weight,
    education,
    occupation,
    speciality,
    hobby,
    signature
  } = ctx.request.body
  try {
    await mysql('personalInfo').insert({
      open_id,
      wxNumber,
      sex,
      date,
      height,
      weight,
      education,
      occupation,
      speciality,
      hobby,
      signature
    })
    ctx.state.data = {
      msg: '保存成功'
    }
  } catch (e) {
    ctx.state = {
      code: -1,
      data: {
        msg: '操作失败'
      }
    }
  }
}