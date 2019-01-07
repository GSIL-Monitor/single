// client/pages/personal/personal.js
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
    wxNumber: '', //微信号
    sex: '', //性别
    sexShow: false, //性别弹窗
    sexActions: [{
        name: '男'
      },
      {
        name: '女'
      }
    ],
    date: '', //生日
    height: '', //身高
    weight: '', //体重
    education: '', //学历
    occupation: '', //职业
    speciality: '', //特长
    hobby: '', //爱好
    signature: '' //个性签名
  },
  // 处理change
  handleChange(e, p) {
    this.setData({
      [p]: e.detail.replace(/\s+/g, '')
    })
  },
  //微信号
  wxNumberChange(e) {
    this.handleChange(e, 'wxNumber')
  },
  //身高
  heightChange(e) {
    this.handleChange(e, 'height')
  },
  //体重
  weightChange(e) {
    this.handleChange(e, 'weight')
  },
  //学历
  educationChange(e) {
    this.handleChange(e, 'education')
  },
  //职业
  occupationChange(e) {
    this.handleChange(e, 'occupation')
  },
  //特长
  specialityChange(e) {
    this.handleChange(e, 'speciality')
  },
  //爱好
  hobbyChange(e) {
    this.handleChange(e, 'hobby')
  },
  //个性签名
  signatureChange(e) {
    this.handleChange(e, 'signature')
  },
  //性别
  //-打开
  sexChoose(v) {
    this.setData({
      sexShow: true
    });
  },
  //-关闭
  sexClose() {
    this.setData({
      sexShow: false
    });
  },
  //-选择
  sexSelect(e) {
    this.setData({
      sex: e.detail.name,
      sexShow: false
    })
  },
  //年月日
  birthChoose(e) {
    this.setData({
      date: e.detail.value
    })
  },
  // 获取个性信息
  async getPersonal(p) {
    util.loading()
    const personalInfoList = await get('/personalInfoList', {
      openId: this.data.userInfo.openId
    })
    const {
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
    } = personalInfoList.data
    this.setData({
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
    }, () => {
      if (p) {
        util.succ('保存成功')
      }
      wx.hideLoading()
    })
  },
  //保存
  save() {
    const {
      userInfo,
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
    } = this.data
    const param = {
      open_id: userInfo.openId,
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
    }
    if (!wxNumber) {
      util.warn('请输入微信号')
      return
    }
    if (!sex) {
      util.warn('请选择性别')
      return
    }
    if (!date) {
      util.warn('请选择生日')
      return
    }
    post('/personalInfo', param).then(res => {
      if (res.code == 0) {
        this.getPersonal(true)
      } else {
        util.warn(res.data.msg)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.setData({
        userInfo
      }, () => {
        this.getPersonal()
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