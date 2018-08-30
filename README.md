hj
#异步回调
/*函数中会设置可执行函数调用的参数*/
function writeCode(fn){
    fn.call()
}


writeCode(result,
    function(){                    
        creatPaper(`()=>{}`)
    })

/*writeCode callback the function*/
//异步：【不等结果】直接进行下一步
//回调：拿到异步的一种方式

//异步，定闹钟：10秒后开始执行第一行代码
//定闹钟；writeCode返回；执行fn()；时间到执行代码

var promise = $.get('/xxx')    /*1s后拿到结果，不等你，直到执行下一步*/
promise.then(success,error)


#注意：
设置overflow: hidden才能使用页面滑动
domCode.scrollTop = domCode.scrollHeight
