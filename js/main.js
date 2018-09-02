/*把code写到#code和style标签里*/
function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    //domCode.innerHTML = prefix || ''
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= code.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 50)
}

function writeMarkdown(markdown, fn) {
    let domPaper = document.querySelector('.content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight
        //console.log(domPaper)
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 50)
}


function creatPaper(fn) {

    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn && fn.call()

}


function convertMarkdownToHtml(fn) {
    var div = document.createElement('div')
    div.className = 'html markdown-body'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('.content')
    markdownContainer.replaceWith(div)
    fn && fn.call()
}

var css1 = `
/* 
 * 面试官你好，我是XXX
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */

*{
    transition: all 1s;
  }
  html{
    background: #eee    ;
    font-size:16px;
  }
  #code-wrapper{
    width: 50%; 
    position: fixed; 
    left: 0; 
    height: 100%;
    padding:16px;
  }

  #code{
    border: 1px solid #aaa;
    padding: 16px;
  }

/* 我需要一点代码高亮 */
.token.selector{
    color: #690;
    }
.token.property{
    color: #905;
}
.token.function{
    color: #dd4a68;
}

/* 加一点呼吸效果吧 */
#code{
    animation: breath 0.7s infinite alternate-reverse;
}

/* 我来介绍一下我自己吧 */
/* 我需要一张白纸 */

#paper{
    display:flex;
}
#paper > .content{
    display:block;
}
/* 于是我就可以在白纸上写字了，请看右边 */
`
var css2 = `
    /* 接下来用一个优秀的库 marked.js
    * 把 Markdown 变成 HTML
    */
    `
var css3 = `   
    /*
    * 这就是我的会动的简历
    * 谢谢观看！
    */`

var md = `
# 自我介绍
我叫曾宇豪
1997年3月出生
XXX学校毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍

熟悉JavaScript CSS

# 项目介绍

1. XXX轮播
2. XXX简历
3. XXX画板

# 联系方式

-  QQ：956731563
- 电子邮件：956731563@qq.com
- 手机:1521521****

`


writeCode( '',css1, () => {    //writeCode callback the function
    creatPaper(() => {  
            writeMarkdown(md, () => {
                writeCode(css1,css2,()=>{
                    convertMarkdownToHtml(()=>{
                    writeCode(css1+css2,css3,()=>{
                        console.log('完成')
                    })
                })
                })                
            })
        })
    })
//定闹钟：10秒后开始执行第一行代码
//异步：【不等结果】直接进行下一步
//回调：拿到异步的一种方式
//定闹钟；writeCode返回；执行fn()；时间到执行代码

