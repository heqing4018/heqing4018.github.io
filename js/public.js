// 弹框相关---------------------------------------------
var ohtml =  $("html");
// 弹框打开，oSdBox为弹框的jq对象
function ShadeShow(oSdBox){
    var oShadeIndex = $('.shade', parent.document);//主页面的遮罩
	var oShade = $('.shade');//遮罩
	ohtml.addClass('boxshowing');

    oShadeIndex.show();
    oShade.show();
	oSdBox.show();
}

// 弹框关闭，oSdBox为弹框的jq对象
function ShadeClose(oSdBox){
    var oShadeIndex = $('.shade', parent.document);//主页面的遮罩
	var oShade = $('.shade');//遮罩
	ohtml.removeClass('boxshowing');
    
    oShadeIndex.hide();
    oShade.hide();
    oSdBox.hide();
    
}


// 当前页跳转
function iframeTo(goToPage){

    $("#iframeMain").attr('src', goToPage);

}

// 子页跳转
function PrtIframeTo(goToPage){

    $("#iframeMain",window.parent.document).attr('src', goToPage);
    sessionStorage.setItem('curPage', goToPage);

}

// 清除本地缓存 ，当前页信息
function clearSessionStorage(){
    sessionStorage.setItem('menuid', '');
    sessionStorage.setItem('curPage', '');
}

//设置当前页名字和索引缓存,iframeTo方法和home页菜单跳转执行之前调用(子页面跳转不需调用此方法)
function setSessionStorage(menuid, curPage){
    sessionStorage.setItem('menuid', menuid);
    sessionStorage.setItem('curPage', curPage);
}

//获取左侧总菜单信息
function getMnpages(){
    var mnpages = [];
    $('a[menuid]').each(function(index){
        mnpages.push($(this).attr('href'));
    })
    sessionStorage.setItem('mnpages', mnpages);
    //本地存储的mnpages是字符串类型
}

//根据菜单页名字获取在总菜单项目中索引
function getTargetMnpage(curPage){

    var mnpages = sessionStorage.getItem('mnpages').split(',');

    if(!Array.indexOf){
        Array.prototype.indexOf = function(el){
            for (var i=0,n=this.length; i<n; i++){
                if (this[i] === el){
                    return i;
                }
            }
            return -1;
        } 
    }
    return mnpages.indexOf(curPage);
    
}
