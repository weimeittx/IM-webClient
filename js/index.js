$(function () {
    window.user ={
        id:"123456",
        nickname:"zhangsan"
    }
    $(function () {
        $("[data-toggle='tooltip']").tooltip();
    });
    var ue = UE.getEditor('editor');
    //$('.right .chat-main .split').mousedown(function () {
    //    $(this).mousemove(function (e) {
    //        console.log(e.pageX + "." + e.pageY)
    //        $('.right .chat-main .split').mouseup(function () {
    //            console.log('µ¯Æð')
    //            $(this).unbind('mousemove');
    //        })
    //    })
    //})
    $("#send").bind('click',function(){
        var content = ue.getContent()
        console.debug(content)
    })

})