import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Page/Shared/Navbar/Navbar";
import Footer from "../Page/Shared/Footer/Footer";


const Root = () => {
    const location = useLocation();
    const hideHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signup')
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">
            {hideHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
        </div>
        {hideHeaderFooter || <Footer></Footer>}
        </div>
    );
};

Root.propTypes = {
    
};

export default Root;