// client/pages/order/order.js
import regeneratorRuntime from '../../utils/runtime.js';
import { get, posts } from '../../utils/http.js';
import { showSuccess } from '../../utils/util.js';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    goodsDetailInfo: {}, //商品详情信息
    imageArr: [],
    orderType: '1', //订单类型1-堂食2-外卖
    num: 1, //购买数量
    totalPrice: 0
  },
  // 获取商品详情信息
  async getDetail(id) {
    //const goodsDetailInfo = await posts(`/goods/${id}`);
    const goodsDetailInfo = await posts('/goods/detail', {
      id
    });
    this.setData({
      goodsDetailInfo: goodsDetailInfo,
      imageArr: goodsDetailInfo.imgUrl ? goodsDetailInfo.imgUrl.split(';') : [],
      totalPrice: this.data.num * goodsDetailInfo.price * 100
    });
    wx.setNavigationBarTitle({
      title: goodsDetailInfo.name
    });
  },

  //订单类型
  orderTypeChange(e) {
    this.setData({
      orderType: e.detail
    });
  },
  //购买数量
  numChange(e) {
    console.log(e.detail);
    console.log(this.data.goodsDetailInfo.price);
    console.log(e.detail * this.data.goodsDetailInfo.price);
    console.log(e.detail * this.data.goodsDetailInfo.price * 100);
    this.setData({
      num: e.detail,
      totalPrice: e.detail * this.data.goodsDetailInfo.price * 100
    });
  },
  //下单
  placeOrder() {
    wx.chooseAddress({
      success(res) {
        console.log(res.userName);
        console.log(res.postalCode);
        console.log(res.provinceName);
        console.log(res.cityName);
        console.log(res.countyName);
        console.log(res.detailInfo);
        console.log(res.nationalCode);
        console.log(res.telNumber);
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getDetail(options.id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
