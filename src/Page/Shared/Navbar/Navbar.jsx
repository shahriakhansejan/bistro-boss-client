import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import profileImg from "../../../assets/others/profile.png"
import cartImg from "../../../assets/others/cart.png"
import useCart from "../../../hooks/useCart";
import { TiThMenuOutline } from "react-icons/ti";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.error(error))
  }
  const navMenu = (
    <>
      <li><NavLink to='/'>Home</NavLink></li>
      {/* <li><NavLink to={isAdmin && user ? 'dashboard/adminHome' : user? 'dashboard/userHome' : '/'}>Dashboard</NavLink></li> */}
      <li><NavLink to={user ? (isAdmin? 'dashboard/adminHome' : 'dashboard/userHome') : '/dashboard'}>Dashboard</NavLink></li>
      <li><NavLink to='/menu'>Menu</NavLink></li>
      <li><NavLink to='/shop/salad'>Shop</NavLink></li>


    </>
  );
  return (
    <div className="navbar fixed z-10 max-w-screen-xl bg-black/50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="mr-2 md:mr-4 lg:hidden">
          <TiThMenuOutline className="text-white text-xl md:text-4xl"/>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navMenu}
          </ul>
        </div>
        <div className='text-white cinzel'>
          <h3 className='text-base md:text-2xl font-semibold md:font-black'>BISTRO BOSS</h3>
          <p className='font-normal md:font-bold text-xs md:text-lg'>R E S T A U R A N T</p>
        </div>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="flex gap-7 activeNav text-white font-semibold px-1">
            {navMenu}
          </ul>
        </div>
        <div className="mr-1 flex items-center">
          <div>
            <button className="flex mx-1">
              <Link to='/dashboard/cart'><img className="w-8 md:w-10" src={cartImg} alt="" /></Link>
              <div className="badge badge-secondary text-sm md:text-base p-1 md:p-2">+{cart.length}</div>
            </button>
          </div>
          {
            user ?
             <button className="text-white font-medium md:font-bold text-sm md:text-lg" onClick={handleLogOut}>LogOut</button> 
             : 
             <Link to='/login'><button className="text-white font-medium md:font-bold text-sm md:text-lg">LogIn</button></Link>
          }
        </div>
        {
          user ? <div className="tooltip tooltip-left" data-tip={user?.displayName}>
            <button><img className="w-8 md:w-12 h-8 md:h-12 rounded-full ml-1" src={user?.photoURL} alt="img" /></button>
            
          </div> : <img className="w-8 md:w-12 h-8 md:h-12 rounded-full ml-1" src={profileImg} alt="" />
        }
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
