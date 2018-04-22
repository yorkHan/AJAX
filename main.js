window.jQuery=function(nodeOrSelector){
    var nodes={
        0:nodeOrSelector,
        length:1
    }
    nodes.addClass=function () {
    }
    nodes.getSiblings=function () {
    }
    return noodes
}
window.$=window.jQuery

oBtn.addEventListener('click',function () {
    window.jQuery.ajax({
    url:'/xxx',
    method:'post',
    type:{
        'content-type':'application/x-www-form-urlencoded',
        'frank': '18'
      },
    body:'我就是想改请求的第四部分'
    }).then(function (text) {
        console.log(text)
    },function (request) {
        console.log(request)
    })
})

window.jQuery.ajax=function({url,method,type,body,success,fail}){
    return new Promise(function (resolve,reject) {
        var request=new XMLHttpRequest()
    request.open(method,url)
    for(let key in type){
        let value = type[key]
        request.setRequestHeader(key, value)
    }
    request.onreadystatechange=function () {
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
                resolve.call(undefined,request.responseText)
            }else if(request.status>400){
                reject.call(undefined,request)
            }
        }
    }
    request.send(body)
    })
}