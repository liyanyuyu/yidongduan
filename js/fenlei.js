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
          //楼层
            })
          var body=document.lastElementChild;
          window.onscroll=function(){
           $('.ser-ite').each(function(){
                var $loutitop=$('.ser-ite').eq($(this).index()).offset().top;
                //console.log($loutitop);
                if($loutitop+340>body.scrollTop){//楼层的top大于滚动条的距离
                    $('.ser-fl li a').removeClass('len');
        
                    //设置rem
            
    //这里你可以尽情的写你的刷新代码！
            var html=document.documentElement;
            var Width=html.getBoundingClientRect().width;
            html.style.fontSize=Width/10+'px';$('.ser-fl li a').eq($(this).index()).addClass('len');
                    return false;//中断循环
                }
            });
        }
        //2.获取每个楼梯的offset().top,点击楼梯让对应的内容模块移动到对应的位置  offset().left
        
        var $loutili=$('.ser-fl li').not('.last');
        $loutili.on('click',function(){
            $(this.find).addClass('len').siblings('a').removeClass('len');
            var $loutitop=$('.ser-ite').eq($(this).index()).offset().top;
            //获取每个楼梯的offsetTop值
            $('html,body').animate({//$('html,body')兼容问题body属于chrome
                scrollTop:$loutitop
            })
        });

	var itemsss=document.querySelectorAll('.ser-fl ul li');
    var itemaaa=document.querySelectorAll('.ser-fl ul li a');
    console.log(itemsss);
    console.log(itemaaa);
    for(var i=0;i<itemsss.length;i++){
           itemsss[i].index=i;
           itemsss[i].onclick=function(){
               for(var j=0;j<itemaaa.length;j++){
                   itemaaa[j].removeAttribute('class');
               }
               itemaaa[this.index].setAttribute('class','len');
           }
       }

}
