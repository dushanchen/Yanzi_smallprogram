const url = require('../../config').lesson_info;

Page({
  data:{

  },
onLoad:function(){
  var that = this;
  that.getData();
},
  getData: function () {
    console.info(url);
    var that = this;;
    wx.request({
      url: url,
      data: {
        courseId: 1,
        lessonId: 1,
        token: 1
      },
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      complete: function (res) {
        if (res == null || res.data == null) {
          reject(new Error('网络请求失败'))
        }
      },
      success: function (res) {
        if (res.data.code != 0 || res.data.code != 0) {
          console.info(res.data.message);
        } else {
          var data = res.data.message.lessonInfo;
          that.setData(data.lessonSummary);
        }
      }
    })
  }
})