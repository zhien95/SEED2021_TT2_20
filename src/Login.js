import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.css'

class Login extends Component {
    render () {
        return (
            <div className="login-card">                
                <form>
                    <label>
                        Username:
                        <br />
                        <input name="username" type="text" placeholder="Username" required />
                    </label>
                    <br />
                    <label>
                        Password:
                        <br />
                        <input name="password" type="password" placeholder="Password" required />
                    </label>
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Login)