import React from "react";

// Chakra imports
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

//import Card
import Card from "components/card/Card.js";
// Assets

import Recruiters from "assets/img/dashboards/recruiters.png";

export default function Recruiter(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card align="center" direction="column" w="100%" {...rest}>
      <Flex justify="space-evenly" align="start" px="10px" pt="5px">
        <Flex flexDirection="column" align="start" me="20px">
          <Flex w="100%">
            <Text
              me="auto"
              color="secondaryGray.600"
              fontSize="sm"
              fontWeight="500"
            >
              Our Top Recruiters
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Box h="240px" m="auto">
        {/* add image */}
        <img
          src={Recruiters}
          alt="recruiters"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Card>
  );
}
