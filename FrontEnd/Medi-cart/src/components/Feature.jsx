import {
  Stack,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack
      align={"center"}
      textAlign={"center"}
      p={6}
      rounded={"lg"}
      boxShadow={"lg"}
      bg={useColorModeValue("white", "gray.700")}
      transition="transform 0.3s ease"
      _hover={{ transform: "translateY(-5px)" }}
    >
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"blue.500"}
        mb={4}
      >
        {icon}
      </Flex>
      <Heading fontSize={"xl"}>{title}</Heading>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default Feature;
