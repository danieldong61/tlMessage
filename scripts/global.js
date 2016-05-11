
var _g_nav_index = 0;                                  // 保存当前小圆点的位置,也就是当前前景页面位�?
function prepareForeground(){                          // 为前景头条添加三个导航按钮（三个小圆点）

	var scrollInterval = setInterval("autoScrollForeground()", 5000);

	$(".foreground_img").click(function(){
		/*	var listIndex = $("#foreground_content li").index(this);*/  //为什么一直是�?
		/*		alert("listIndex");*/ //为什么listIndex�?��是零
		/*		if(_g_nav_index == 0){
		 window.location.href='solution.html';
		 }
		 if(_g_nav_index == 1){
		 window.location.href='case.html';
		 }
		 if(_g_nav_index == 2){
		 window.location.href='aboutus.html';
		 }*/
	}).mouseover(function(){
		$(this).css("cursor","pointer");
		clearInterval(scrollInterval);
	}).mouseout(function(){
		scrollInterval = setInterval("autoScrollForeground()", 5000);
	});

	var mouseTrace = 0;                // 为了避免onclick和onmouseout冲突而设置的变量�?由于click之后必然会触发mouseout事件
	var $foregroundNav = $("<div></div>");
	$foregroundNav.attr("id","foreground_nav");
	/*	$("#foreground").after($foregroundNav);*/
	$("#foreground").append($foregroundNav);

	var $navCircle_1 = $("<div></div>");
	$navCircle_1.attr("class","nav_circle");
	$("#foreground_nav").append($navCircle_1);

	var $navCircle_2 = $("<div></div>");
	$navCircle_2.attr("class","nav_circle");
	$("#foreground_nav").append($navCircle_2);

	var $navCircle_3 = $("<div></div>");
	$navCircle_3.attr("class","nav_circle");
	$("#foreground_nav").append($navCircle_3);

	$(".nav_circle").click(function(){
		$navCircle_1.css("backgroundColor", "#5b5858");
		$navCircle_2.css("backgroundColor", "#5b5858");
		$navCircle_3.css("backgroundColor", "#5b5858");
		$(this).css("backgroundColor", "#ffffff");
		mouseTrace = 1;

		var windowWidth = $(window).width();                            //  网页宽度
		var foregroundList = $("#foreground_content");
		var scrollLength = null;
		scrollLength = 0 - windowWidth;

		var navcircleIndex = $(".nav_circle").index(this);

		// --- 淡入淡出动画使用该效�?- start --- //
		var foregroungList1 = $("#foreground_list_1");
		var foregroungList2 = $("#foreground_list_2");
		var foregroungList3 = $("#foreground_list_3");
		if(navcircleIndex == _g_nav_index){
			; //nothing
		}
		else {
			if(navcircleIndex == 0) {
				foregroungList2.fadeOut(500); // 淡入淡出动画使用该效�?- start //
				foregroungList3.fadeOut(500); // 淡入淡出动画使用该效�?- start //
				foregroungList1.fadeIn(1000); // 淡入淡出动画使用该效�?- start //
			}
			else if(navcircleIndex == 1) {
				foregroungList1.fadeOut(500); // 淡入淡出动画使用该效�?- start //
				foregroungList3.fadeOut(500); // 淡入淡出动画使用该效�?- start //
				foregroungList2.fadeIn(1000); // 淡入淡出动画使用该效�?- start //
			}
			else if(navcircleIndex == 2) {
				foregroungList1.fadeOut(500); // 淡入淡出动画使用该效�?- start //
				foregroungList2.fadeOut(500); // 淡入淡出动画使用该效�?- start //
				foregroungList3.fadeIn(1000); // 淡入淡出动画使用该效�?- start //
			}
			_g_nav_index = navcircleIndex;
		}
		// --- 淡入淡出动画使用该效�?- end --- //
		clearInterval(scrollInterval);
		// --- 滚动动画使用该效�?- start --- //
		/*var temp = navcircleIndex - _g_nav_index;
		 if(temp == 0){
		 ; //nothing
		 }
		 else if(temp == 1){
		 foregroundList.animate({left:scrollLength}, 1000,function(){  // 把ul�?
		 var $li = $("#foreground_content li:eq(0)").remove();        // 删除第一个（移出去的li�?
		 foregroundList.css("left","0");
		 $li.appendTo(foregroundList);
		 });
		 _g_nav_index = navcircleIndex + 1;
		 }
		 else if(temp == 2){
		 var temp_length = scrollLength + scrollLength;
		 foregroundList.animate({left:temp_length}, 2000,function(){   // 把ul�?
		 var $li = $("#foreground_content li:eq(0)").remove();        // 删除第一个（移出去的li�?
		 $li.appendTo(foregroundList);
		 var $li = $("#foreground_content li:eq(0)").remove();        // 删除第一个（移出去的li�?
		 $li.appendTo(foregroundList);
		 foregroundList.css("left","0");

		 });
		 _g_nav_index = navcircleIndex + 1;
		 }
		 else if(temp == -1){
		 foregroundList.css("left",scrollLength);
		 var $li = $("#foreground_content li:eq(2)").remove();        // 删除第一个（移出去的li�?
		 $li.prependTo(foregroundList);
		 foregroundList.animate({left:0}, 1000,function(){  // 把ul�?
		 });
		 _g_nav_index = navcircleIndex + 1;
		 }
		 else if(temp == -2){
		 var temp_length = scrollLength + scrollLength;
		 foregroundList.css("left",temp_length);
		 var $li = $("#foreground_content li:eq(2)").remove();        // 删除第一个（移出去的li�?
		 $li.prependTo(foregroundList);
		 var $li = $("#foreground_content li:eq(2)").remove();        // 删除第一个（移出去的li�?
		 $li.prependTo(foregroundList);
		 foregroundList.animate({left:0}, 2000,function(){  // 把ul�?
		 });
		 _g_nav_index = navcircleIndex + 1;
		 }*/
		// --- 滚动动画使用该效�?- end --- //
		scrollInterval = setInterval("autoScrollForeground()", 5000);
	}).mouseover(function(){
		$(this).css("backgroundColor", "#ffffff");
		$(this).css("cursor", "pointer");
	}).mouseout(function(){
		if(mouseTrace == 1){
			mouseTrace = 0;
		}else{
			var navcircleIndex = $(".nav_circle").index(this);
			if(navcircleIndex != _g_nav_index){
				$(this).css("backgroundColor", "#5b5858");
			}
		}
	});
}
function autoScrollForeground(){
	var foregroundList = $("#foreground_content");
	var foregroungList1 = $("#foreground_list_1");
	var foregroungList2 = $("#foreground_list_2");
	var foregroungList3 = $("#foreground_list_3");
// 滚动动画使用该效�?- start //
//	var windowWidth = $(window).width();                            //  网页宽度
//	var scrollLength = null;
//	scrollLength = 0 - windowWidth;
//	foregroundList.animate({left:scrollLength}, 1000,function(){  // 把ul�?
//		var $li = $("#foreground_content li:eq(0)").remove();        // 删除第一个（移出去的li�?
//		foregroundList.css("left","0");
//		$li.appendTo(foregroundList);
//	});
// 滚动动画使用该效�?- end //
	var nav_circle_0 = $(".nav_circle:eq(0)");
	var nav_circle_1 = $(".nav_circle:eq(1)");
	var nav_circle_2 = $(".nav_circle:eq(2)");
	if(_g_nav_index == 0) {
		foregroungList1.fadeOut(500); // 淡入淡出动画使用该效�?- start //
		foregroungList2.fadeIn(1000); // 淡入淡出动画使用该效�?- start //
		nav_circle_0.css("backgroundColor", "#5b5858");
		nav_circle_1.css("backgroundColor", "#ffffff");
		nav_circle_2.css("backgroundColor", "#5b5858");
		_g_nav_index = 1;
	}
	else if(_g_nav_index == 1) {
		foregroungList2.fadeOut(500); // 淡入淡出动画使用该效�?- start //
		foregroungList3.fadeIn(1000); // 淡入淡出动画使用该效�?- start //
		nav_circle_0.css("backgroundColor", "#5b5858");
		nav_circle_1.css("backgroundColor", "#5b5858");
		nav_circle_2.css("backgroundColor", "#ffffff");
		_g_nav_index = 2;
	}
	else if(_g_nav_index == 2) {
		foregroungList3.fadeOut(500); // 淡入淡出动画使用该效�?- start //
		foregroungList1.fadeIn(1000); // 淡入淡出动画使用该效�?- start //
		nav_circle_0.css("backgroundColor", "#ffffff");
		nav_circle_1.css("backgroundColor", "#5b5858");
		nav_circle_2.css("backgroundColor", "#5b5858");
		_g_nav_index = 0;
	}

}

function prepareWindow(){                 //当网页大小变化是，重新定位在第一个前景头条，否则会出现卡在两个前景之间的情况
	var nav_circle_0 = $(".nav_circle:eq(0)");
	nav_circle_0.css("backgroundColor", "#ffffff");
}
var body1_content_img_move_index = 0;
function prepareBody1(){
	$("#body1_list li a").mouseover(function(){
		if(body1_content_img_move_index == 0){
			$(this).siblings("div").find("img").css("vertical-align","0.01%");
			$this = $(this);
			setTimeout(function(){
				$this.siblings("div").find("img").css("vertical-align"," middle");
			}, 80);
			body1_content_img_move_index = 1;
		} else {
			;
		}

	}).mouseout(function(){
		body1_content_img_move_index = 0;
	})
	/*	$("#body1").mouseover(function(event){
	 var test = $(event.target).attr("id");
	 if(($(event.target).attr('id') == "body1_list") || ($(event.target).attr('id') == "body1")){
	 body1_content_img_move_index = 0;
	 }
	 });*/
}

$(function(){
	prepareForeground();
	prepareWindow();
	prepareBody1();
})
/*-------------------------------------�ٶȵ�ͼ------------------------------------*/
function initMap(){
	createMap();//������ͼ
	setMapEvent();//���õ�ͼ�¼�
	addMapControl();//���ͼ��ӿؼ�
	addMarker();//���ͼ�����marker
}

//������ͼ������
function createMap(){
	var map = new BMap.Map("dituContent");//�ڰٶȵ�ͼ�����д���һ����ͼ
	var point = new BMap.Point(122.172045,37.378354);//����һ�����ĵ�����
	map.centerAndZoom(point,17);//�趨��ͼ�����ĵ�����겢����ͼ��ʾ�ڵ�ͼ������
	window.map = map;//��map�����洢��ȫ��
}

//��ͼ�¼����ú�����
function setMapEvent(){
	map.enableDragging();//���õ�ͼ��ק�¼���Ĭ������(�ɲ�д)
	map.enableScrollWheelZoom();//���õ�ͼ���ַŴ���С
	map.enableDoubleClickZoom();//�������˫���Ŵ�Ĭ������(�ɲ�д)
	map.enableKeyboard();//���ü����������Ҽ��ƶ���ͼ
}

//��ͼ�ؼ���Ӻ�����
function addMapControl(){
	//���ͼ��������ſؼ�
	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
	map.addControl(ctrl_nav);
	//���ͼ���������ͼ�ؼ�
	var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
	map.addControl(ctrl_ove);
	//���ͼ����ӱ����߿ؼ�
	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	map.addControl(ctrl_sca);
}

//��ע������
var markerArr = [{title:"��Ȫ����",content:"��Ȫ����",point:"122.172144|37.378469",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
];
//����marker
function addMarker(){
	for(var i=0;i<markerArr.length;i++){
		var json = markerArr[i];
		var p0 = json.point.split("|")[0];
		var p1 = json.point.split("|")[1];
		var point = new BMap.Point(p0,p1);
		var iconImg = createIcon(json.icon);
		var marker = new BMap.Marker(point,{icon:iconImg});
		var iw = createInfoWindow(i);
		var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
		marker.setLabel(label);
		map.addOverlay(marker);
		label.setStyle({
			borderColor:"#808080",
			color:"#333",
			cursor:"pointer"
		});

		(function(){
			var index = i;
			var _iw = createInfoWindow(i);
			var _marker = marker;
			_marker.addEventListener("click",function(){
				this.openInfoWindow(_iw);
			});
			_iw.addEventListener("open",function(){
				_marker.getLabel().hide();
			})
			_iw.addEventListener("close",function(){
				_marker.getLabel().show();
			})
			label.addEventListener("click",function(){
				_marker.openInfoWindow(_iw);
			})
			if(!!json.isOpen){
				label.hide();
				_marker.openInfoWindow(_iw);
			}
		})()
	}
}
//����InfoWindow
function createInfoWindow(i){
	var json = markerArr[i];
	var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
	return iw;
}
//����һ��Icon
function createIcon(json){
	var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
	return icon;
}
function tlMenu(){
	$("#nav-list-all").mouseenter(function(){
		var newDiv = $("<div class='cover-div'></div>");
		$(this).append(newDiv);
		$(".dropdown-menu li:eq(2)").css("display","block");
		$(".dropdown-menu").css("top", "15%");
		$(".dropdown-menu").animate({top: "100%"}, 120, function(){
			$(".dropdown-menu li:eq(1)").css("display","block");
			$(".dropdown-menu").css("top", "15%");
			$(".dropdown-menu").animate({top: "100%"}, 50, function(){
				$(".dropdown-menu li:eq(0)").css("display","block");
				$(".dropdown-menu").css("top", "15%");
				$(".dropdown-menu").animate({top: "260%"}, 50, function(){
					$(".dropdown-menu").animate({top: "100%"}, 100);
				});
			});
		});
	}).mouseleave(function(){
		$(".cover-div").remove();
		$(".dropdown-menu").stop();
		$(".dropdown-menu li:eq(0)").css("display","none");
		$(".dropdown-menu li:eq(1)").css("display","none");
		$(".dropdown-menu li:eq(2)").css("display","none");
		$(".dropdown-menu").css("top", "0%");
	});
}
function tlTab(){
	$("#left-arm-tab li").click(function(){
		var tabIndex = $("#left-arm-tab li").index(this);
		var aclassType = $(this).children("a").attr("class");
        if(aclassType == "active") {
		} else {
			if(tabIndex == 0) {
				$("#left-arm-tab li:eq(1)").children("a").removeClass();
				$("#left-arm-tab li:eq(0)").children("a").addClass("active");
				$("#tab0").css("display", "block");
				$("#tab1").css("display", "none");
			}else {
				$("#left-arm-tab li:eq(0)").children("a").removeClass();
				$("#left-arm-tab li:eq(1)").children("a").addClass("active");
				$("#tab0").css("display", "none");
				$("#tab1").css("display", "block");
			}

		}
	});
}

/*-------------------------------------�ٶȵ�ͼ------------------------------------*/
function tlLeftarm(){
	$("#left-arm").css("left", "25%");
	$("#left-arm").animate({left:"0"}, 500);
}

function createBreadcrumb(){
	var ctx = $(".breadcrumb")[0].getContext("2d");
	ctx.fillStyle = "rgb(253,95,70)";
	ctx.beginPath();
	ctx.strokeStyle = "rgb(253,95,70)";

	if($.browser.msie&&(($.browser.version == "6.0")||($.browser.version == "7.0")||($.browser.version == "8.0"))){
		ctx.moveTo(0, 0);
		ctx.lineTo(0, 80);
		ctx.lineTo(40, 60);
		ctx.lineTo(80,82);
		ctx.lineTo(80, 0);
	}else {
		ctx.moveTo(0, 0);
		ctx.lineTo(0, 120);
		ctx.lineTo(115, 100);
		ctx.lineTo(230, 120);
		ctx.lineTo(230, 0);
	}
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
}
var navarrowPosition = 0;
function navClick(){
	var navList = $("nav li");
	navList.click(function(){
		var listIndex = $("nav li").index(this);
		$(".active").removeClass("active");
		$(this).children().addClass("active");
		if(listIndex == navarrowPosition){
			if(listIndex == 0) updateArticlelist("all");
			else if (listIndex == 1) updateArticlelist("internet");
			else if (listIndex == 2) updateArticlelist("intelligent");
		}
		else{
			var navarrowDiv = $(".nav-arrow");
			if(listIndex == 0){
				navarrowDiv.animate({left: "11.6%"}, 200);
				navarrowPosition = 0;
				$(".breadcrumbTab a").text("全部");
				$(".arcicles").removeClass("hide");
				$(".statistics").addClass("hide");
				updateArticlelist("all");
			}
			else if(listIndex == 1){
				navarrowDiv.animate({left: "36.6%"}, 200);
				navarrowPosition = 1;
				$(".breadcrumbTab a").text("互联网");
				$(".arcicles").removeClass("hide");
				$(".statistics").addClass("hide");
				updateArticlelist("internet");
			}
			else if(listIndex == 2){
				navarrowDiv.animate({left: "61.6%"}, 200);
				navarrowPosition = 2;
				$(".breadcrumbTab a").text("智慧");
				$(".arcicles").removeClass("hide");
				$(".statistics").addClass("hide");
				updateArticlelist("intelligent");
			}
			else if(listIndex == 3){
				navarrowDiv.animate({left: "86.6%"}, 200);
				navarrowPosition = 3;
				$(".breadcrumbTab a").text("统计");
				$(".arcicles").addClass("hide");
				$(".statistics").removeClass("hide");
			}
			ajax_navClick(listIndex);
		}
	})
}
var likeiconIndex = 0;
function likeiconMove(){
	$(".likeIcon").mouseenter(function(){
		if(likeiconIndex == 0) {
			$(this).animate({top:"-20px"},50, function(){
				$(this).animate({top:"0px"},50);
			})
		}
	}).click(function(){
		$(this).children().css("background","rgba(253,95,70,1)");
		likeiconIndex = 1;
	})
}
function titleclickMove() {
	$("article h2").click(function () {
		$(".nav-arrow").css({
		    'border-left-width':'28px',
			'border-right-width':'28px',
		    'border-top-width':'28px',
			'left':'50%',
		});
		$(".nav-list a").css({
			'color': 'rgba(253,95,70,1)',
		});
		$("nav ul li").css("display","none");
		$("nav ul").css("padding-bottom","0");
	})
}
function callIE(){
	if($.browser.msie&&(($.browser.version == "6.0")||($.browser.version == "7.0")||($.browser.version == "8.0"))){
		$(".breadcrumbTab").css("left","1.5em");
	}
}
var g_current_pageId = 1;
var g_current_pageNo = 1;
function startLoadarticles(){
	$.ajax({
		url: "getArticles.php",
		type: "POST",
		data:{pageId: "all", pageNo: g_current_pageNo},
		success: function(data){//如果调用php成功
			var test = eval('('+data+')');
			var pageNumber;
			if(test[0]%10 == 0) pageNumber =test[0]/10;
			else pageNumber =test[0]/10;+1;
			for(var i=0;i<pageNumber;i++) {
				$('#pageNO').append('<span></span>');
				$('#pageNO span:eq('+i+')').html(i+1);
			}
			for(var i =0;i<test[0];i++){
				$('article:eq('+i+') h2').html(test[(i+1)]['title']);
				$('article:eq('+i+') p').html(test[(i+1)]['brief']);
				$('article:eq('+i+') i').html(test[(i+1)]['date']);
				$('article:eq('+i+') .likenumber').html(test[(i+1)]['likes']);
				$('article:eq('+i+') .viewnumber').html(test[(i+1)]['views']);
				$('article:eq('+i+') .content-img').attr('src',test[(i+1)]['picture']);
			}
			g_current_pageId = 1;
			g_current_pageNo = 1;
		}
	});
}
function updateArticlelist(pageId){
	$('.arcicles article').css("display","none");
	$('#pageNO span').remove();
	$.ajax({
		url: "getArticles.php",
		type: "POST",
		data:{pageId: pageId, pageNo: g_current_pageNo},
		success: function(data){//如果调用php成功
			var test = eval('('+data+')');
			var pageNumber;
			if(test[0]%10 == 0) pageNumber =test[0]/10;
			else pageNumber =test[0]/10;+1;
			for(var i=0;i<pageNumber;i++) {
				$('#pageNO').append('<span></span>');
				$('#pageNO span:eq('+i+')').html(i+1);
			}
			var articlesNumber = 0;
            if(test[0]>10)  articlesNumber = 10;
			else articlesNumber = test[0];
			for(var i =0;i<articlesNumber;i++){
				$('.arcicles article:eq('+i+')').css("display","block");
				$('article:eq('+i+') h2').html(test[(i+1)]['title']);
				$('article:eq('+i+') p').html(test[(i+1)]['brief']);
				$('article:eq('+i+') i').html(test[(i+1)]['date']);
				$('article:eq('+i+') .likenumber').html(test[(i+1)]['likes']);
				$('article:eq('+i+') .viewnumber').html(test[(i+1)]['views']);
			}
			if(pageId=="all") g_current_pageId = 1;
			else if(pageId=="internet") g_current_pageId = 2;
			else if(pageId=="intelligent") g_current_pageId = 3;
			g_current_pageNo = 1;
		}
	});
}
function pageScroll(){

	$('#pageNO span').live('click',function(){
		var pageNo = $('#pageNO span').index(this)+1;
		if(pageNo == g_current_pageNo) {/*nothing*/}
		else{
			$('.arcicles article').css("display","none");
			g_current_pageNo = pageNo;
			/*alert(g_current_pageId);*/
			$.ajax({
				url: "getArticles.php",
				type: "POST",
				data:{pageId: g_current_pageId, pageNo: g_current_pageNo},
				success: function(data){
					var test = eval('('+data+')');
					for(var i =0;i<test[0];i++){
						$('.arcicles article:eq('+i+')').css("display","block");
						$('article:eq('+i+') h2').html(test[(i+1)]['title']);
						$('article:eq('+i+') p').html(test[(i+1)]['brief']);
						$('article:eq('+i+') i').html(test[(i+1)]['date']);
						$('article:eq('+i+') .likenumber').html(test[(i+1)]['likes']);
						$('article:eq('+i+') .viewnumber').html(test[(i+1)]['views']);
					}
				}
			})
		}
	})
}
function showArticle(){
	$(".arcicles h2").click(function(){
		$('.arcicles article').css("display","none");
		$('#pageNO span').remove();
		$.ajax({
			url: "getArticles.php",
			type: "POST",
			data:{pageId: "oneArticle", pageNo: 1},
			success: function(data){
				var test = eval('('+data+')');
				for(var i =0;i<test[0];i++){
					$('.arcicles article:eq('+i+')').css("display","block");
					$('article:eq('+i+') h2').html(test[(i+1)]['title']);
					$('article:eq('+i+') p').html(test[(i+1)]['content']);
					$('article:eq('+i+') i').html(test[(i+1)]['date']);
					$('article:eq('+i+') .likenumber').html(test[(i+1)]['likes']);
					$('article:eq('+i+') .viewnumber').html(test[(i+1)]['views']);
				}
			}
		})
	})
}
function draw(){
	var ctx = $("#tutorial")[0].getContext("2d");
	ctx.fillStyle ="#3666B0";
	/*ctx.strokeStyle = "#aaaaaa";*/
	ctx.moveTo(300,200);
	ctx.arc(300,200,150,0,-Math.PI*6,true);
	ctx.fill();
	ctx.stroke();
}
function canvasMouseon(){
	var circle = {centerX:300,centerY:200,radio:150};
	var drawPercentage =[20,30,15,30,5];
	var drawColor =["red","blue","green","yellow","purple"];
	var ctx = $("#tutorial")[0].getContext("2d");
	var startAngle = 0;
	for(var i =0; i<drawPercentage.length;i++){
		ctx.beginPath();
		ctx.fillStyle =drawColor[i];
		ctx.strokeStyle = drawColor[i];
		ctx.moveTo(circle.centerX,circle.centerY);
		ctx.arc(circle.centerX,circle.centerY,circle.radio,startAngle,startAngle-Math.PI*2*drawPercentage[i]/100,true);
		ctx.fill();
		ctx.stroke();
		startAngle -= Math.PI*2*drawPercentage[i]/100;
	}

	$("#tutorial").mousemove(function(e){
		var data = [20,30,15,30,5];   /*扇形的角度百分比，5组加起来正好是100*/
		var angle=new Array(5);  /*扇形的始末角度*/
		var sum=0;
		for (var i=0;i<data.length ;i++ )
		{
			angle[i]=new Array(2);
			angle[i][0]=sum;
			sum+=data[i]/100;
			angle[i][1]=sum;
		}
		var x1 = $(this).position().left;
		var x2 = e.pageX;
		var x = x2 - x1;
		var y1 = $(this).position().top;
		var y2 = e.pageY;
		var y = y2 - y1;
		var tempX = x-300;
		var tempY = y-200;
		if (((tempX*tempX)+(tempY*tempY))>150*150){
			return -1;
		}
		var ap=Math.atan2(tempY,tempX);
		if (ap<0)
		{
			ap+=Math.PI*2;
		}
		for (var i=0;i<angle.length ;i++ )
		{
			if (((ap/Math.PI/2)>=angle[i][0])&&((ap/Math.PI/2)<=angle[i][1]))
			{
				$(".test p").html(i);
				ctx.clearRect(0,0,700,400);
				ctx.beginPath();
				ctx.fillStyle ="red";
				ctx.strokeStyle = "red";
				ctx.moveTo(300,200);
				ctx.arc(300,200,150,0,-Math.PI/10,true);
				ctx.fill();
				ctx.stroke();

				ctx.beginPath();
				ctx.fillStyle ="blue";
				ctx.strokeStyle = "blue";
				ctx.moveTo(300,200);
				ctx.arc(300,200,150, -Math.PI/10, -Math.PI*7/10,true);
				ctx.fill();
				ctx.stroke();

				ctx.beginPath();
				ctx.fillStyle ="green";
				ctx.strokeStyle = "green";
				ctx.moveTo(285,191);
				ctx.arc(285,191,150, -Math.PI*7/10, -Math.PI*10/10,true);
				ctx.fill();
				ctx.stroke();

				ctx.beginPath();
				ctx.fillStyle ="yellow";
				ctx.strokeStyle = "yellow";
				ctx.moveTo(300,200);
				ctx.arc(300,200,150, -Math.PI*10/10, -Math.PI*16/10,true);
				ctx.fill();
				ctx.stroke();

				ctx.beginPath();
				ctx.fillStyle ="purple";
				ctx.strokeStyle = "purple";
				ctx.moveTo(300,200);
				ctx.arc(300,200,150, -Math.PI*16/10, -Math.PI*20/10,true);
				ctx.fill();
				ctx.stroke();
			}
		}
	})
}
$(function(){
/*	initMap();  //�����ͳ
	prepareForeground();
	prepareWindow();
	prepareBody1();*/
	/*tlMenu();
	tlTab();
	tlLeftarm();*/
	/*	likeiconMove();*/
	/*titleclickMove();*/
	canvasMouseon();

	showArticle();
	startLoadarticles();
	callIE();
	createBreadcrumb();
	navClick();
	pageScroll();

})

