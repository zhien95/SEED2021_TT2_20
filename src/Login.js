import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class Login extends Component {
    render () {
        return (
            <div>
                <h1>Login Page</h1>
    
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