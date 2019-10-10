

var clipboard = new Clipboard('#copy-link',{
    text:function () {
        return $('#bar').val();
    }
});
clipboard.on('success',function (e) {
    $('#bar').focus();
    $('#bar').select();
    $('#copy-link').text('已复制');
    return false;
});
clipboard.on('error',function (e) {
    console.log('复制失败',e);
});

