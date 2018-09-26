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
	 	//顶部导航
            })
	
}
