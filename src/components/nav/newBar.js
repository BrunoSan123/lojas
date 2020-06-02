import React, {Component} from 'react'
import {FaStore} from 'react-icons/fa'
import './nav.css'

class NewBar extends Component() {
    


    state ={
    on: false
  }

   toggle =() =>{
       this.setState({on:!this.state.on});
   }

   

   render(){
    return (

        <div className="Struct">
            <span className="icon">
        <FaStore/>
        </span>

       
         {this.state.on &&(
        <ul className="NBs">
        <li className="lu">Home</li>
        <li className="lu">Produtos</li>
        <li className="lu">Carrinho</li>
        
      </ul>
      )}
      
      
      

      <div className="button" onClick={this.toggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      </div>
        
    )
         }
}



export default NewBar
