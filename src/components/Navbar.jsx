import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <div className="row navigation">
                <div className="col-1 d-flex justify-content-center align-items-center">
                    <Link className="navigation-link" to={"/"}>Home</Link>
                </div>
                <div className="col-1 offset-7 d-flex justify-content-center align-items-center">
                    <Link className="navigation-link" to={"/login"}>Login</Link>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                    <Link className="navigation-link" to={"/register"}>Sign Up</Link>
                </div>
                <div className="col-1 d-flex justify-content-center align-items-center">
                    <a className="navigation-link">Links</a>
                </div>
            </div>
        </>
    )
}