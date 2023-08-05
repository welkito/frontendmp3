import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import Product from "views/admin/product";
// import addProduct from "views/admin/product/components/addProduct";
import Report from "views/admin/report";
import Category from "views/admin/category";
import Home from "views/admin/home";
// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdAllInbox,
  MdHome,
  MdDescription,
  MdOutlineShoppingCart,
  MdWork,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";


export const routes = [
  {
    name: "Home",
    layout: "/admin",
    path: "home",
    icon: <MdHome className="h-6 w-6" />,
    component: <Home />,
  },
  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "nft-marketplace",
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Product",
    layout: "/admin",
    path: "product",
    icon: <MdWork className="h-6 w-6" />,
    component: <Product />,
  },
  {
    name: "Category",
    layout: "/admin",
    path: "category",
    icon: <MdAllInbox className="h-6 w-6" />,
    component: <Category />,
  },
  {
    name: "Report",
    layout: "/admin",
    path: "report",
    icon: <MdDescription className="h-6 w-6" />,
    component: <Report />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  { 
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  }
];


export const slicedRoutes = [
  {
    name: "Home",
    layout: "/admin",
    path: "home",
    icon: <MdHome className="h-6 w-6" />,
    component: <Home />,
  },
  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "nft-marketplace",
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <DataTables />,
  // },
  {
    name: "Product",
    layout: "/admin",
    path: "product",
    icon: <MdWork className="h-6 w-6" />,
    component: <Product />,
  },
  {
    name: "Category",
    layout: "/admin",
    path: "category",
    icon: <MdAllInbox className="h-6 w-6" />,
    component: <Category />,
  },
  {
    name: "Report",
    layout: "/admin",
    path: "report",
    icon: <MdDescription className="h-6 w-6" />,
    component: <Report />,
  },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "profile",
  //   icon: <MdPerson className="h-6 w-6" />,
  //   component: <Profile />,
  // },
  // { 
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "sign-in",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <SignIn />,
  // }
];
// export slicedRoutes;
// export routes;