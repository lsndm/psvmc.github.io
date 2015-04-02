---

layout: post
title: linux基本操作
description: linux基本操作
keywords: linux
category: linux

---

## clear`清屏`
`clear` 

## chmod`修改权限`
`chmod 777 ./test`   
`chmod -R 777 ./test`  包含子目录

## cp`复制`
`cp` 
 
##find`查找` 
`find -name "*case.html*"`
##rm`删除文件`
`rm -rf ./a.txt`  
 
- -r 递归删除
- -f不提示
- -i交互式删除  

##mv`移动`
`mv 1.txt 2.txt` `重命名`  
`mv ./1.txt ./2/2.txt` `移动`

##zip`压缩`
`zip -r  ./aa.zip ./aa`

##zip`分卷压缩`  
`zip -r -s 100m ./test.zip ./test/`

##unzip`解压缩`  
`unzip -o ./test.zip `

##查看文件/文件夹大小  
`du -sh /home`

##查看端口占用  
`lsof -i:8009`


##查询内存信息
`top`  

+ m:按内存占用率排序  

##根据进程名查询进程id
`ps -ef | grep java`

##结束PID为1000的进程  
`kill -9 1000`



 
