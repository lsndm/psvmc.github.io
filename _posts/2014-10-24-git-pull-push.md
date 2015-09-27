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

##git分支
+ 添加本地分支  
`git branch <新分支名字>`
+ 切换本地分支  
`git checkout <分支名>`     
该语句和上一个语句可以和起来用一个语句表示：`git checkout -b <分支名>`
+ 添加/推送远程分支  
`git push origin <本地分支>:<远程分支>`
+ 查看本地分支  
`git branch`
+ 查看远程分支  
`git branch -a`
+ 删除本地分支  
`git branch -d <本地分支>`
+ 删除远程分支  
`git push origin :<远程端分支>`
+ 分支合并  
     比如，如果要将开发中的分支（`develop`），合并到稳定分支（`master`），  
     首先切换的`master`分支：`git checkout master`。  
     然后执行合并操作：`git merge develop`。  
     如果有冲突，会提示你，调用`git status`查看冲突文件。  
     解决冲突，然后调用`git add`或`git rm`将解决后的文件暂存。  
     所有冲突解决后，`git commit` 提交更改。  
+ 分支衍合  
     分支衍合和分支合并的差别在于，分支衍合不会保留合并的日志，不留痕迹，而 分支合并则会保留合并的日志。  
     要将开发中的分支（`develop`），衍合到稳定分支（`master`）。  
     首先切换的`master`分支：`git checkout master`。  
     然后执行衍和操作：`git rebase develop`。  
     如果有冲突，会提示你，调用`git status`查看冲突文件。  
     解决冲突，然后调用`git add`或`git rm`将解决后的文件暂存。  
     所有冲突解决后，`git rebase --continue` 提交更改。  


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
	

	








