$(function(){
    $('.denglu').click(function () {
        $('.mask').show()
        setStyle()
    })
    $('.ddel').click(function () {
        $('.mask').hide()
    })
    function setStyle() {
        let l = ($(document).width() - $('.login').outerWidth()) / 2;
        let t = ($(document).height() - $('.login').outerHeight()) / 2
        $('.login').css({
            left: l,
            top: t
        })
    }
    $('.dtop').mousedown(function (event) {
        let e = event || window.event;
        let x = e.offsetX;
        let y = e.offsetY;
        $(document).mousemove(function (e) {
            let l = e.clientX - x;
            let t = e.clientY - y;
            if (l < 0) {
                l = 0
            }
            if (l > $(document).width() - $('.login').outerWidth()) {
                l = $(document).width() - $('.login').outerWidth()
            }
            if (t < 0) {
                t = 0
            }
            if (t > $(document).height() - $('.login').outerHeight()) {
                t = $(document).height() - $('.login').outerHeight()
            }
            $('.login').css({
                left: l,
                top: t
            })
        })
    })
    $(document).mouseup(function () {
        $(document).off('mousemove')
    })
    $(document).keyup(function (event) {
        let e = event || window.event;
        if (e.keyCode === 27) {
            $('.mask').hide()
        }
    })
    let username = $('.username');
    let password = $('.password');
    let checkbox = $('.checkbox')
    let obj = {};
    checkbox.change(function () {
        if (checkbox.prop('checked')) {
            $('#dlu').css('opacity', 1)
        } else {
            $('#dlu').css('opacity', 0.5)
        }
        panduan()
    })
    username.change(function () {
        let usernameTest = /^[a-z][0-9A-Za-z]{5,11}$/i.test(username.val());
        if (!usernameTest) {
            $(this).next().html('用户名不合法')
        } else {
            obj.usernameTest = usernameTest;
            $(this).next().html('')
        }
        panduan()
    })
    password.change(function () {
        let passwordTest = /^[^\s]{6,18}$/.test(password.val());
        if (!passwordTest) {
            $(this).next().html('密码不合法')
        } else {
            obj.passwordTest = passwordTest
            $(this).next().html('')
        }
        panduan()
    })
    function panduan() {
        if (obj.passwordTest && obj.usernameTest && checkbox.prop('checked')) {
           $('#dlu').prop('disabled',false);
        } else { 
            $('#dlu').prop('disabled',true);
        }
    }
    $('#dlu').click(function(){
        $('.mask').hide()
    })
})