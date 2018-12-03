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

// loading蒙层，显示
function loadingShow(tips){
    
    if(!tips){
        tips='loading';
    }

    var str = '<div class="ldshade">';
        str += '<div class="ldcont">';
        str += '<img src="./img/lding.gif"/>';
        str += '<p>'+ tips +'</p>';
        str += '</div>';
        str += '</div>';
    $('body').append(str);
}

// loading蒙层，关闭
function loadingClose(){
    if($('.ldshade').length>0){
        $('.ldshade').remove();
    }
}


// 可编辑框点击相关,在具体页面直接调用方法即可---------------------------------------------------
function mkeditipt(){
	
	$('.editipt').on('focus', function(){
		$(this).addClass('bgfff');
	});

	$('.editipt').on('blur', function(){
		$(this).removeClass('bgfff');
	});
}

// 图片放大缩小按钮Js
function doZoomButtonClicK(){
    $('#zoomInButton,#zoomOutButton').on("click", zoomButtonClickHandler);
}

function zoomButtonClickHandler(e){
    var scaleToAdd = 0.8;
    if(e.target.id == 'zoomOutButton')
        scaleToAdd = -scaleToAdd;
    $('#imageFullScreen').smartZoom('zoom', scaleToAdd);
} 
//页面调用doZoomButtonClicK()即可


// 当前页跳转
function iframeTo(goToPage){
    
    $("#iframeMain").attr('src', goToPage);
    sessionStorage.setItem('curPage', goToPage);
}

// 子页跳转
function PrtIframeTo(goToPage){

    $("#iframeMain",window.parent.document).attr('src', goToPage);
    sessionStorage.setItem('curPage', goToPage);

}