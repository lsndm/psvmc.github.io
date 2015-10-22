---

layout: post
title: iOS自动布局
description: iOS自动布局
keywords: iOS
categories: swift ios

---

###简单示例

```swift
override init(style: UITableViewCellStyle, reuseIdentifier: String?) {
   super.init(style: style, reuseIdentifier: reuseIdentifier)

   self.contentView.addSubview(self.userImage)
   self.contentView.addSubview(self.userName)
   self.contentView.addConstraints(self.layoutConstraints())
}
    
func layoutConstraints() -> [NSLayoutConstraint]{
   let views = ["image": self.userImage, "name": self.userName ]
   let metrics = [ "imgSize": 40.0, "margin": 12.0]
   var result = NSLayoutConstraint.constraintsWithVisualFormat("H:|-(margin)-[image(imgSize)]-(margin)-[name]", options:NSLayoutFormatOptions.AlignAllTop, metrics: metrics, views: views)
   result += NSLayoutConstraint.constraintsWithVisualFormat("V:[image(imgSize)]", options:NSLayoutFormatOptions.AlignAllCenterY, metrics:metrics, views: views);
   result += NSLayoutConstraint.constraintsWithVisualFormat("V:|-[name]-|", options:NSLayoutFormatOptions.AlignAllCenterY, metrics:metrics, views: views);
   return result
}
```

