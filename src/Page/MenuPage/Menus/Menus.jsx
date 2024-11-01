import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import Title from "../../Shared/Title/Title";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"

const Menus = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
  return (
    <div>
      <Helmet>
      <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={menuImg} title='OUR MENU' des='WOULD YOU LIKE TO TRY A DISH?'></Cover>

      {/* todays Offer */}
      <Title title="TODAY'S OFFER" subTitle="Don't miss"></Title>
    <MenuCategory items={offered} btnText='ORDER YOUR FAVORITE FOOD'></MenuCategory>

    {/* desert */}
    <MenuCategory
    items={dessert}
    btnText='ORDER YOUR FAVORITE FOOD'
    title='desserts'
    img={dessertImg}
    des='Enjoy our rich chocolate lava cake or the zesty lemon cheesecake with berry compote.'
    ></MenuCategory>

    {/* Pizza */}
    <MenuCategory
    items={pizza}
    btnText='ORDER YOUR FAVORITE FOOD'
    title='pizza'
    img={pizzaImg}
    des='Enjoy our fresh Margherita pizza or the classic pepperoni pizza with melted cheese.'
    ></MenuCategory>

    {/* salad */}
    <MenuCategory
    items={salad}
    btnText='ORDER YOUR FAVORITE FOOD'
    title='salad'
    img={saladImg}
    des='Try our crisp Caesar salad or flavorful Greek salad.'
    ></MenuCategory>

    {/* soup */}
    <MenuCategory
    items={soup}
    btnText='ORDER YOUR FAVORITE FOOD'
    title='soup'
    img={soupImg}
    des='Warm up with our delightful soups!'
    ></MenuCategory>

 
    </div>
  );
};

Menus.propTypes = {};

export default Menus;
