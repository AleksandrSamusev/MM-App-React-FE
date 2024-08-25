import {Link, useNavigate} from "react-router-dom";
import {getLoggedInUser, logout} from "../services/AuthService.jsx";

export const NavbarAuth = () => {
    let navigate = useNavigate();
    const user = getLoggedInUser();

    function handleLogout() {
        logout();
        navigate('/');
    }

    return (
        <>
            <div className="row navigation">
                <div className="col-1 d-flex justify-content-center align-items-center">
                    <Link className="btn-home navigation-link navigation-link-home" to={"/"}>Home</Link>
                </div>
                <div className="col-10 d-flex justify-content-end align-items-center">
                    <span className="px-3 py-0 mt-auto mb-auto"
                        style={{
                            backgroundColor: '#D9D9D9',
                            fontSize: '16px',
                            fontWeight: '600',
                            fontFamily: 'Montserrat'
                        }}>
                        {user}
                    </span>
                </div>
                <div className="col-1 d-flex justify-content-center align-items-center" onClick={handleLogout}>
                    <a className="navigation-link" onClick={handleLogout}>Logout</a>
                </div>
            </div>
        </>
    )
}