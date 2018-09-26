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
           
//	var btn=document.querySelectorAll('.sec-is-fr a');
//	var spn=document.querySelectorAll('.sec-is-fr span');
//	console.log(btn);
//	for(var s=0;s<btn.length;s++){
//		btn[s].index=s;
//		btn[s].onclick=function(){
//			if((btn[this.index].firstChild.firstChild.innerHTML)=='+'){
//				btn[this.index].previousElementSibling.firstChild.firstChild.innerHTML=parseInt(btn[this.index].previousElementSibling.firstChild.firstChild.innerHTML)+1;
//			}else{
//				if(btn[this.index].nextElementSibling.firstChild.firstChild.innerHTML<=1){
//					
//				}else{
//					btn[this.index].nextElementSibling.firstChild.firstChild.innerHTML=parseInt(btn[this.index].nextElementSibling.firstChild.firstChild.innerHTML)-1;
//				}
//				
//			}
//			console.log($(this))
//		}
//	}
})
    var zj=document.querySelector('.sec-bot span');
    var inps=document.querySelectorAll('.sec-item input');
    var inp=document.querySelector('.sec-title input')
	var zz=parseInt(zj.innerHTML);
	console.log(zz);
    var n=0;
    var w=0;
	for(var j=0;j<inps.length;j++){
		inps[j].onclick=function(){
			if(this.checked){
				this.style.background='url(img/icon_radio4.png) no-repeat center center';
				this.style.backgroundSize=' 0.54054rem 0.54054rem';
				this.style.width=' 0.54054rem';
				this.style.height=' 0.545945rem';
				this.style.borderRadius='100%';
                console.log(this.parentElement.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.innerHTML)
				var ss=this.parentElement.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.innerHTML;
               
                w+=n+parseFloat(ss)
                 console.log(w)
                zj.innerHTML=w.toFixed(2);
//				var e=zz;
//				zj.innerHTML=zz+e;
			}else{
				this.style.background='';
				var ss=this.parentElement.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.innerHTML;
               
                w+=n-parseFloat(ss)
                 console.log(w)
                zj.innerHTML=w.toFixed(2);
			}
		}
	}
    var sxj=document.querySelectorAll('.sec-is-fl>span>b');
   var strs=0;
    var bool=false;
	inp.onclick=function(){
		if(bool){
			inp.style.background='';
			for(var i=0;i<inps.length;i++){
				inps[i].style.background='';
			}
			bool=false;
            zj.innerHTML=strs.toFixed(2);
		}else{
			inp.style.background='url(img/icon_radio4.png) no-repeat center center';
			inp.style.backgroundSize=' 0.54054rem 0.54054rem';
			inp.style.width=' 0.54054rem';
			inp.style.height=' 0.545945rem';
			inp.style.borderRadius='100%';
			bool=true;
			for(var i=0;i<inps.length;i++){
				inps[i].style.background='url(img/icon_radio4.png) no-repeat center center';
				inps[i].style.backgroundSize=' 0.54054rem 0.54054rem';
				inps[i].style.width=' 0.54054rem';
				inps[i].style.height=' 0.545945rem';
				inps[i].style.borderRadius='100%';
			}
             for(var u=0,l=0;u<sxj.length;u++){
                 console.log(sxj[u].innerHTML)
                l+=parseFloat(sxj[u].innerHTML)
                    }
                console.log(l)
                zj.innerHTML=l.toFixed(2);
		}
		
	}
}
	
