import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import Item from "../../Shared/Item/Item";


const MenuCategory = ({items, btnText, title, img, des}) => {

    return (
        <div className="mb-24">
            {
                title && <Cover img={img} title={title} des={des}></Cover>
            }
            <div className="grid lg:grid-cols-2 gap-6">
                {
                    items.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>
            <div className="text-center mt-12">
            <Link to={`/shop/${title}`}><button className="btn btn-outline border-0 border-b-4">{btnText}</button></Link>
            </div>
        </div>
    );
};



export default MenuCategory;