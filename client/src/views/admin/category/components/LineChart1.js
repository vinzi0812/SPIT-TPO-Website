// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import LineChart from "components/charts/LineChart";
import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdBarChart, MdOutlineCalendarToday } from "react-icons/md";
// Assets
import { RiArrowUpSFill } from "react-icons/ri";
import {
  lineChartDataBoys,
  lineChartOptionsBoys,
} from "variables/charts";

export default function LineChart1(props) {
  const { ...rest } = props;

  // Chakra Color Mode

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
  return (
    <Card
      justifyContent='center'
      align='center'
      direction='column'
      w='100%'
      mb='0px'
      {...rest}>
      <Flex justify='space-between' ps='0px' pe='20px' pt='5px'>
        <Flex align='center' w='100%'>
          <Button
            bg={boxBg}
            fontSize='sm'
            fontWeight='500'
            color={textColorSecondary}
            borderRadius='7px'>
            <Icon
              as={MdOutlineCalendarToday}
              color={textColorSecondary}
              me='4px'
            />
            Average and Median Salaries of {props.type}
          </Button>
        </Flex>
      </Flex>
      <Flex w='100%' flexDirection={{ base: "column", lg: "row" }}>
        <Flex flexDirection='column' me='20px' mt='28px'>
          <Text
            color={textColor}
            fontSize='34px'
            textAlign='start'
            fontWeight='700'
            lineHeight='100%'>
            14.1
          </Text>
          <Flex align='left' mb='20px'>
            <Text
              color='secondaryGray.600'
              fontSize='sm'
              fontWeight='500'
              mt='4px'
              me='12px'
              align='left'>
              Average Salary
            </Text>
            </Flex>
            <Text
            color={textColor}
            fontSize='34px'
            textAlign='start'
            fontWeight='700'
            lineHeight='100%'>
            12
          </Text>
          <Flex align='left' mb='20px'>
            <Text
              color='secondaryGray.600'
              fontSize='sm'
              fontWeight='500'
              mt='4px'
              me='12px'
              align='left'>
              Median Salary
            </Text>
        </Flex>
        </Flex>
        <Box minH='260px' minW='75%' mt='auto'>
          <LineChart
            chartData={props.data}
            chartOptions={lineChartOptionsBoys}
          />
        </Box>
      </Flex>
    </Card>
  );
}
