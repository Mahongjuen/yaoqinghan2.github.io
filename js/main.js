var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    loop: true,
    // 如果需要前进按钮
    navigation: {
        nextEl: '.swiper-button-next'
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});
//音乐开始部分
var music=document.getElementById("music");
var musicImg=document.querySelectorAll(".musicImg")[0];
var audio=document.querySelectorAll("audio")[0];

var flag=1;
music.onclick=function(){
    if(flag==1){
        musicImg.style.animation="none";
        audio.pause();//停止播放
        flag=0;
    }else{
        musicImg.style.animation="box 2s linear infinite";
        audio.play();//开始播放
        flag=1;
    }
}
//音乐结束部分
