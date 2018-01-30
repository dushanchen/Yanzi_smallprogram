//后台数据接口配置
var host = "http://47.96.6.111:8080/" 
var config = {
  host,
  lesson_info:host+'pisces/user/load/lessoninfo',
  question_info: host +'pisces/load/question'
};
27   //对外把对象config返回
module.exports = config