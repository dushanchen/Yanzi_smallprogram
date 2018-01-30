const url = require('../../config').question_info


Page({
  data:{
    courseId:1,
    lessonId:1,
    index:1
  },
  onLoad:function(options){
    var that = this;
    var app = getApp();
    var data = app.globalData.lessonRoot;
    var a = data.index;
    data.index = a + 1;//答题下一节
    wx.request({  //请求关卡题目信息
      url:url,
      data:{
        courseId:data.courseId,
        lessonId:data.lessonId,
        index:data.index
      },
      success:function(res){
        
        console.info(data);
        if(res != null){
          var question_url;//判断是哪种题型，跳转到不同的页面
          switch(res.data.message.question.type){
            case 1:
              question_url = '../questions/blank';
              break;
            case 2:
              question_url = '../questions/options';
              break;
            case 3:
              question_url = '../questions/switch';
              break;
            case 4:
              question_url = '../questions/dialog';
              break;
            default:
              question_url = '../index/error';

          }
          var app = getApp();
          app.globalData.lessonData = res.data;
          app.globalData.lessonRoot = that.data;
          that.redirectQuestion(question_url);
          }
        }
      })
    },
  redirectQuestion: function (question_url){
    wx.redirectTo({
      url: question_url,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
  ,onReady:function(){
  }
})