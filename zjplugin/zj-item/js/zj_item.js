/**
 * 列表组件
 * 
 * 作者：张剑
 * 
 * QQ：183518918
 * 
 * 博客：www.psvmc.cn
 * 
 * @param $
 */
(function($) {
	$.fn.zj_item = function(options, newData) {
		var settings = {
			"data" : null,
			"url" : null,
			"idField" : "id",
			"textField" : "text",
			"onClick" : null,
			"width" : 200,
			"height" : 555,
			"fit" : false
		}
		// 解决IE8下没有indexOf方法
		if (!Array.prototype.indexOf) {
			Array.prototype.indexOf = function(elt) {
				var len = this.length >>> 0;
				var from = Number(arguments[1]) || 0;
				from = (from < 0) ? Math.ceil(from) : Math.floor(from);
				if (from < 0)
					from += len;
				for (; from < len; from++) {
					if (from in this && this[from] === elt)
						return from;
				}
				return -1;
			}
		}
		// 定义常用方法
		var methods = {
			isContains : function(name, str) {
				var index = name.indexOf(str);
				if (index == -1) {
					return false;
				} else {
					return true;
				}
			},
			getOptions : function(inputObj) {
				var t = $(inputObj);
				var itemConfig = {};
				var s = $.trim(t.attr("data-options"));
				if (s) {
					var s_pre = s.substring(0, 1);
					var s_suf = s.substring(s.length - 1, 1);
					if (s_pre != "{") {
						s = "{" + s;
					}
					if (s_suf != "}") {
						s = s + "}";
					}
					itemConfig = (new Function("return " + s))();
				}
				if (t.attr("value") && "" != t.attr("value")) {
					itemConfig.value = t.attr("value");
				}
				return itemConfig;
			},
			getData : function(opt) {
				if (opt.data) {
					return opt.data;
				} else if (opt.url) {
					var ajaxData = [];
					$.ajax({
						url : opt.url,
						success : function(data) {
							ajaxData = data;
						},
						dataType : "json",
						async : false
					});
					return ajaxData;
				} else {
					return [];
				}
			},
			ulAddLi : function(ul, itemData) {
				var li = $('<li />');
				var a = $('<a onclick="javascript:;" />');
				a.html(itemData["text"]);
				a.attr("value", itemData["id"])
				li.append(a);
				ul.append(li);
			},
			getValueArr : function(obj) {
				var $obj = $(obj);
				var arr = [];
				$obj.find("a").each(function(index) {
					arr.push($(this).attr("value"));
				})
				return arr;
			},
			getValues : function(obj) {
				return methods.getValueArr(obj).join(",");
			},
			getTextArr : function(obj) {
				var $obj = $(obj);
				var arr = [];
				$obj.find("a").each(function(index) {
					arr.push($(this).text());
				})
				return arr;
			},
			getTexts : function(obj) {
				return methods.getTextArr(obj).join(",");
			},
			addItem : function(obj, item) {
				var $obj = $(obj);
				var ul = $obj.find("ul");
				methods.ulAddLi(ul, item);

			},
			delItem : function(obj, id) {
				var $obj = $(obj);
				$obj.find("a[value=" + id + "]").each(function(index) {
					$(this).closest("li").remove();
				})

			}
		}
		if (options && typeof (options) == "string") {
			switch (options) {
			case "getValues":
				return methods.getValues(this.get(0));
				break;
			case "getTexts":
				return methods.getTexts(this.get(0));
				break;
			case "getValueArr":
				return methods.getValueArr(this.get(0));
				break;
			case "getTextArr":
				return methods.getTextArr(this.get(0));
				break;
			case "addItem":
				methods.addItem(this.get(0), newData);
				break;
			case "delItem":
				methods.delItem(this.get(0), newData);
				break;
			default:
				alert("没有该方法");
			}
		} else {
			if (options && typeof (options) == "object") {
				settings = $.extend({}, settings, options);
			}
			console.info(methods.isContains([ "1", "22" ], "1"));
			console.info(methods.isContains("22111fsf", "11"));
			this.each(function(index) {
				var itemOptions = methods.getOptions(this);
				itemOptions = $.extend({}, settings, itemOptions);
				var data = methods.getData(itemOptions);
				var zj_item = $('<div class="zj-item" style="width: 200px;height: 300px;" />');
				var ul = $('<ul />');
				zj_item.append(ul);
				$(this).replaceWith(zj_item);
				var idList = [];
				if (data && data.length > 0) {
					for ( var i = 0; i < data.length; i++) {
						if (methods.isContains(idList, data[i]["id"])) {

						} else {
							idList.push(data[i]["id"]);
							methods.ulAddLi(ul, data[i]);
						}
					}
				}
				zj_item.attr();
			})

		}

	};

})(jQuery);