function Register() {
    return (
    <div className="register-container">
        <form className="register-form">
            <p>Register</p>
            <div className="credentials">
                <div className="register-username">
                    <label>Username:</label>
                    <input id="register-username-input" type="text"/>
                </div>
                <div className="register-password">
                    <label>Password:</label>
                    <input id="register-password-input" type="password"/>
                </div>
                <button id="register-button">Register</button>
            </div>
        </form>
    </div>
    );
}

export default Register;