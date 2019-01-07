const {
  mysql
} = require('../qcloud')

module.exports = async (ctx) => {
  const {
    openId
  } = ctx.request.query

  const detail = await mysql('personalInfo')
    .select('personalInfo.*')
    .join('cSessionInfo', 'personalInfo.open_id', 'cSessionInfo.open_id')
    .orderBy('personalInfo.id', 'desc')
    .where('personalInfo.open_id', openId)
    .first()
  ctx.state.data = detail
}