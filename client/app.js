//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
  onLaunch: function() {
    qcloud.setLoginUrl(config.service.loginUrl)
    // console.log(wx.getStorageSync('userInfo'))
    if (!wx.getStorageSync('userInfo')) {
      wx.reLaunch({
        url: '/pages/home/home'
      })
    }
  }
})