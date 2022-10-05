import React, {useState} from "react";
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Dashboard} from "../HeaderComponents/Dashboard";
import {MarketPrice} from "../HeaderComponents/MarketPrice";
import {News} from "../HeaderComponents/News";
import {NFT} from "../HeaderComponents/NFT";
import {DashboardComp} from "./components/DashboardComp";
import Marketprice from "../Marketprice/Marketprice";

const Header = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <TabContext value={value}>
                <Box>
                    <TabPanel value="1">
                        <Dashboard />
                    </TabPanel>
                    <TabPanel value="2">
                        <MarketPrice />
                    </TabPanel>
                    <TabPanel value="3">
                        <NFT />
                    </TabPanel>
                    <TabPanel value="4">
                        <News />
                    </TabPanel >
                    <TabList
                        aria-label="my tab component"
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                    >
                        <Tab label="Dashboard" value="1" />
                        <Tab label="Market place" value="2" />
                        <Tab label="NFTs" value="3" />
                        <Tab label="News" value="4" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <DashboardComp />
                </TabPanel>
                <TabPanel value="3">
                    <Marketprice />
                </TabPanel>
                <TabPanel value="4">
                    moon
                </TabPanel>
                <TabPanel value="5">
                    moon
                </TabPanel>
            </TabContext>
        </Box>
    );
}

export default Header;