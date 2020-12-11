import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.css'
class Login extends Component {
    render () {
        return (
            <div className="login-card">
                <h1>Login</h1>

                <form>
                    <label>
                        Username:
                        <input name="username" type="text" placeholder="Username" required />
                    </label>
                    <label>
                        Password:
                        <input name="password" type="password" placeholder="Password" required />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Login)