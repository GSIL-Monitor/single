// client/pages/notAlone/notAlone.js
import regeneratorRuntime from '../../utils/runtime.js'
import {
  get,
  posts
} from '../../utils/http.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsListArr: [], //商品列表
    page: 1, // 页码
    moreIf: false // 是否加载完了
  },
  // 获取商品banner图列表
  async getList(init) {
    if (init) {
      this.setData({
        page: 1,
        moreIf: false
      })
    }
    wx.showNavigationBarLoading()
    const result = await posts('/goods/list', {
      currentPage: this.data.page,
      pageSize: 10,
      searchVal: ""
    })
    if (result.list.length < 10 && this.data.page > 1) {
      this.setData({
        moreIf: true
      })
    }
    if (init) {
      this.setData({
        goodsListArr: result.list
      })
      wx.stopPullDownRefresh()
    } else {
      const arr = this.data.goodsListArr
      const arrs = [...arr, ...result.list]
      this.setData({
        goodsListArr: arrs
      })
    }

    wx.hideNavigationBarLoading()
  },

  goDetail(e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: `/pages/order/order?id=${e.currentTarget.dataset.id}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
    this.getList(true)
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
    this.getList(true)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    if (this.data.moreIf) {
      return false
    }
    const page = this.data.page + 1
    this.setData({
      page
    }, () => {
      this.getList()
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})