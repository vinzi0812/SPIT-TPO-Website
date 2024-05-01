/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import Card from "components/card/Card";
import Recruiter from "./components/Recruiter";
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import { useState, useEffect } from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import PieCard2 from "views/admin/default/components/PieCard2";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import axios from "axios";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const [averageCTC, setAverageCTC] = useState(0);
  const [medianCTC, setMedianCTC] = useState(0);
  const [placementPercentage, setPlacementPercentage] = useState(0);
  const [companies, setCompanies] = useState(0);
  const [roles, setRoles] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const pieData = [92, 123, 14, 0, 21, 4];
  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      setLoading(true);
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/dashboard/"
        );
        setAverageCTC(response.data.average_ctc);
        setMedianCTC(response.data.median_ctc);
        setPlacementPercentage(response.data.placement_percentage);
        setCompanies(response.data.companies);
        setRoles(response.data.roles);
        // setPieData([response.data.current_year.elite, 
        //   response.data.current_year.super_dream, 
        //   response.data.current_year.dream, 
        //   response.data.current_year.normal, 
        //   response.data.current_year.unplaced, 
        //   response.data.current_year.ineligible]);
        // console.log(pieData)
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
              }
            />
          }
          name='Average Salary'
          value={`Rs. ${averageCTC} LPA`}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdAttachMoney} color={brandColor} />
              }
            />
          }
          name='Median Salary'
          value={`Rs. ${medianCTC} LPA`}
        />
        <MiniStatistics name='Percentage Students Placed' value={`${placementPercentage} %`} />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TotalSpent companies={companies} roles={roles}/>
        <DailyTraffic />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        {/* <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} /> */}
        <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px'>
          <Recruiter />

        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <PieCard chartData={pieData}/>
          <PieCard2 />
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}
