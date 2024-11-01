import Cover from "../Shared/Cover/Cover";
import shopImg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import ShopCard from "../Shared/ShopCard/ShopCard";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Shop = () => {
    const categories = ['salad', 'pizza', 'soup', 'desserts', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    // console.log(category)

    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    
    return (
        <div>
            <Helmet>
                <title>Bistro | Shop</title>
            </Helmet>
            <Cover img={shopImg} title="OUR SHOP" des="Would you like to try a dish ?"></Cover>
            <div className="my-12">

                <div className="my-12">
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

                        <div className="font-medium md:font-semibold dark1 text-xs md:text-base text-center">
                        <TabList>
                            <Tab>SALAD</Tab>
                            <Tab>PIZZA</Tab>
                            <Tab>SOUPS</Tab>
                            <Tab>DESSERTS</Tab>
                            <Tab>DRINKS</Tab>

                        </TabList>
                        </div>


                        <div className="mt-4 mx-2">
                            <TabPanel>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {
                                    salad.map(item => <ShopCard item={item} key={item._id}></ShopCard>)
                                }
                                </div>
                            </TabPanel>

                            <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {
                                    pizza.map(item => <ShopCard item={item} key={item._id}></ShopCard>)
                                }
                                </div>
                            </TabPanel>

                            <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {
                                    soup.map(item => <ShopCard item={item} key={item._id}></ShopCard>)
                                }
                                </div>
                            </TabPanel>

                            <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {
                                    dessert.map(item => <ShopCard item={item} key={item._id}></ShopCard>)
                                }
                                </div>
                            </TabPanel>

                            <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {
                                    drinks.map(item => <ShopCard item={item} key={item._id}></ShopCard>)
                                }
                                </div>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>

        </div>
    );
};

Shop.propTypes = {

};

export default Shop;