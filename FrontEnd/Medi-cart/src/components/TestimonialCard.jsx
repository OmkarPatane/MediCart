import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

const TestimonialCard = ({ content, author }) => {
  return (
    <Box
      maxW={"445px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      rounded={"md"}
      p={6}
      overflow={"hidden"}
    >
      <Stack>
        <Text color={"gray.500"} fontSize={"sm"} fontStyle={"italic"}>
          "{content}"
        </Text>
        <Text fontWeight={600}>{author}</Text>
      </Stack>
    </Box>
  );
};

export default TestimonialCard;
