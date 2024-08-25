
import {useNavigate} from "react-router-dom";
import {CustomButton} from "../components/CustomButton.jsx";
import {isUserLoggedIn} from "../services/AuthService.jsx";
import {NavCard} from "../components/NavCard.jsx";
import {NavbarAuth} from "../components/NavbarAuth.jsx";
import {Navbar} from "../components/Navbar.jsx";

const HomePage = () => {

    const navigator = useNavigate();
    const isAuth = isUserLoggedIn();

    function handleClick(id) {
        id === 'signUp' ?
            navigator('/register') :
            navigator('/login')
    }

    function handleManageClick() {
        navigator('/manage')
    }


    return (
        <>
            {isAuth ? <NavbarAuth/> : <Navbar/>}
            <section className="container" style={{height: '78vh'}}>
                <div className="row" style={{marginTop: "170px"}}>
                    <div className="col-6 offset-3 d-flex justify-content-center align-items-center">
                        <h1 className="h1-main text-center">MONEY MANAGER</h1>
                    </div>
                </div>

                {isAuth &&
                    <>
                        <div className="row" style={{marginTop: '80px'}}>
                            <div className="col-6">
                                <NavCard title='2024'
                                         content='Manage your expenses and incomes in 2024.'
                                         color='rgba(110, 255, 60, 0.5)'
                                         titleColor='white'
                                         onClick={handleManageClick}
                                />
                            </div>
                            <div className="col-6">
                                <NavCard title='Info'
                                         content='This section contains all links to useful resources, articles and guides.'
                                         color='rgba(228, 60, 255, 0.5)'
                                         titleColor='white'
                                />
                            </div>
                        </div>

                        <div className="row" style={{marginTop: '40px'}}>
                            <div className="col-6">
                                <NavCard title='Stats'
                                         content='Depending on the selected time period, get statistics on expenses and income.'
                                         color='rgba(75, 223, 255, 0.65)'
                                         titleColor='white'
                                />
                            </div>
                            <div className="col-6">
                                <NavCard title='Temp'
                                         content='There is nothing here at the moment. The slot is recerved for the future.'
                                         color='rgb(255, 241, 113)'
                                         titleColor='black'
                                />
                            </div>
                        </div>
                    </>
                }

                {!isAuth &&
                    <>
                        <div className="row" style={{marginTop: "40px"}}>
                            <div className="col-6 offset-3 d-flex justify-content-center align-items-center">
                                <p className="p-main m-0 text-center">Sign-up or Login to continue </p>
                            </div>
                        </div>
                        <div className="row" style={{marginTop: "120px"}}>
                            <div className="col-6 offset-3 d-flex justify-content-center align-items-center">
                            <div style={{marginRight: '50px'}} onClick={e => handleClick(e.target.id)}>
                                    <CustomButton title='Sign Up' link='/register' id="signUp"/>
                                </div>
                                <div style={{marginLeft: '50px'}} onClick={e => handleClick(e.target.id)}>
                                    <CustomButton title='Login' link='/login' id="login"/>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </section>
        </>
    )
}

export {HomePage}
