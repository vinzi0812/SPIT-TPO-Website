// Chakra imports
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import PieChart from "components/charts/PieChart";
import { pieChartData, pieChartOptions } from "variables/charts";
import React from "react";

export default function Conversion(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card p='20px' align='center' direction='column' w='100%' {...rest}>
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        mb='8px'>
        <Text color={textColor} fontSize='md' fontWeight='600' mt='4px'>
          Category of Company and the number of Students who got Placed
        </Text>
      </Flex>

      <PieChart
        h='100%'
        w='100%'
        chartData={pieChartData}
        chartOptions={pieChartOptions}
      />
      <Card
        bg={cardColor}
        flexDirection='row'
        boxShadow={cardShadow}
        w='100%'
        p='15px'
        px='20px'
        mt='15px'
        mx='auto'>
        {/* add legend of pie chart */}
        <Flex direction='column' align='left'>
          <Flex align='center'>
            <Box
              w='10px'
              h='10px'
              borderRadius='50%'
              bg='#5E37FF'
              me='10px'
            />
            <Text color={textColor} fontSize='sm' fontWeight='500'>
              Elite
            </Text>
          </Flex>
          <Flex align='center'>
            <Box
              w='10px'
              h='10px'
              borderRadius='50%'
              bg='#6AD2FF'
              me='10px'
            />
            <Text color={textColor} fontSize='sm' fontWeight='500'>
              Super Dream
            </Text>
          </Flex>
          <Flex align='center'>
            <Box
              w='10px'
              h='10px'
              borderRadius='50%'
              bg='#EFF4FB'
              me='10px'
            />
            <Text color={textColor} fontSize='sm' fontWeight='500'>
              Dream
            </Text>
          </Flex>
          <Flex align='center'>
            <Box
              w='10px'
              h='10px'
              borderRadius='50%'
              bg='#E1E9F8'
              me='10px'
            />
            <Text color={textColor} fontSize='sm' fontWeight='500'>
              Normal
            </Text>
          </Flex>
          <Flex align='center'>
            <Box
              w='10px'
              h='10px'
              borderRadius='50%'
              bg='#F8F8F8'
              me='10px'
            />
            <Text color={textColor} fontSize='sm' fontWeight='500'>
              Unplaced
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Card>
  );
}
