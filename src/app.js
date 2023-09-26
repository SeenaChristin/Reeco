import React, { useState,lazy, Suspense, useContext } from "react";
import ReactDOM from "react-dom/client";
import {Provider} from 'react-redux';
import Header from "./components/Header";
import OrderDetails from "./components/OrderDetails";
import InfoBanneer from "./components/InfoBanner";
//import store from "./components/store";

const AppLayout = () => {
    return (
        <>
       <Header/>
       <OrderDetails/>
       <InfoBanneer/>
       </>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);