import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from './components/Buscador';
import Login from './components/Login';
import Login2 from './components/Login2';

class App extends Component{

  state = {
    termino:'',
    userName:'',
    pass:''
  }


  consultarApi = () =>{
    const url = `http://localhost:3001/${this.state.termino}`;
    console.log(url);
    fetch(url,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Accept': 'application/json'
      }
    })
      .then(respuesta => respuesta.text())
      .then(resultado =>console.log(resultado))
  }

  logearse = () =>{
    const url = `http://localhost:3001/login`;
    console.log(url);
    fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
      body:JSON.stringify({
        usuario:this.state.userName,
        contraseña:this.state.pass
      })
    })
      .then(respuesta => respuesta.text())
      .then(resultado =>console.log(resultado))
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino
    },()=>{
      this.consultarApi();
    })
  }
  datosLogin = (loginState) => {
    console.log(loginState)
    this.setState({
      userName:loginState.userName,
      pass:loginState.pass
    },()=>{
      this.logearse();
    })
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="mx-auto">
            <Login datosLogin={this.datosLogin}/>
            <Buscador datosBusqueda={this.datosBusqueda}/>
          </div>
        </div>
        {this.state.userName}
        {this.state.pass}
      </div>
    );
  }
}

export default App;
