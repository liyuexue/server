/**
 * Created by Administrator on 2017/10/19.
 */


app.directive('news',function ($timeout) {
    return {
        restrict:"EA",
        templateUrl:"App/View/temp/news.html",
        link:function (scope,ele,attr,controller) {
            $timeout(function () {
                $('.header li').click(function () {
                    var index = $(this).index();
                    $(this).addClass('active').siblings().removeClass('active');
                    $('.main .bigbox').eq(index).show().siblings().hide();
                })
            })
        }
    }
})