---

layout: post
title: iOS对象实例化
description: iOS对象实例化
keywords: ios,实例化
categories: ios swift

---

###实例化TableCell
```swift
var cell = tableView.dequeueReusableCellWithIdentifier("textLeftCell") as? TextLeftTableViewCell;
if(cell == nil){
	var arr = NSBundle.mainBundle().loadNibNamed("TextLeftTableViewCell", owner: nil, options: nil);
	cell = arr[0] as? TextLeftTableViewCell;
}
```
如果用的xib或storybord中的tableview的cell直接用`dequeueReusableCellWithIdentifier`方法就行了  
注意`dequeueReusableCellWithIdentifier`方法是从已经实例化的cell中查找id为`textLeftCell`的对象并进行拷贝 
`loadNibNamed`方法是查找文件名为`TextLeftTableViewCell`的文件  
一定要记得设置`tableViewCell`的id

###实例化视图控制器
```swift
self.storyboard?.instantiateViewControllerWithIdentifier("renwuMy") as! RenwuMyViewController;
```

