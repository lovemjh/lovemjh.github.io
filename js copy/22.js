<script>
    $(window).scroll(function () {
        //获取元素到顶部的距离
        var topPin = $('.js-toc-w').offset().top - $(window).scrollTop();
        console.log(topPin)
    });
    $(window).scroll(function () {


        var topPin = $('.js-toc-w').offset().top - $(window).scrollTop();
        //获取滚动条的高度
        var scrollTop = $(this).scrollTop();
        //获取一个屏幕的高度
        var windowHeight = document.body.clientHeight;

        console.log("div本身的高度:" + $('.js-toc-w').height());
        console.log("距离顶部的的位置" + scrollTop);

        //当滚动条滚动到一边的最底部，把需要的div滚动到底部就固定div不让移动了
        if (scrollTop > $('.js-toc-w').height() - windowHeight) {
            $(".js-toc-w").css("position", "fixed"); //固定div让其不随着滚动条的滚动而滚动
            $(".js-toc-w").css("bottom", "10px");
        }
        else {
            $(".js-toc-w").css("position", "static");//恢复div可以跟随滚动条滚动
        }

    });

</script>