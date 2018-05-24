mapData=(array)=>{
    return array.map((item)=>{
return <div>Here is the item's value: {item.value}</div>
    })
}

//.
//.
//.
//In the render method of a react component
render(){
    return
    <div>
{mapData(this.state.array)} //some array set in state
        </div>
}