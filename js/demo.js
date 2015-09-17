/**
 * Created by Administrator on 2015/9/17.
 */

$(function(){

    (function(){
        var list=$("#list");
        var li=list.find("li");
        var liLen=li.length;
        var air=$(".air li")
        var index=0;
        var playing=false;
        var timer=null;

        //轮播效果
        function go(key){
            li.fadeOut(600,function(){
                playing=true
            });
            index=key % liLen;
            li.eq(index).fadeIn(600,function(){
                playing=false
            });
            air.eq(index).addClass("active").siblings().removeClass("active");
        }
        //向右滑动
        li.on("swipeleft",function(){
            if(!playing){
                return
            }
            index++;
            go(index);
        });
        //向左滑动
        li.on("swiperight",function(){
            if(!playing){
                return
            }
            index--;
            go(index);
        });
        //点击事件
        air.on("tao",function(){
            if(!playing){
                return
            }
            index=$(this).index();
            go(index)
        });

        timer=setInterval(function(){
            index++;
            autoPlay(index)
        },1100);




        $(".auto1_left_btn,.auto1_right_btn").on("tap",function(){
            $(this).toggleClass("btn1")
        })
        $(".auto2_left_btn,.auto2_right_btn").on("tap",function(){
            $(this).toggleClass("btn2")
        })
        $(".auto3_left_btn,.auto3_right_btn").on("tap",function(){
            $(this).toggleClass("btn3")
        })
    })()
});