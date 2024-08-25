import {Navbar} from "../components/Navbar.jsx";
import {CustomInputWithTitle} from "../components/CustomInputWithTitle.jsx";
import {CustomButton} from "../components/CustomButton.jsx";
import {useState} from "react";
import {InputWithEye} from "../components/InputWithEye.jsx";
import {checkPassword} from "../utils/CheckPasswordFormat.jsx";
import {loginApiCall, registerApiCall, saveLoggedInUser, storeToken} from "../services/AuthService.jsx";
import {CheckEmailFormat} from "../utils/CheckEmailFormat.jsx";
import {useNavigate} from "react-router-dom";
import {NavbarAuth} from "../components/NavbarAuth.jsx";

const RegisterPage = () => {

    const navigator = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("");
    const [firstNameFieldError, setFirstNameFieldError] = useState("");
    const [lastNameFieldError, setLastNameFieldError] = useState("");
    const [usernameFieldError, setUsernameFieldError] = useState("");
    const [emailFieldError, setEmailFieldError] = useState("");
    const [passwordFieldError, setPasswordFieldError] = useState("");
    const [confirmationFieldError, setConfirmationFieldError] = useState("");
    const [passType, setPassType] = useState("password");
    const [confType, setConfType] = useState("password");
    const [registrationError, setRegistrationError] = useState("");
    const [loginError, setLoginError] = useState("");


    function handleEyeClick(event) {
        console.log(event.target.id)
        if (event.target.id === 'password') {
            if (passType === "password") {
                setPassType("text");
            } else {
                setPassType("password");
            }
        }
        if (event.target.id === 'confirmation') {
            if (confType === "password") {
                setConfType("text");
            } else {
                setConfType("password");
            }
        }
    }

    function registerFieldsValidation() {
        if (firstName.trim() === "") {
            setFirstNameFieldError("First name cannot be empty");
        }
        if (firstName.trim() !== '') {
            if (firstName.trim().length < 2 || firstName.trim().length > 50) {
                setFirstNameFieldError("First name should be 2-50 characters");
            }
        }
        if (lastName.trim() === "") {
            setLastNameFieldError("Last name cannot be empty");
        }
        if (lastName.trim() !== '') {
            if (lastName.trim().length < 2 || lastName.trim().length > 50) {
                setLastNameFieldError("Last name should be 2-50 characters");
            }
        }
        if (username.trim() === "") {
            setUsernameFieldError("Username cannot be empty");
        }
        if (username.trim() !== '') {
            if (username.trim().length < 2 || username.trim().length > 50) {
                setUsernameFieldError("Username should be 2-50 characters");
            }
        }
        if (email.trim() === "") {
            setEmailFieldError("Email cannot be empty");
        }
        if (email.trim() !== '') {
            if (!CheckEmailFormat(email.trim())) {
                setEmailFieldError('Invalid email format');
            }
        }
        if (password.trim() === "") {
            setPasswordFieldError("Password cannot be empty");
        }
        if (confirmation.trim() === "") {
            setConfirmationFieldError("Confirmation cannot be empty");
        }
        if (password.trim() !== "") {
            if (password.length < 8) {
                setPasswordFieldError("Password must be at least 8 characters");
            } else if (!checkPassword(password)) {
                setPasswordFieldError("Invalid password format");
            }
        }
        if (password.trim() !== '' && confirmation.trim() !== '') {
            if (password.trim() !== confirmation.trim()) {
                setConfirmationFieldError("Confirmation doesn't match");
            }
        }
    }

    async function handleRegistration() {
        registerFieldsValidation();
        if (firstNameFieldError === '' && lastNameFieldError === '' && usernameFieldError === ''
            && emailFieldError === '' && passwordFieldError === '' && confirmationFieldError === '') {
            const registerObject = {
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                username: username.trim(),
                email: email.trim().toLowerCase(),
                password: password.trim()
            }
            await registerApiCall(registerObject).catch(error => {
                setRegistrationError(error.message);
            })
            const loginObj = {
                usernameOrEmail: username,
                password: password
            };

            await loginApiCall(loginObj).then(response => {
                const token = "Bearer " + response.data.accessToken;
                const role = response.data.role;
                const userId = response.data.userId;
                storeToken(token);
                saveLoggedInUser(userId, username, role);
                navigator("/");
            }).catch(error => {
                setLoginError(error.message)
            })
        }
    }

    return (
        <>
            <Navbar/>
            <section className="container" style={{height: '78vh'}}>
                <div className="row" style={{marginTop: "35px"}}>
                    <div className="col-6 offset-3 d-flex justify-content-center align-items-center">
                        <h1 className="h1-main text-center">Sign Up</h1>
                    </div>
                </div>
                <CustomInputWithTitle
                    mrg={80}
                    name='firstname'
                    value={firstName}
                    type={'text'}
                    label='First name'
                    placeholder='Enter first name'
                    error={firstNameFieldError}
                    onChange={e => {
                        setFirstNameFieldError("");
                        setFirstName(e.target.value)
                    }}
                />

                <CustomInputWithTitle
                    mrg={30}
                    name='lastname'
                    value={lastName}
                    type={'text'}
                    label='Last name'
                    placeholder='Enter last name'
                    error={lastNameFieldError}
                    onChange={e => {
                        setLastNameFieldError("");
                        setLastName(e.target.value)
                    }}
                />
                <CustomInputWithTitle
                    mrg={30}
                    name='username'
                    value={username}
                    type={'text'}
                    label='Username'
                    placeholder='Enter username'
                    error={usernameFieldError}
                    onChange={e => {
                        setUsernameFieldError("");
                        setUsername(e.target.value)
                    }}
                />

                <CustomInputWithTitle
                    mrg={30}
                    name='email'
                    value={email}
                    type={'text'}
                    label='E-mail'
                    placeholder='Enter e-mail address'
                    error={emailFieldError}
                    onChange={e => {
                        setEmailFieldError("");
                        setEmail(e.target.value)
                    }}
                />

                <InputWithEye mrg={30}
                              id='password'
                              type={passType}
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

                <InputWithEye
                    mrg={30}
                    id='confirmation'
                    eyeId='confirmationEye'
                    type={confType}
                    label='Confirm'
                    placeholder='Enter confirm password'
                    value={confirmation}
                    error={confirmationFieldError}
                    onChange={e => {
                        setConfirmationFieldError("")
                        setConfirmation(e.target.value)
                    }}
                    onClick={handleEyeClick}
                />

                <div className="d-flex align-items-center justify-content-center" style={{marginTop: "50px"}}>
                    <CustomButton mrg={50} title='Go' link='#' onClick={handleRegistration}/>
                </div>
            </section>
        </>
    )
}

export {
    RegisterPage
}