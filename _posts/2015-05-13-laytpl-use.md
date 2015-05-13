---

layout: post
title: laytpl的用法
description: laytpl的用法
keywords: js
category: js

---

##demo
	<!doctype html>
	<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<script type="text/javascript" src="laytpl/laytpl.js"></script>
	<script id="mytemplate" type="text/html">
	<h1>{{ d.title }}</h1>
	<ul>
	{{# for(var i = 0, len = d.list.length; i < len; i++){ }}
	    <li>
	        <span>姓名：{{ d.list[i].name }}</span>
	        <span>城市：{{ d.list[i].city }}</span>
	    </li>
	{{# } }}
	</ul>
	</script>
	</head>
	<body>
		<div id="view"></div>
		<script type="text/javascript">
			var data = {
				title : '前端攻城师',
				list : [ {
					name : '贤心',
					city : '杭州'
				}, {
					name : '谢亮',
					city : '北京'
				}, {
					name : '浅浅',
					city : '杭州'
				}, {
					name : 'Dem',
					city : '北京'
				} ]
			};
			var gettpl = document.getElementById('mytemplate').innerHTML;
			laytpl(gettpl).render(data, function(html) {
				document.getElementById('view').innerHTML = html;
			});
		</script>
	</body>
	</html>

##模版语法
+ 输出一个普通字段，不转义html：   `{{ d.field }}`
+ 输出一个普通字段，并转义html：   `{{= d.field }}`
+ JavaScript脚本： `{{# JavaScript statement }}`

##内置方法
###核心函数，返回一个对象

	var tpl = laytpl(template);
    tpl.render(data, callback);
   
渲染方法，返回渲染结果，支持异步和同步两种模式

	a)：异步
	tpl.render(data, function(result){
	    console.log(result);
	});
	
	b)：同步
	var result = tpl.render(data);
	console.log(result);

    
###初始化配置
	laytpl.config(options);
    options是一个对象
    {open: '开始标签', close: '闭合标签'}

###获取版本号
	laytpl.v
