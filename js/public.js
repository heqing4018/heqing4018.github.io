// 弹框相关---------------------------------------------
var ohtml =  $("html");
// 弹框打开，oSdBox为弹框的jq对象
function ShadeShow(oSdBox){

	var oShade = $('.shade');//遮罩
    ohtml.addClass('boxshowing');
    
    oShade.slideDown();
	oSdBox.slideDown();
}

// 弹框关闭，oSdBox为弹框的jq对象
function ShadeClose(oSdBox){

	var oShade = $('.shade');//遮罩
	ohtml.removeClass('boxshowing');
    
    oShade.slideUp();
    oSdBox.slideUp();
    
}


