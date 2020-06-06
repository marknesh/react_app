import React, { Component } from 'react';
import Person from './Person/Person.js';
import './Person/Person.css'

import './App.css';


class App extends Component {
state={
  person:[
    {id:1,name:"mike",age:5},
    {id:2,name:"john",age:65},
    {id:3,name:"lisa",age:95}
  ],
  showPersons:false
 
}

changestate=(namedd)=>{
  this.setState({
    person:[
      {name:"mike",age:5},
      {name:"john",age:65},
      {name:namedd,age:95}
    ] })

  }

  nameState=(event,id)=>{

    const personIndex=this.state.person.findIndex(p => p.id === id )

    const person= {...this.state.person[personIndex]}
    person.name=event.target.value

    const persons = [...this.state.person]
    persons[personIndex]=person




    this.setState({
      person:persons
    
       })
  

    

  }
  showP=()=>{
    const doesShow= this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })

  }

  deleteIndex=(index) =>{
    const testing = this.state.person.slice();
    console.log(testing)
    testing.splice(index,1)
    this.setState({
      person:testing
    })

  }


  render() {


    let persons = null

    if(this.state.showPersons){
      persons =(

        <div>
          {this.state.person.map((person,index) =>{
            return <Person click={()=>this.deleteIndex(index)} change={(event)=>this.nameState(event,person.id)} name={person.name} age={person.age}
            
            key={person.id}/>


          })}
      
        </div>
 
   

      )
    }

    const style={
      width:'auto',
      border:'1px solid orange',
      cursor:'pointer'

    }
    return (
      <div className="App">
        <h1>Welcome to react</h1>
        <button style={style}/* onClick={this.changestate.bind(this, 'awsome')} */
        onClick={this.showP}
        >kkk</button>
        {persons}
        </div>
       
    );
  }
}

export default App;
