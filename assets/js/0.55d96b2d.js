(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{54:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"打造自适应内容高度的viewppger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打造自适应内容高度的viewppger","aria-hidden":"true"}},[t._v("#")]),t._v(" 打造自适应内容高度的ViewpPger")]),s("p",[t._v("在我们的项目中，有一个ViewPager中的子元素是WebView，由于WebView的内容高度是不确定的，这样的话会导致ViewPager的其他子元素高度无法控制。所以就需要打造一个自适应子元素高度的ViewPager。")]),s("h2",{attrs:{id:"获取webview内容高度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取webview内容高度","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取WebView内容高度")]),s("p",[t._v("获取WebView的内容高度要通过WebView的"),s("code",[t._v("getContentHeight()")]),t._v("方法，但是由于WebView内容的加载不确定性，导致此方法不能及时获取到正确的高度。")]),s("p",[t._v("所以我们要在"),s("code",[t._v("WebViewClint.onPageFinished(WebView view, String url)")]),t._v("方法中通过js代码获取到加载完成的内容高度。获取高度的代码如下：")]),s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("onPageFinished")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WebView view"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String url"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("super")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("onPageFinished")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("view"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    view"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("postDelayed")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Runnable")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("run")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            view"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("loadUrl")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"javascript'),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            JavascriptInterface"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getContentHeight")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollHeight"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v('"'),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("500")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[s("code",[t._v("document.body.scrollHeight")]),t._v("这句js代码就能获取到web内容的正确高度，通过JavascriptInterface传到Java层，保存到本地。")]),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),s("p",[t._v("这个"),s("code",[t._v("document.body.scrollHeight")]),t._v("是dp单位，需要转换px再保存到本地。")])]),s("p",[t._v("然后重写WebView的"),s("code",[t._v("getContentHeight()")]),t._v("方法：")]),s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("getContentHeight")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{attrs:{class:"highlighted-line"}},[t._v("    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mContentHeight"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")])]),t._v("        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mContentHeight"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("super")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getContentHeight")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[s("code",[t._v("mContentHeight")]),t._v("就是JavascriptInterface传到java层的数据。")]),s("h2",{attrs:{id:"重写viewpager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重写viewpager","aria-hidden":"true"}},[t._v("#")]),t._v(" 重写ViewPager")]),s("p",[t._v("要使ViewPager高度自适应内容，就需要在ViewPager切换内容时，根据内容高度，动态调整ViewPager的高度。")]),s("p",[t._v("首先在ViewPager中添加一个方法，用于在切换内容时，触发ViewPager重绘。")]),s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("resetHeight")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" current"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token function"}},[t._v("getChildCount")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" current"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        LinearLayout"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LayoutParams layoutParams "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LinearLayout"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LayoutParams"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("getLayoutParams")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("layoutParams "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{attrs:{class:"highlighted-line"}},[t._v("            layoutParams "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("LinearLayout"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LayoutParams")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LinearLayout"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LayoutParams"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MATCH_PARENT"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{attrs:{class:"highlighted-line"}},[t._v("            layoutParams"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{attrs:{class:"token function"}},[t._v("setLayoutParams")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("layoutParams"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("注意高亮行，设置高度为0，让ViewPager重新绘制。")]),s("p",[t._v("然后就要重写ViewPager的"),s("code",[t._v("onMeasure(int widthMeasureSpec, int heightMeasureSpec)")]),t._v("方法，获取到当前显示的子view，得到子view的高度，然后设置为ViewPager的高度，就达成自适应高度的目的。")]),s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("onMeasure")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" widthMeasureSpec"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" heightMeasureSpec"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token function"}},[t._v("getChildCount")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" current"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            View child "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("getChildAt")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("child "),s("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                child"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("measure")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("widthMeasureSpec"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MeasureSpec"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("makeMeasureSpec")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MeasureSpec"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UNSPECIFIED"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"highlighted-line"}},[t._v("                "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("child "),s("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("WebView")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{attrs:{class:"highlighted-line"}},[t._v("                    height "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WebView"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" child"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getContentHeight")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("                "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n                    height "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" child"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getMeasuredHeight")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        heightMeasureSpec "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" MeasureSpec"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("makeMeasureSpec")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("height"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MeasureSpec"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EXACTLY"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("super")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("onMeasure")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("widthMeasureSpec"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" heightMeasureSpec"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("通过调用当前显示的子view的measure方法，测量出子view的高度，作为ViewPager的高度值。")]),s("p",[t._v("注意高亮行，在上一步重写了WebView后，能正确获取到WebView内容的高度，所以此处调用WebView重写的获取高度方法。")]),s("p",[t._v("一切就绪，只需要在"),s("code",[t._v("ViewPager.OnPageChangeListener.onPageScrolled(int position, float positionOffset, int positionOffsetPixels)")]),t._v("回调中调用ViewPager的"),s("code",[t._v("resetHeight(int position)")]),t._v("方法，就会触发ViewPager重绘，重绘后的ViewPager高度就能适应内容的高度了。")]),s("p",[t._v("由于WebView的特殊性，需要在"),s("code",[t._v("WebViewClient.onPageFinished")]),t._v("回调中调用。")]),s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("onPageFinished")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WebView view"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String url"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("super")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("onPageFinished")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("view"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    view"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("postDelayed")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Runnable")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("run")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            view"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("loadUrl")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"javascript'),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),s("span",{attrs:{class:"highlighted-line"}},[t._v("            JavascriptInterface"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getContentHeight")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollHeight"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v('"'),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("500")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("高亮行的"),s("code",[t._v("JavascriptInterface.getContentHeight(String value)")]),t._v("方法是js调用java层注入的方法，在java层调用"),s("code",[t._v("resetHeight(int position)")]),t._v("就能达到自适应WebView内容高度的目的。")]),s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("JavascriptInterface")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@android")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webkit"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JavascriptInterface\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("getContentHeight")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String value"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("TextUtils"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("isEmpty")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" null"),s("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v("callback"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            callback"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("onHeightChange")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mContentHeight "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n                JUtils"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("dip2px")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Integer"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);a.default=e.exports}}]);