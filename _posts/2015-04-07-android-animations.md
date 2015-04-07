---

layout: post
title: Android动画
description: Android动画
keywords: android
category: android

---

##一、动画类型

Android的animation由四种类型组成：`alpha`、`scale`、`translate`、`rotate`

XML配置文件中  
`alpha`
渐变透明度动画效果  
`scale`
渐变尺寸伸缩动画效果  
`translate`
画面转换位置移动动画效果  
`rotate`
画面转移旋转动画效果  

Java Code代码中   
`AlphaAnimation`
渐变透明度动画效果  
`ScaleAnimation`
渐变尺寸伸缩动画效果  
`TranslateAnimation`
画面转换位置移动动画效果  
`RotateAnimation`
画面转移旋转动画效果  


##二、Android动画模式
Animation主要有两种动画模式：`tweened` 和 `frame`

一种是tweened animation(渐变动画)   
XML中  
`alpha`  
`scale`  
 
一种是frame by frame(画面转换动画)   
XML中  
`translate`    
`rotate`    




##三、XML文件中定义动画  

+ 打开Eclipse，新建Android工程

+ 在res目录中新建anim文件夹

+ 在anim目录中新建一个myanim.xml(注意文件名小写)

+ 加入XML的动画代码

---
	<?xml version="1.0" encoding="utf-8"?>
	<set xmlns:android="http://schemas.android.com/apk/res/android">
	  <alpha/>
	  <scale/>
	  <translate/>
	  <rotate/>
	</set>




##四、Android XML动画解析

###1. Alpha

	<?xml version="1.0" encoding="utf-8"?>
	<set xmlns:android="http://schemas.android.com/apk/res/android" >
	<alpha
	android:fromAlpha="0.1"
	android:toAlpha="1.0"
	android:duration="3000"
	/> 
	<!-- 透明度控制动画效果 alpha
	        浮点型值：
	            fromAlpha 属性为动画起始时透明度
	            toAlpha   属性为动画结束时透明度
	            说明: 
	                0.0表示完全透明
	                1.0表示完全不透明
	            以上值取0.0-1.0之间的float数据类型的数字
	
	        长整型值：
	            duration  属性为动画持续时间
	            说明:     
	                时间以毫秒为单位
	-->
	</set>
###2. Scale
	<?xml version="1.0" encoding="utf-8"?>
	<set xmlns:android="http://schemas.android.com/apk/res/android">
	   <scale  
	          android:interpolator=
	                     "@android:anim/accelerate_decelerate_interpolator"
	          android:fromXScale="0.0"
	          android:toXScale="1.4"
	          android:fromYScale="0.0"
	          android:toYScale="1.4"
	          android:pivotX="50%"
	          android:pivotY="50%"
	          android:fillAfter="false"
	          android:duration="700" />
	</set>
	<!-- 尺寸伸缩动画效果 scale
	       属性：interpolator 指定一个动画的插入器
	        在我试验过程中，使用android.res.anim中的资源时候发现
	        有三种动画插入器:
	            accelerate_decelerate_interpolator  加速-减速 动画插入器
	            accelerate_interpolator         加速-动画插入器
	            decelerate_interpolator         减速- 动画插入器
	        其他的属于特定的动画效果
	      浮点型值：
	         
	            fromXScale 属性为动画起始时 X坐标上的伸缩尺寸    
	            toXScale   属性为动画结束时 X坐标上的伸缩尺寸     
	        
	            fromYScale 属性为动画起始时Y坐标上的伸缩尺寸    
	            toYScale   属性为动画结束时Y坐标上的伸缩尺寸    
	        
	            说明:
	                 以上四种属性值    
	    
	                    0.0表示收缩到没有 
	                    1.0表示正常无伸缩     
	                    值小于1.0表示收缩  
	                    值大于1.0表示放大
	        
	            pivotX     属性为动画相对于物件的X坐标的开始位置
	            pivotY     属性为动画相对于物件的Y坐标的开始位置
	        
	            说明:
	                    以上两个属性值 从0%-100%中取值
	                    50%为物件的X或Y方向坐标上的中点位置
	        
	        长整型值：
	            duration  属性为动画持续时间
	            说明:   时间以毫秒为单位
	
	        布尔型值:
	            fillAfter 属性 当设置为true ，该动画转化在动画结束后被应用
	-->
###3. Translate
	<?xml version="1.0" encoding="utf-8"?>
	<set xmlns:android="http://schemas.android.com/apk/res/android">
	<translate
	android:fromXDelta="30"
	android:toXDelta="-80"
	android:fromYDelta="30"
	android:toYDelta="300"
	android:duration="2000"
	/>
	<!-- translate 位置转移动画效果
	        整型值:
	            fromXDelta 属性为动画起始时 X坐标上的位置    
	            toXDelta   属性为动画结束时 X坐标上的位置
	            fromYDelta 属性为动画起始时 Y坐标上的位置
	            toYDelta   属性为动画结束时 Y坐标上的位置
	            注意:
	                     没有指定fromXType toXType fromYType toYType 时候，
	                     默认是以自己为相对参照物             
	        长整型值：
	            duration  属性为动画持续时间
	            说明:   时间以毫秒为单位
	-->
	</set>
###4. Rotate
	<?xml version="1.0" encoding="utf-8"?>
	<set xmlns:android="http://schemas.android.com/apk/res/android">
	<rotate 
	        android:interpolator="@android:anim/accelerate_decelerate_interpolator"
	        android:fromDegrees="0" 
	        android:toDegrees="+350"         
	        android:pivotX="50%" 
	        android:pivotY="50%"     
	        android:duration="3000" />  
	<!-- rotate 旋转动画效果
	       属性：interpolator 指定一个动画的插入器
	             在我试验过程中，使用android.res.anim中的资源时候发现
	             有三种动画插入器:
	                accelerate_decelerate_interpolator    加速-减速 动画插入器
	                accelerate_interpolator                加速-动画插入器
	                decelerate_interpolator                减速- 动画插入器
	             其他的属于特定的动画效果
	
	       浮点数型值:
	            fromDegrees 属性为动画起始时物件的角度    
	            toDegrees   属性为动画结束时物件旋转的角度 可以大于360度   
	
	
	            说明:
	                     当角度为负数——表示逆时针旋转
	                     当角度为正数——表示顺时针旋转              
	                     (负数from——to正数:顺时针旋转)   
	                     (负数from——to负数:逆时针旋转) 
	                     (正数from——to正数:顺时针旋转) 
	                     (正数from——to负数:逆时针旋转)       
	
	            pivotX     属性为动画相对于物件的X坐标的开始位置
	            pivotY     属性为动画相对于物件的Y坐标的开始位置
	
	            说明:        以上两个属性值 从0%-100%中取值
	                         50%为物件的X或Y方向坐标上的中点位置
	
	        长整型值：
	            duration  属性为动画持续时间
	            说明:       时间以毫秒为单位
	-->
	</set>

###XML中使用动画效果

	public static Animation loadAnimation (Context context, int id) 
	//第一个参数Context为程序的上下文    
	//第二个参数id为动画XML文件的引用
	//例子：
	myAnimation= AnimationUtils.loadAnimation(this, R.anim.my_action);
	//使用AnimationUtils类的静态方法loadAnimation()来加载XML中的动画XML文件


##五、Java代码中定义动画
	//在代码中定义 动画实例对象
	private Animation myAnimation_Alpha;
	private Animation myAnimation_Scale;
	private Animation myAnimation_Translate;
	private Animation myAnimation_Rotate;
	
	    //根据各自的构造方法来初始化一个实例对象
	myAnimation_Alpha = new AlphaAnimation(0.1f, 1.0f);
	
	myAnimation_Scale = new ScaleAnimation(0.0f, 1.4f, 0.0f, 1.4f,
	             Animation.RELATIVE_TO_SELF, 0.5f, Animation.RELATIVE_TO_SELF, 0.5f);
	
	myAnimation_Translate = new TranslateAnimation(30.0f, -80.0f, 30.0f, 300.0f);
	
	myAnimation_Rotate = new RotateAnimation(0.0f, +350.0f,
	               Animation.RELATIVE_TO_SELF,0.5f,Animation.RELATIVE_TO_SELF, 0.5f);




##六、Android 代码动画解析

###1. AlphaAnimation

AlphaAnimation类对象定义

	private AlphaAnimation myAnimation_Alpha;
	AlphaAnimation类对象构造
	AlphaAnimation(float fromAlpha, float toAlpha) 
	//第一个参数fromAlpha为 动画开始时候透明度
	//第二个参数toAlpha为 动画结束时候透明度
	myAnimation_Alpha = new AlphaAnimation(0.1f, 1.0f);
	//说明: 
	//                0.0表示完全透明
	//                1.0表示完全不透明
	//设置动画持续时间
	myAnimation_Alpha.setDuration(5000);
	//设置时间持续时间为 5000毫秒

###2. ScaleAnimation
ScaleAnimation类对象定义

	private ScaleAnimation myAnimation_Scale;
	ScaleAnimation类对象构造
	ScaleAnimation(float fromX, float toX, float fromY, float toY,
	           int pivotXType, float pivotXValue, int pivotYType, float pivotYValue) 
	//第一个参数fromX为动画起始时 X坐标上的伸缩尺寸    
	//第二个参数toX为动画结束时 X坐标上的伸缩尺寸     
	//第三个参数fromY为动画起始时Y坐标上的伸缩尺寸    
	//第四个参数toY为动画结束时Y坐标上的伸缩尺寸  
	/*说明:
	                    以上四种属性值    
	                    0.0表示收缩到没有 
	                    1.0表示正常无伸缩     
	                    值小于1.0表示收缩  
	                    值大于1.0表示放大
	*/
	//第五个参数pivotXType为动画在X轴相对于物件位置类型  
	//第六个参数pivotXValue为动画相对于物件的X坐标的开始位置
	//第七个参数pivotXType为动画在Y轴相对于物件位置类型   
	//第八个参数pivotYValue为动画相对于物件的Y坐标的开始位置
	myAnimation_Scale = new ScaleAnimation(0.0f, 1.4f, 0.0f, 1.4f,
	             Animation.RELATIVE_TO_SELF, 0.5f, Animation.RELATIVE_TO_SELF, 0.5f);
	//设置动画持续时间
	myAnimation_Scale.setDuration(700);
	//设置时间持续时间为 700毫秒

###3. TranslateAnimation

ranslateAnimation类对象定义
	
	private TranslateAnimation myAnimation_Translate;
	TranslateAnimation类对象构造
	TranslateAnimation(float fromXDelta, float toXDelta,
	                       float fromYDelta, float toYDelta) 
	//第一个参数fromXDelta为动画起始时 X坐标上的移动位置    
	//第二个参数toXDelta为动画结束时 X坐标上的移动位置      
	//第三个参数fromYDelta为动画起始时Y坐标上的移动位置     
	//第四个参数toYDelta为动画结束时Y坐标上的移动位置
	//设置动画持续时间
	myAnimation_Translate = new TranslateAnimation(10f, 100f, 10f, 100f);
	myAnimation_Translate.setDuration(2000);
	//设置时间持续时间为 2000毫秒

###4. RotateAnimation
RotateAnimation类对象定义

	private RotateAnimation myAnimation_Rotate;
	RotateAnimation类对象构造
	RotateAnimation(float fromDegrees, float toDegrees, 
	            int pivotXType, float pivotXValue, int pivotYType, float pivotYValue)
	//第一个参数fromDegrees为动画起始时的旋转角度    
	//第二个参数toDegrees为动画旋转到的角度   
	//第三个参数pivotXType为动画在X轴相对于物件位置类型  
	//第四个参数pivotXValue为动画相对于物件的X坐标的开始位置
	//第五个参数pivotXType为动画在Y轴相对于物件位置类型   
	//第六个参数pivotYValue为动画相对于物件的Y坐标的开始位置
	myAnimation_Rotate = new RotateAnimation(0.0f, +350.0f,
	               Animation.RELATIVE_TO_SELF,0.5f,Animation.RELATIVE_TO_SELF, 0.5f);
	//设置动画持续时间
	myAnimation_Rotate.setDuration(3000);
	//设置时间持续时间为 3000毫秒