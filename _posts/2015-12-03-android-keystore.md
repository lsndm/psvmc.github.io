---

layout: post
title: android keystore相关设置
description: android keystore相关设置
keywords: android keystore
categories: android

---


###获取key store的SHA1值
终端中输入以下命令

```
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
```

###生成key store
```
keytool -genkey -alias android.keystore -keyalg RSA -validity 20000 -keystore android.keystore
```

+ -alias android.keystore 别名为`alias android.keystore`
+ -keyalg RSA 加密类型`RSA`
+ -validity 20000 有效期天数`20000`
+ -keystore android.keystore 生成文件路径和名字`android.keystore`
