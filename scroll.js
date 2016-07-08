$(document).ready(function () {
    var num_li = $('.container > div').length//偵測我們有幾個標點（圖片）

    //滾動滑鼠滾輪時，移動到上一頁、下一頁的效果
    n = 1
    moving = 0
    $(window).mousewheel(function (e) {
        $("html,body").stop()
        if (moving == 0) {
            moving = 1
            if (e.deltaY == -1) {
                if (n < num_li) {
                    n++
                }
            } else {
                if (n > 1) {
                    n--
                }
            }
        }
        $("html,body").animate({ "scrollTop": $(".p0" + n).offset().top }, function () { moving = 0 })
        console.log(n)
    })
})