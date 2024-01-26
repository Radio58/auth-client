function Login() {
    return (
    <div className="login-container">
        <form className="login-form">
            <p>Login</p>
            <div className="credentials">
                <div className="login-username">
                    <label>Username:</label>
                    <input id="login-username-input" type="text"/>
                </div>
                <div className="login-password">
                    <label>Password:</label>
                    <input id="login-password-input" type="password"/>
                </div>
                <button id="login-button">Login</button>
            </div>
        </form>
    </div>
    );
}

export default Login;