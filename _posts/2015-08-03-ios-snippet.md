---

layout: post
title: iOS常用代码段
description: iOS常用代码段
keywords: ios,代码段
categories: ios swift

---
作为初学者，ios的有些属性老是记不住，所以就简要记录一下
###ImageView圆角
```swift
var layer = cell.leftImageView.layer;
layer.masksToBounds=true;
layer.cornerRadius = cell.leftImageView.bounds.size.width/2;

```

###NavigationController
属性设置

```swift
//设置是否透明
self.navigationController?.navigationBar.translucent = false;
//是否隐藏
self.navigationController?.navigationBarHidden = true;
//设置标题
self.navigationItem.title = "我是标题";

```
全局设置

```swift
var appear = UINavigationBar.appearance();
appear.tintColor = UIColor.orangeColor();
appear.translucent = true;
appear.titleTextAttributes = [NSForegroundColorAttributeName: UIColor.orangeColor(),NSFontAttributeName: UIFont(name: "Heiti SC", size: 18.0)!];
```
###TabBarController
属性设置

```swift
//是否隐藏
self.tabBarController?.tabBar.hidden = true;

```

###TableView
```swift
//设置偏移
self.userbookTableView.contentInset=UIEdgeInsetsMake(-64, 0, 0, 0);

```

###TableViewCell
```swift
//设置cell右面的图标
cell.accessoryType = UITableViewCellAccessoryType.DisclosureIndicator;
```

###Segue传值

```swift
override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
    var dv = segue.destinationViewController as! UIViewController;
    var isExist = dv.respondsToSelector(Selector("naviTitle"));
    if(isExist){
        dv.setValue(selectCellName, forKey: "naviTitle")
    }
}
```

