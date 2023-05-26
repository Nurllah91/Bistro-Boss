import Cover from "../../Shared/Cover/Cover";
import orderImg from '../../../assets/order/order-bg.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";


const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)

    const [menu] = useMenu();

    const desserts = menu.filter(item=>item.category==='dessert')
    const pizza = menu.filter(item=>item.category==='pizza')
    const soup = menu.filter(item=>item.category==='soup')
    const salad = menu.filter(item=>item.category==='salad')
    const drinks = menu.filter(item=>item.category==='drinks')


    return (
        <div>
            <Cover img={orderImg} title={"Order now"}></Cover>

            {/* tab section  */}
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                   <OrderTab item={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                     <OrderTab item={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                     <OrderTab item={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                     <OrderTab item={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                     <OrderTab item={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;