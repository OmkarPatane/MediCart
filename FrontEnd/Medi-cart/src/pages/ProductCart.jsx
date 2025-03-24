import React from "react";
import { Box, Image, Text, Stack } from "@chakra-ui/react";
import AddToCart from "./AddToCart";

const ProductCart = ({ product, addToCart }) => {
  return (
    <Box
      maxW={"270px"}
      w={"full"}
      bg="white"
      boxShadow={"lg"}
      rounded={"md"}
      overflow={"hidden"}
      mx="auto"
    >
      <Image
        h={"200px"}
        w={"full"}
        src={product.image || "/api/placeholder/270/200"}
        objectFit={"cover"}
      />
      <Box p="6">
        <Stack spacing={2} align={"center"}>
          <Text fontWeight={600}>{product.name}</Text>
          <Text color={"gray.500"} fontSize={"sm"}>
            {product.description?.substring(0, 50) || "Short description here"}
            {product.description?.length > 50 ? "..." : ""}
          </Text>
          <Text color={"blue.600"} fontSize={"xl"} fontWeight={"bold"}>
            ${product.price?.toFixed(2) || "19.99"}
          </Text>

          {/* Pass addToCart function */}
          <AddToCart product={product} addToCart={addToCart} />
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCart;
