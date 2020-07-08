+ 注意：
	- 在&lt;script&gt;&lt;/script&gt;内不要使用&lt;/script&gt;，可以用</\script>代替
	- 在HTML中,不可以使用&lt;script /&gt;，在XHTML中可以使用。
	- 使用src属性，同时在&lt;script&gt;&lt;/script&gt;中写内容，只解析src，忽略内容。
	- src属性，在&lt;script&gt;和&lt;img&gt;中使用，支持跨域，即指向外域的某URL
+ 标签的位置
	- 一般放在&lt;body&gt;中，内容的后面 。先显示页面内容，再加载js。
	- 因为浏览器从上到下，按顺序执行。
+ 延迟脚本
	- &lt;script defer="defer"&gt;
	- defer属性，只对外部文件生效
	- 作用是立即加载，但延迟执行。等到整个页面解析完，再运行脚本。
	- 在XHTML中，使用&lt;script defer="defer"&gt;
+ 异步脚本
	- &lt;script async&gt;
	- async属性，只对外部文件生效
	- 作用是立即加载，但是不一定按照顺序执行。
	- 要求：使用该属性的文件之间，不相互依赖
	- 在XHTML中，使用&lt;script async="async"&gt;
+ 在XHTML中，使用JavaScript
	- XHTML比较严格，在HTML中执行，在XHTML中可能不可执行。
	- 一般这样使用
```
<script>
	//<![CDATA[
		let message="Hello World"
		console.log("你好 世界")
	//]]>
</script>
```
+ 内嵌和外部引入
	- 建议外部引入
		- 可维护性
		- 可缓存
		- HTML和XHTML外部引入的规则相同。不必再搞注释 CDATA等
+ 文档模式
	- 分类
		- 混杂模式 遵从很糟糕的标准，不建议开启
		- 标准模式 ```<!DOCTYPE html>```遵从HTML5标准，推荐使用。
		- 准标准模式 略
	- 如果文档开始，没有声明文档模式类型，默认开启混杂模式。
+ &lt;noscript&gt;元素
	- 是什么、
		- 一些浏览器不支持JavaScript或禁用JavaScript，导致&lt;script&gt;中的内容完全不显示，失效。&lt;noscript&gt;在这种情况下，生效。
	- 在什么情况下，生效
		- 浏览器不支持JavaScript
		- 禁用JavaScript
	- 在什么情况下，失效
		- 只要不满足上述俩条件，失效，自动忽略。
	- 如何用？
		在HTML中，除了&lt;script&gt;之外，任何标签下，都可以嵌套&lt;noscript&gt;
	-代码示例
	```
	<html>
		<noscript>浏览器禁用了JavaScript或不支持JavaScript</noscript>
		<body>
			<noscript>浏览器禁用了JavaScript或不支持JavaScript</noscript>
			<script src="xx.js"></script>
		</body>
	</html>
	```