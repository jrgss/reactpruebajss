import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';

export default class Doctores extends Component {
    state={
        doctores:[],
        status:false
    }
    loadDoctores=()=>{
        
        console.log(this.props.especialidad)
        console.log("https://apicruddoctores.azurewebsites.net/api/Doctores/DoctoresEspecialidad/"+this.props.especialidad)
        axios.get("https://apicruddoctores.azurewebsites.net/api/Doctores/DoctoresEspecialidad/"+this.props.especialidad).then(res=>{
            // console.log(res.data)
            this.setState({
                status:true,
                doctores:res.data
            })
        })

      
    }
    componentDidMount=()=>{
       
           this.loadDoctores();
        
    }
    componentDidUpdate=(oldProps)=>{
        if(oldProps.especialidad!=this.props.especialidad)
        this.loadDoctores();
    }

  render() {


        return (
            <div>
              <table border="1">
                  <thead>
                      <tr>
                          <th>Apellido</th>
                          <th>Especialidad</th>
                          <th>Salario</th>
      
                      </tr>
                  </thead>
                  <tbody>
                     {this.state.status==true &&
                     (
                        this.state.doctores.map((doc,index)=>{
                            return(<tr key={doc.idDoctor}>
                                <td>{doc.apellido}</td>
                                <td>{doc.especialidad}</td>
                                <td>{doc.salario}</td>
                            </tr>)
                        })
                     )}
                  </tbody>
              </table>
            </div>
          )
    
    
  }
}
