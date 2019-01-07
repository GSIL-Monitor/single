const {
  mysql
} = require('../qcloud')

module.exports = async(ctx) => {
  const {
    open_id,
    name,
    tel,
    address
  } = ctx.request.body
  try {
    await mysql('basicInfo').insert({
      open_id,
      name,
      tel,
      address
    })
    ctx.state.data = {
      msg: '操作成功'
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