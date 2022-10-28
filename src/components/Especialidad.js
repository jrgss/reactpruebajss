import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global'

export default class Especialidad extends Component {
    cajaSalario =React.createRef();
    opcionSelect=React.createRef();
    state={
        status:false,
        especialidades:[],
        statusPut:false,
    }

    loadEspecialidades=()=>{
        // var request="";
        // var url=Global.urlDoc;
        axios.get("https://apicruddoctores.azurewebsites.net/api/Doctores/Especialidades").then(res=>{
            console.log("data:"+res.data)
            this.setState({
            
            status:true,
            especialidades:res.data
        })
        })
    }

    incrementarSalario=(e)=>{
        e.preventDefault()
        var num= parseInt(this.cajaSalario.current.value)
        var especialidad=this.opcionSelect.current.value
        //axios.put()
        axios.put("https://apicruddoctores.azurewebsites.net/api/Doctores/"+especialidad+"/"+num).then(res=>{
            this.setState({
                statusPut:true,
            })

           this.props.metodo(especialidad);
        
        })
    }
    componentDidMount=()=>{
        this.loadEspecialidades();
    }
  render() {
    return (
      <div>
        <form>
        <h1>Incremento salarial doctores</h1>
        <label>Seleccione una especialidad</label>
        <select ref={this.opcionSelect}>
        {
            this.state.status==true && (
                this.state.especialidades.map((esp,index)=>{
                    return(
                    <option key={index}>{esp}</option>
                    )
                    
                })
            )
        }
        </select>
        <br/>
        <label>Incremento salarial</label>
        <input type="number" ref={this.cajaSalario}></input>
        <button onClick={this.incrementarSalario}>Incrementar salarios</button>

        </form>
      </div>
    )
  }
}
