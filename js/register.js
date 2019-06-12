var maxWidth=window.screen.width;
var maxHeight=window.screen.height;
$("body").css({"width":maxWidth});

//用户名验证
function nameBlur() {
    var name = document.getElementById("name");
    var nameRegex= /^([\u4e00-\u9fa5]|\w|[@])+$/;   // 匹配昵称/^([\u4e00-\u9fa5]|\w|[@!#$%&*])+$/;
    var chinaReg=/[\u4e00-\u9fa5]/g;   //匹配中文字符
    var len=name.value.replace(chinaReg,"ab").length;  //把中文字符转换为两个字母，以计算字符长度
    if(name.value==""){
        document.getElementById('error_box1').innerText="请输入用户名";
    }
    else if(!nameRegex.test(name.value)){
        document.getElementById("error_box1").innerHTML="用户名只能由汉字、字母、数字和@组成";
    }else if(len<3||len>15){
        document.getElementById("error_box1").innerHTML="长度为4－16个字符";
    }
    else {
        document.getElementById('error_box1').innerHTML ="<i class='fa fa-check' style='color:#59aac7;border: 1px solid #59aac7;border-radius: 50%'></i>";
        return true;
    }
}
//邮箱验证
function emailBlur(){
    var email=document.getElementById("email");
    var re= /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
    if(email.value==""){
        document.getElementById('error_box2').innerText="请输入电子邮箱";
    }
    else if(!re.test(email.value)){
        document.getElementById("error_box2").innerHTML="邮箱格式不正确";
    }
    else {
        document.getElementById('error_box2').innerHTML ="<i class='fa fa-check' style='color:#59aac7;border: 1px solid #59aac7;border-radius: 50%'></i>";
        return true;
    }
}
//密码验证
function pwdBlur() {
    var password = document.getElementById("password");
    var passwordRegex = /^\w{6,12}$/;
    if(password.value==""){
        document.getElementById('error_box4').innerText="请输入密码";
    }else if(!passwordRegex.test(password.value)){
        document.getElementById('error_box4').innerText="密码为6-12位";
    }else{
        document.getElementById('error_box4').innerHTML ="<i class='fa fa-check' style='color:#59aac7;border: 1px solid #59aac7;border-radius: 50%'></i>";
        return true;
    }
}
//二次密码验证
function repwdBlur(){
    var password=document.getElementById("password");
    var repassword=document.getElementById("repassword");
    if(repassword.value==""){
        document.getElementById('error_box5').innerText="请输入确认密码";
    }
    else if(password.value != repassword.value){
        document.getElementById('error_box5').innerText="两次密码输入不一致";
    }
    else {
        document.getElementById('error_box5').innerHTML ="<i class='fa fa-check' style='color:#59aac7;border: 1px solid #59aac7;border-radius: 50%'></i>";
        return true;
    }
}
//手机号码验证
function phoneBlur(){
    var phone=document.getElementById("phone");
    var re = /^1[3|4|5|7|8][0-9]{9}$/;
    if(phone.value==""){
        document.getElementById('error_box6').innerText="请输入联系电话";
    }
    else if(!re.test(phone.value)){
        document.getElementById('error_box6').innerText="电话格式输入错误";
    }
    else {
        document.getElementById('error_box6').innerHTML ="<i class='fa fa-check' style='color:#59aac7;border: 1px solid #59aac7;border-radius: 50%'></i>";
        return true;
    }
}
//图片随机验证码
var code;
function createCode() {
    code = "";
    var codeLength = 4; //验证码的长度
    var checkCode = document.getElementById("checkCode");
    var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    //所有候选组成验证码的字符，当然也可以用中文的
    for (var i = 0; i < codeLength; i++)
    {
        var charNum = Math.floor(Math.random() * 52);
        code += codeChars[charNum];
    }
    if (checkCode)
    {
        checkCode.className = "code";
        checkCode.innerHTML = code;
    }
}
function codeBlur() {
    var inputCode = document.getElementById("inputCode").value;
    var checkCode = document.getElementById("checkCode");
        if(inputCode.value==""){
            document.getElementById('error_box7').innerText ="请输入图片中的验证码";
        }
        else if(inputCode.toUpperCase() != code.toUpperCase()){
            document.getElementById('error_box7').innerText ="输入验证码错误";
            createCode();
        }
        else{
            document.getElementById('error_box7').innerHTML ="<i class='fa fa-check' style='color:#59aac7;border: 1px solid #59aac7;border-radius: 50%'></i>";
            return true;
        }
}


function submit() {
    var flagName = nameBlur();
    var flagEmail = emailBlur();
    var flagPwd = pwdBlur();
    var flagRepwd = repwdBlur();
    var flagPhone = phoneBlur();
    var flagCode = codeBlur();

    nameBlur();
    emailBlur();
    pwdBlur();
    repwdBlur();
    phoneBlur();
    codeBlur();

    if (flagName == true && flagEmail == true && flagPwd == true && flagRepwd == true && flagPhone == true && flagCode == true) {
                window.location.assign("re-login.html");
            }

    else {
        return false;
    }
}

