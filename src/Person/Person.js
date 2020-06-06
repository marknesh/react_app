import React from 'react';

const person= (props)=>{
    const style={
        border:'1px solid orange'
    }
    return(
        <div className='Person'>

        <p onClick={props.click}>My name is {props.name} and i am {props.age} years old</p>
        <p>{props.children}</p>
        <input style={style} type='text' onChange={props.change}  value={props.name}/>
     

        </div>
        
    )
}

export default person;