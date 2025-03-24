import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

const ProductCategory = ({ title, image }) => {
  return (
    <Box
      maxW={"270px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      rounded={"md"}
      overflow={"hidden"}
      transition="transform 0.3s ease"
      _hover={{ transform: "translateY(-5px)" }}
    >
      <Box h={"200px"} bg={"gray.100"} pos={"relative"}>
        <Image
          src={image || "/api/placeholder/270/200"}
          alt={`${title} category`}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          h={"100%"}
        />
      </Box>
      <Stack p={4} align={"center"}>
        <Heading fontSize={"xl"} fontWeight={500} fontFamily={"body"}>
          {title}
        </Heading>
        <Button colorScheme="blue" size="sm" mt={2}>
          Shop Now
        </Button>
      </Stack>
    </Box>
  );
};

export default ProductCategory;
