---

layout: post
title: iOS常用代码段
description: iOS常用代码段
keywords: ios,代码段
categories: ios swift

---

###ImageView圆角
```swift
var layer = cell.leftImageView.layer;
layer.masksToBounds=true;
layer.cornerRadius = cell.leftImageView.bounds.size.width/2;

```
###我常用的全局设置
```swift
let appear = UINavigationBar.appearance();
appear.translucent = false;
//设置Item的样式
appear.tintColor = UIColor.whiteColor();
//设置bar的颜色
appear.barTintColor = UIColor(red: 52/255, green: 146/255, blue: 233/255, alpha: 1.0);
//设置背景色（不透明时没用,因为barTintColor在backgroundColor的上一层）
appear.backgroundColor = UIColor(red: 253/255, green: 150/255, blue: 13/255, alpha: 1.0);
//去掉navigationBar下的黑线
appear.setBackgroundImage(UIImage(), forBarMetrics: UIBarMetrics.Default)
appear.shadowImage = UIImage();
//设置标题样式
appear.titleTextAttributes = [NSForegroundColorAttributeName: UIColor.whiteColor(),NSFontAttributeName: UIFont(name: "Heiti SC", size: 18.0)!];
        
let tabbarAppear = UITabBar.appearance();
tabbarAppear.tintColor = UIColor(red: 56/255, green: 173/255, blue: 255/255, alpha: 1.0);
        
let searchBarAppear = UISearchBar.appearance();
searchBarAppear.translucent = false;
searchBarAppear.backgroundColor = UIColor(red: 240/255, green: 240/255, blue: 240/255, alpha: 1.0);
searchBarAppear.barTintColor = UIColor(red: 240/255, green: 240/255, blue: 240/255, alpha: 1.0);
searchBarAppear.layer.borderColor = UIColor(hexString: "#ffffff")!.CGColor;
searchBarAppear.layer.borderWidth = 0;
searchBarAppear.backgroundImage = UIImage();
```
####注意优先级顺序
`控制器中代码设置` > `storybord设置` > `全局设置`   
优先级高的会覆盖优先级低的配置，比如storybord中的设置了navigationbar的样式 那么全局设置就不生效

###设置状态栏
`Info.plist`添加两个配置项  
`View controller-based status bar appearance` 设置为 `NO`  
`Status bar style` 设置为 `UIStatusBarStyleLightContent`   

```swift
//文字白色
UIApplication.sharedApplication().setStatusBarStyle(UIStatusBarStyle.LightContent, animated: true)

```

```swift
//文字黑色
UIApplication.sharedApplication().setStatusBarStyle(UIStatusBarStyle.Default, animated: true)
```
####注意 
项目的配置`Info`中添加key为`View controller-based status bar appearance`值为`NO`  
也可以设置全局的样式 添加key为`Status bar style`值为`UIStatusBarStyleLightContent`
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

###边缘手势
```swift
//禁止边缘手势
self.navigationController?.interactivePopGestureRecognizer!.enabled = false;
```

###关闭页面

```swift
//关闭push的页面
self.navigationController?.popViewControllerAnimated(true);

```

```swift
//关闭model的页面
self.dismissViewControllerAnimated(true, completion: {
     ()->Void in
})
```