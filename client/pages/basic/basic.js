// pages/basic/basic.js
import regeneratorRuntime from '../../utils/runtime.js'
import {
  get,
  post
} from '../../utils/http.js'
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    basicInfoListData: {}, //基本信息列表
    name: '', //名字
    tel: '', //电话
    address: '' //地址
  },
  async getBasic(p) {
    util.loading()
    const basicInfoList = await get('/basicInfoList', {
      openId: this.data.userInfo.openId
    })
    this.setData({
      basicInfoListData: basicInfoList.data
    }, () => {
      if (p) {
        util.succ('保存成功')
      }
      wx.hideLoading()
    })
  },
  save() {
    wx.chooseAddress({
      success: (res) => {
        const param = {
          open_id: this.data.userInfo.openId,
          name: res.userName,
          tel: res.telNumber,
          address: res.provinceName == res.cityName ? `${res.provinceName}${res.countyName}` : `${res.provinceName}${res.cityName}${res.countyName}`
        }
        post('/basicInfo', param).then(res => {
          if (res.code == 0) {
            this.getBasic(true)
          } else {
            util.warn(res.data.msg)
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.setData({
        userInfo
      }, () => {
        this.getBasic()
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})