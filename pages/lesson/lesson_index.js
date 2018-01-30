const url = require('../../config').lesson_info;
 
Page({
  data:{ 
  },
  onLoad:function(options){
    var that = this;
    that.getData();
  },
  getQuestion(){
    var that = this;
    var app = getApp();
    app.globalData.lessonRoot = {
          'courseId' : that.data.courseId,
          'lessonId': that.data.lessonId,
          'index':0
    }
    wx:wx.redirectTo({
      url: 'questions',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  getData:function(){
    console.info(url);
    var that = this;;
    wx.request({
      url: url,
      data: {
        courseId: 1,
        lessonId:1,
        token:1
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
        if (res.data.code != 0 || res.data.code!=0) {
          console.info(res.data.message);
        }else{
          var data = res.data.message.lessonInfo;
          that.setData({
            image_url: data.lessonPrimer.image,
            status:data.userLessonStatus,
            correctPercent:data.userLessonStatus.correctPercent,
            exp: data.userLessonStatus.exp,
            isComplete: data.userLessonStatus.isComplete?'重新闯关':'开始闯关',
            brief:data.lessonPrimer.brief,
            content:data.lessonPrimer.content.split('\r\n'),
            title:data.lessonPrimer.title,
            courseId:data.lessonInfo.courseId,
            lessonId:data.lessonPrimer.lessonId
          });
        }
        var app = getApp();
        app.globalData.summery = data.lessonSummery;
      }
    })
  }
})
