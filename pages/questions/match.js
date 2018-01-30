Page({
  data: {

  },
  onLoad: function (option) {
    var that = this;
    var app = getApp();
    that.setData(app.globalData.lessonData.message.question);
    console.info(that.data);
  },
  getNextPage: function () {
    wx.redirectTo({
      url: "../lesson/questions",
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})