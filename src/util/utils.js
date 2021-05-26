const color = ['pink','red','orange','cyan','green','blue','purple']

export const selectColor = (index)=>{
    return color[index%7]
}
