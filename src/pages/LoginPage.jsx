import {Navbar} from "../components/Navbar.jsx";
import {CustomInputWithTitle} from "../components/CustomInputWithTitle.jsx";
import {CustomButton} from "../components/CustomButton.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {loginApiCall, saveLoggedInUser, storeToken} from "../services/AuthService.jsx";
import {InputWithEye} from "../components/InputWithEye.jsx";
import {checkPassword} from "../utils/CheckPasswordFormat.jsx";

const LoginPage = () => {

    const navigator = useNavigate();

    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [error, setError] = useState(null);
    const [password, setPassword] = useState('');
    const [emailFieldError, setEmailFieldError] = useState("");
    const [passwordFieldError, setPasswordFieldError] = useState("");
    const [type, setType] = useState("password");

    function handleEyeClick() {
        type === "password" ? setType("text") : setType("password");
    }

    function fieldsValidation(usernameOrEmail, password) {
        if (password.trim() === "") {
            setPasswordFieldError("Password field cannot be empty");
        }
        if (usernameOrEmail.trim() === "") {
            setEmailFieldError("Email field cannot be empty");
        }
    }

    async function handleLogin() {
        fieldsValidation(usernameOrEmail, password);
        if (passwordFieldError === '' && emailFieldError === '') {
            const loginObj = {
                usernameOrEmail: usernameOrEmail,
                password: password
            };

            await loginApiCall(loginObj).then(response => {

                const token = "Bearer " + response.data.accessToken;
                const role = response.data.role;
                const userId = response.data.userId;

                storeToken(token);
                saveLoggedInUser(userId, usernameOrEmail, role);
                navigator("/");
            }).catch(error => {
                setError("Invalid credentials");
            })
        }
    }

    return (
        <>
            <Navbar/>
            <section className="container" style={{height: '78vh'}}>
                <div className="row" style={{marginTop: "77px"}}>
                    <div className="col-6 offset-3 d-flex justify-content-center align-items-center">
                        <h1 className="h1-main text-center">Login</h1>
                    </div>
                </div>

                <CustomInputWithTitle
                    mrg={127}
                    name="usernameOrEmail"
                    type={'text'}
                    label='E-mail'
                    placeholder='Enter email address'
                    value={usernameOrEmail}
                    error={emailFieldError}
                    onChange={e => {
                        setEmailFieldError("")
                        setUsernameOrEmail(e.target.value)
                    }}
                />

                <InputWithEye
                    mrg={38}
                    type={type}
                    label='Password'
                    placeholder='Enter password'
                    value={password}
                    error={passwordFieldError}
                    onChange={e => {
                        setPasswordFieldError("")
                        setPassword(e.target.value)
                    }}
                    onClick={handleEyeClick}
                />

                <div className="row" style={{marginTop: "87px"}}>
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <span className="login-span">Mandatory fields marked with <span
                            className="asterisk"> *</span></span>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{marginTop: "50px"}}>
                    <CustomButton onClick={handleLogin} mrg={50} title='Go' link='#'/>
                </div>

            </section>
        </>
    )
}

export {LoginPage}