import React, { Component } from 'react';

class Login extends Component {

    state={
        userName:'',
        pass:''
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]:value
        });
    }

    logearse = (e) => {
        e.preventDefault();
        this.props.datosLogin(this.state);
    }

    render() { 
        return (
            <div className="container">
                <div className="col-lg-4">
                    <form onSubmit={this.logearse}>
                        <div className="row">
                            <div className = "form-group col-md-12">
                                <input name="userName" onChange={this.handleChange} type="text" className="form-control form-control-lg" placeholder="Nombre de Usuario"/>
                            </div>
                            <div className = "form-group col-md-12">
                                <input name="pass" onChange={this.handleChange} type="password" className="form-control form-control-lg" placeholder="Contraseña"/>
                            </div>
                            <div className = "form-group col-md-12">
                                <input type="submit" className="btn btn-lg btn-dark btn-block" value="Login"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
        );
    }
}
 
export default Login;