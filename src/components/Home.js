import React, { Component } from 'react'
import Doctores from './Doctores'
import Especialidad from './Especialidad'

export default class Home extends Component {
    state={
        status:false,
        especialidad:""
    }

     cargarDoctores=(text)=>{
        console.log("cargo doctores: "+text)
        this.setState({
            status:true,
            especialidad:text
        })
    }
  render() {
    return (
      <div>
        <Especialidad metodo={this.cargarDoctores}/>
        {
            this.state.status ==true &&(
                <Doctores especialidad={this.state.especialidad}/>
            )
        }
       
      </div>
    )
  }
}
