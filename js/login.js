
var maxWidth=window.screen.width;
var maxHeight=window.screen.height;
$("body").css({"width":maxWidth});


function myLogin() {
    var oName = document.getElementById("name")
    var error1 = document.getElementById("error_box1")
    var error2 = document.getElementById("error_box2")
    var oPassword = document.getElementById("password")
    if(oName.value == ""){
        error1.innerHTML="请输入用户名";
        return;
    }else if(oName.value.length<4 || oName.value.length>16){
        error1.innerHTML="用户名长度为4－16个字符";
        return;
    }else{
        if(oPassword.value == ""){
            error2.innerHTML="请输入密码";
            return;
        }else if(oPassword.value.length<6 || oPassword.value.length>12){
            error2.innerHTML="密码为6-12位";
            return;
        }else{
            error2.innerHTML="";
        }
    }
    window.location.assign("login-main.html");
}

$(function () {
    var $btn = $(".btn");
    var $name = $("#name");
    var $password = $("#password");
    $btn.on(
        "click", function () {
            $.ajax({
                url: "",
                data: "$name+$password",
                dataType: "jason",
                type: "post",
                success: function () {
                    if (data == Fail) {
                        alert("登录失败");
                    } else {
                        alert("成功");
                    }
                }
            })
        })
})
