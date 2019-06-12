function send() {
    var demo = document.getElementById("demo");
    demo.innerHTML= document.getElementById("in").value;
}

//选择
$(document).ready(function() {
    $("#text").click(function () {
        $(".main-moment .mo-map").hide();
        $(".main-moment .mo-all").hide();
        $(".main-moment .mo-text").show();
    });
    $("#map").click(function () {
        $(".main-moment .mo-map").show();
        $(".main-moment .mo-all").hide();
        $(".main-moment .mo-text").hide();
    });
    $("#mt").click(function () {
        $(".main-moment .mo-map").hide();
        $(".main-moment .mo-all").show();
        $(".main-moment .mo-text").hide();
    });
    $("#all").click(function () {
        $(".main-moment .mo-map").show();
        $(".main-moment .mo-all").show();
        $(".main-moment .mo-text").show();
    });
});
