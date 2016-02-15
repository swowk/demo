	




	window.onload = function() {
		//去空格函数，去掉IE下innerHTML多余的空格
		function trim(obj) {
	 		return obj.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
		}

		//股票切换
		(function(){
			var aStockCropLi = document.getElementById('stockCrop').getElementsByTagName('li');

			for (var i = 0; i < aStockCropLi.length; i++) {

				aStockCropLi[i].onmouseover = function() {

					var oImg = document.getElementById('stock-img');
					var data = document.getElementById('stock-data');

					var oData = data.getElementsByTagName('dt')[0];
					var per1 = data.getElementsByTagName('dd')[0];
					var per2 = data.getElementsByTagName('dd')[1];

					var t = this.innerHTML;

					oImg.src = "images/" + trim(t) + ".png";
					oData.innerHTML = '<a href="##">' + trim(t) + '指数</a>';
					per1.innerHTML = Math.round(Math.random()*10000);
				}
			}
		})();


		//头部ICON
		(function(){
			var aHeadIcon = document.getElementById('head-icon').getElementsByTagName('a');

			for (var i = 0; i < aHeadIcon.length; i++) {
				aHeadIcon[i].onmouseover = function() {
					var str = getStyle(this, 'background-image');
					this.style.backgroundImage = str.replace(/.now/,'_hover');
				}

				aHeadIcon[i].onmouseout = function() {
					var str = getStyle(this, 'background-image');
					this.style.backgroundImage = str.replace(/.hover/,'_now');
				}
			}
		})();

		//导航
		(function(){
			var aTitle = [['新闻','图片','军事'],['视频','热剧','综艺'],['娱乐','明星','电影'],['汽车','车型','购物'],['科技','数码','手机'],['教育','课程','出国'],['公益','佛学'],['财经','证券','理财'],['体育','NBA&nbsp;','中超'],['时尚','健康','育儿'],['房产','家具','家电'],['游戏','儿童','星座'],['文化','大家','文学'],['拍客','更多']]

					var oNavbarInner = document.getElementById('navbar-inner');

					for (var i = 0; i < aTitle.length; i++) {

						if (aTitle[i].length == 3) {
							oNavbarInner.innerHTML += '<div><strong><a href="##">' + aTitle[i][0] + '</a></strong><a href="##">' + aTitle[i][1] + '</a><a href="##">' + aTitle[i][2] + '</a></div>';
						}
						else {
							oNavbarInner.innerHTML += '<div><strong><a href="##">' + aTitle[i][0] + '</a></strong><a href="##">' + aTitle[i][1] + '</a></div>';
						}
					}
		})();
	}


		//星座
		function star(obj) {
						var starImg = document.getElementById('luck-left');
						starImg.style.background = 'url(images/astroIcon.png) no-repeat 0 ' + (-parseInt(obj.value)*50) + 'px';
		}

		//标签Tab
		function labelChangeColor() {
			var showLabel = document.getElementById('show-label');
			showLabel.style.background = 'url(images/show-sidebar.png) no-repeat right -80px';
		}

		function getBack() {
			var showLabel = document.getElementById('show-label');
			showLabel.style.background = 'url(images/show-sidebar.png) no-repeat right top';
		}

		//搜索框下拉
		function showSearch() {
			var searchSelected = document.getElementById('search-selected');
			var aSearchSelectedLi = searchSelected.getElementsByTagName('li');
			searchSelected.style.display = 'block';

			for (var i = 0; i < aSearchSelectedLi.length; i++) {
				aSearchSelectedLi[i].onclick = function() {

					var searchMenuInner = document.getElementById('search-menu-inner');

					searchMenuInner.innerHTML = this.innerHTML;
					hideSearch();
				}
			}
		}

		function hideSearch() {
			var searchSelected = document.getElementById('search-selected');
			searchSelected.style.display = 'none';
		}



		function getStyle(obj, attr)  
		{  
    		if(obj.currentStyle)  
    		{  
       			return obj.currentStyle[attr];  
    		}  
    		else  
   			{  
        		return getComputedStyle(obj,false)[attr];  
    		}  
		} 

		//滑动显示回到顶部
		window.onscroll = function() {
			var t = document.documentElement.scrollTop || document.body.scrollTop;
			var oBackTop = document.getElementById('backtop');

			if (t >= 200) {
				oBackTop.style.display = 'block';
			} else {
				oBackTop.style.display = 'none';
			}
		}

		function turnsBlue(obj) {
			startMove(obj, {opacity: 100});
		}

		function turnsTransparent(obj) {
			startMove(obj, {opacity: 30});
		}

		function toTop() {
			document.documentElement.scrollTop = document.body.scrollTop = 0;
		}


		function getByClass(oParent, sClass)
		{
			var aEle=document.getElementsByTagName('*');
			var i=0;
			var aResult=[];
			
			for(i=0;i<aEle.length;i++)
			{
				if(aEle[i].className==sClass)
				{
					aResult.push(aEle[i]);
				}
			}
			
			return aResult;
		}

