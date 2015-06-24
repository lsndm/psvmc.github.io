---

layout: post
title: git常用操作
description: git常用操作
keywords: git
category: git

---
##clone项目
+ 克隆   
`git clone https://github.com/psvmc/RESideMenu_Swift.git ../RESideMenu_Swift`

> 克隆下来的项目git的配置信息也下载下来了，所以不用`git init`



##第一次提交  
+ 进入项目的根目录  
`cd  ／xx／xx`
+ git初始化  
`git init`
+ 添加远程库  
`git remote add origin https://github.com/psvmc/RESideMenu_Swift.git`
+ 输入账号密码
+ 添加修改的文件   
`git add .`
+ 提交已添加的文件   
`git commit -m "注释信息"`
+ 修改push到远程   
`git push origin master`

##git提交方式
+ 进入项目的根目录   
`cd  ／xx／xx`
+ 把远程的pull过来  
`git pull origin master`
+ 修改文件  
+ 添加修改的文件  
`git add .`
+ 提交已添加的文件  
`git commit -m "注释信息"`
+ 修改push到远程  
`git push origin master`


##egit冲突解决方法
+ 提交至本地库  `commit`
+ 进行同步  `Synchronize Workspace`
+ 从远程pull下来`pull`
+ 利用  `Merge Tool` 
+ 选择第二项  `Use HEAD(the last local version) of conflicting files`
+ 手动解决冲突
+ 添加到git index中 `Add to Git index`
+ commit并push `commit and push`

##设置用户名与邮箱
###设置
	git config --global user.name "psvmc"
	git config --global user.email "183518918@qq.com"
###查看
	git config --get user.name
	git config --get user.email
	








