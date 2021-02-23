$(function(){
    // 轮播图
    let timer;
        let index = 1;
        $('.banner').mouseover(function () {
            clearInterval(timer)
            $('.btn_l,.btn_r').show()
        })
        $('.banner').mouseleave(function () {
            $('.btn_l,.btn_r').hide()
            timer = setInterval(function () {
                index++;
                move()
            }, 2000)
        })
        let flag = true
        $('.btn_r').click(function () {
            if (flag) {
               flag = false;
                index++;
                move()
            }
        })
        $('.btn_l').click(function () {
            if (flag) {
                flag = false;
                index--;
                move()
            }
        })
        timer = setInterval(function () {
            index++;
            move()
        }, 2000)
        function move() {
            $('.banner_l nav').animate({
                left: -750 * index
            }, 500, function () {
                flag = true;
                if (index == $('.banner_l nav img').size() - 1) {
                    index = 1
                    $('.banner_l nav').css('left', -750)
                }
                if (index == 0) {
                    index = 5
                    $('.banner_l nav').css('left', -750 * 5)
                }
            })
        }
})