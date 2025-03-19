import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Features = () => {
  return (
    <Box p={8} textAlign="center">
      <Heading size="xl">Welcome to Features Page!</Heading>
      <Text fontSize="lg" mt={4}>
        You have successfully logged in.
      </Text>
    </Box>
  );
};

export default Features;
