window.onload=function(){
	//设置rem
            var html=document.documentElement;
            var Width=html.getBoundingClientRect().width;
            html.style.fontSize=Width/10+'px';
            $(window).resize(function(){
//  alert("窗体大小改变了！");
      location.reload();
    //这里你可以尽情的写你的刷新代码！
            var html=document.documentElement;
            var Width=html.getBoundingClientRect().width;
            html.style.fontSize=Width/10+'px';

})
   var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop:true,
    autoplay:true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
  })
	//顶部导航
	$(window).scroll(function(){
// 滚动条距离顶部的距离 大于30px时
	if($(window).scrollTop() >=30){
		$(".nav").css("background","deepskyblue"); // 开始淡入
		} else{
		 $(".nav").css("background","");// 如果小于等于30	 淡出
		}
	})
                             }
