$(function(){
    // 调用函数获取信息
    getUserInfo()
})

// 获取用户的基本信息
function getUserInfo(){
    $.ajax({
        method:'GET',
        url:'/my/userinfo',
        headers: {
            Authorization: localStorage.getItem('token') || ''
          },
          success:function(res){
              if(res.status !== 0){
                  return layui.layer.msg('获取用户信息失败')
              }
              
          }
    })
}