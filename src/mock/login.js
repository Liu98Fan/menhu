const Mock = require("mockjs")

let success = {
    code:0,
    success:true,
    data:{},
    message:'login success!'
}

let error = {
    code:1001,
    success:false,
    data:{},
    message:'username or password error! please try it again later!'
}

Mock.mock('/mock/login','post',(data)=>{
    console.log(data)
    let {username,password} = JSON.parse(data.body)
    console.log(username,password)
    if(username==='admin'&&password==='admin'){
        return success
    }else{
        return error
    }
})
