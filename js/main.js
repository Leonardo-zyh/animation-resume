/*把code写到#code和style标签里*/
function writeCode(prefix,code,fn ) {
    let domCode = document.querySelector('#code')
    //domCode.innerHTML = prefix || ''
    let n = 0
    let id = setInterval(() => {
        n += 1 
        domCode.innerHTML =  Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()

        }
    }, 0)
}

function writeMarkdown(markdown,fn){
    let domPaper = document.querySelector('.content')
    let n = 0
    let id = setInterval(() => {
        n += 1 
        domPaper.innerHTML =  markdown.substring(0, n)
        domPaper.scrollTop = 10000//domPaper.scrollHeight
        //console.log(domPaper)
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 0)
}


var result = `
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
    background: rgb(222,222,222);
    font-size:16px;
  }
  #code{
    border: 1px solid red;
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

/* 再加一点3D效果吧 */
#code{
    transform:rotate(360deg);
}

/* 我来介绍一下我自己吧 */
/* 我需要一张白纸 */
#code{
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
}
#paper{
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background:grey;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:6px;

}
#paper > .content{
    background:white; 
    width:100%;
    height:100%;
    padding-left:16px;
   
}
`
var result2 = `
    #parper{

    }
    /*
    接下来把markdown变成HTML - marked.js
    */
   /*
   这就是我的会动的简历
   谢谢观看！
   */
    `
var md = `
# 自我介绍
我叫曾宇豪
1997年3月出生
XXX学校毕业
自学前端半年
希望应聘前端开发岗位

＃技能介绍

熟悉JavaScript CSS

＃项目介绍

1. XXX轮播
2. XXX简历
3. XXX画板

＃联系方式

-  QQ：956731563
- 电子邮件：956731563@qq.com
- 手机:15215210604

`
function creatPaper(fn) {
    
    var paper = document.createElement('div')
    paper.id = 'paper'    
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()

}

writeCode('',result,()=>{    //writeCode callback the function
    creatPaper(()=>{
        writeCode(result,result2,()=>{
            writeMarkdown(md,()=>{
                /*markdownToHTML(()=>{
                    write(result+result2,result3)
                })*/
            })
        })
    })
})//定闹钟：10秒后开始执行第一行代码
//异步：【不等结果】直接进行下一步
//回调：拿到异步的一种方式
//定闹钟；writeCode返回；执行fn()；时间到执行代码

