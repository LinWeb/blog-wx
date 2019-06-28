const app = getApp()
const Util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleListData: [],
    pager: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'https://www.lxsblog.cn/api/article/list',
      success: ({
        data,
        statusCode
      }) => {
        if (statusCode === 200) {
          let articleListData = data.response.map(item => {
            let newItem = { ...item
            }
            newItem['createdAt'] = Util.formatDate(new Date(newItem['createdAt']))
            newItem['content'] = app.towxml.toJson(newItem['content'], 'markdown')
            return newItem
          })
          this.setData({
            articleListData,
            pager: data.pager
          })
        }
      }
    })
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