import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { BsGenderMale } from "react-icons/bs";
import { RiReservedLine } from "react-icons/ri";
import { CiCircleList } from "react-icons/ci";
// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import CategoryAnalysis from "views/admin/category";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Gender Analysis",
    layout: "/admin",
    path: "/gender-analysis",
    icon: (
      <Icon
        as={BsGenderMale}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Catgeory Analysis",
    layout: "/admin",
    icon: <Icon as={RiReservedLine} width='20px' height='20px' color='inherit' />,
    path: "/category-analysis",
    component: CategoryAnalysis,
  },
  {
    name: "Summary",
    layout: "/admin",
    icon: <Icon as={CiCircleList} width='20px' height='20px' color='inherit' />,
    path: "/summary",
    component: DataTables,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
];

export default routes;
