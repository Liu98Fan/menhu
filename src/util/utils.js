const color = ['pink','red','orange','cyan','green','blue','purple']
const month = ['January','February','March','April','May','June','July', 'August','September','October','November','December']
export const selectColor = (index)=>{
    return color[index%7]
}

export const monthList = ()=>{
    return month
}

export const yearList = ()=>{
    let result = [2000]
    for(let i = result[0]+1;i<2050;i++){
        result.push(i)
    }
    return result
}

export const sortNews = (order)=>{
    if(order.toLowerCase()==='asc'){
        //正序
    }else {
        //默认倒序
    }
}
