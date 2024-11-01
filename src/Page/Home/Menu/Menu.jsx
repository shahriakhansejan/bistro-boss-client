import Title from "../../Shared/Title/Title";
import Item from "../../Shared/Item/Item";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";


const Menu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <div className="mt-24">
            <Title title='FROM OUR MENU' subTitle='Check it Out'></Title>
            <div className="grid lg:grid-cols-2 gap-6">
                {
                    popular.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>
            <div className="text-center mt-12">
            <Link to='/shop/salad'><button className="btn btn-outline border-0 border-b-4">VIEW ALL MENU</button></Link>
            </div>
        </div>
    );
};



export default Menu;