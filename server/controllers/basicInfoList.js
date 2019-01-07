const {
  mysql
} = require('../qcloud')

module.exports = async(ctx) => {
  const {
    openId
  } = ctx.request.query

  const detail = await mysql('basicInfo')
    .select('basicInfo.*')
    .join('cSessionInfo', 'basicInfo.open_id', 'cSessionInfo.open_id')
    .orderBy('basicInfo.id', 'desc')
    .where('basicInfo.open_id', openId)
    .first()
  ctx.state.data = detail
}