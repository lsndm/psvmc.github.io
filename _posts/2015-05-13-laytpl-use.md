---

layout: post
title: laytpl的用法
description: laytpl的用法
keywords: js
category: js

---



##模版语法
	输出一个普通字段，不转义html：   {{ d.field }}
	输出一个普通字段，并转义html：   {{= d.field }}
	JavaScript脚本： {{# JavaScript statement }}

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
