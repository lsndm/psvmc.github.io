---

layout: post
title: easyui注意点
description: easyui注意点
keywords: easyui
category: easyui

---

##解析后添加的元素

	var targetObj = $("<input name='mydate' class='easyui-datebox'>").appendTo("#id");

进行解析

	$.parser.parse(targetObj);

##不出现滚动条

解决方式很简单 修改`fit:true` 改为`false` 就行了

##布局
`panel` 中 `north`和`south` 必须设置高度 `east`和`west`必须设置宽度 必须要有`center`



