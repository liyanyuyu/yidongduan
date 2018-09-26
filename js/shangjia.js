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
	var item=document.querySelectorAll('.art-item');
	var items=document.querySelectorAll('.art-items');
	var itemss=document.querySelector('.art-ite');
	var itemsss=document.querySelector('.art-itemss');
	var itemass=document.querySelectorAll('.art-liss>li');
	console.log(itemss);
	console.log(itemsss);
	var bool=true;
    for(var i=0;i<item.length;i++){
           item[i].index=i;
           item[i].onclick=function(){
               for(var j=0;j<items.length;j++){
                  items[j].style.display='none';
                  itemsss.style.display='none';
               }
               if(bool){
						bool=false;
						items[this.index].style.display='block';
					}else{
						bool=true;
						items[this.index].style.display='none';
					}
           }
           itemss.onclick=function(){
           	 for(var j=0;j<items.length;j++){
                  items[j].style.display='none';
               }
		if(bool){
						bool=false;
						itemsss.style.display='block';
					}else{
						bool=true;
						itemsss.style.display='none';
					}
	}
      }
	
	var itemssss=document.querySelectorAll('.art-lis li');
    var itemaa=document.querySelectorAll('.art-li>li');
     
    for(var i=0;i<itemssss.length;i++){
           itemssss[i].index=i;
           itemssss[i].onclick=function(){
           	;
               for(var j=0;j<itemaa.length;j++){
                   itemaa[j].style.display='none';
                   itemssss[j].style.background='white';
               }
               itemaa[this.index].style.display='block';
               this.style.background='#f4f4f4';
               
           }
       }
    var itemas=document.querySelectorAll('.art-li ul>li');
    
    console.log(itemas)
    for(var z=0;z<itemas.length;z++){
    	itemas[z].index=z;
    	itemas[z].onclick=function(){
    		this.parentElement.parentElement.parentElement.parentElement.style.display='none';
    	}
    }
    for(var q=0;q<itemass.length;q++){
    	itemass[q].index=q;
    	itemass[q].onclick=function(){
    		this.parentElement.parentElement.style.display='none';
    	}
    }
}
