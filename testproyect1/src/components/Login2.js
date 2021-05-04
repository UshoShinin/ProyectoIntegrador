import React, { Component } from 'react';
class Login extends Component {
    loginRef = React.createRef();

        logearse = (e) =>{
            e.proventDefault();
            //this.props.datosLogin(this.loginRef.current.value);
            console.log(this.loginRef.current.value);
        }

    render() { 
        return (
            <form onSubmit={this.logearse}>
                <div className="row">
                    <div className = "form-group col-lg-12">
                        <input ref={this.loginRef} type="text" className="form-control form-control-lg" placeholder="Nombre de usuario"/>
                    </div>
                    <div className = "form-group col-lg-12">
                        <input type="submit" className="btn btn-lg btn-dark btn-block" value="Log In"/>
                    </div>
                </div>
            </form>
        );
    }
}
 
export default Login;