oBtn.addEventListener('click',function () {
    var request=new XMLHttpRequest()
    request.open('get','/xxx')
    request.send()
    request.onreadystatechange=function () {
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
                let string=request.responseText
                let obj=window.JSON.parse(string)
                console.log(obj.note.name)
                console.log(obj.note.age)
            }
        }
    }
})