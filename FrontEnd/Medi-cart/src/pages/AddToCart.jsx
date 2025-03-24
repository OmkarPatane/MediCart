import { Box, Button, Heading, Text, Stack, Divider } from "@chakra-ui/react";
import { useState } from "react";

const AddToCart = ({ product }) => {
  const [cart, setCart] = useState([]);

  // Function to add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Function to remove item from cart
  const removeFromCart = (item) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex(
        (cartItem) => cartItem.name === item.name
      );
      if (index !== -1) {
        const newCart = [...prevCart];
        newCart.splice(index, 1);
        return newCart;
      }
      return prevCart;
    });
  };

  return (
    <Box
      p={5}
      border="1px solid #ddd"
      borderRadius="md"
      boxShadow="md"
      textAlign="center"
      bg="white"
      width="100%"
      maxW="300px"
    >
      <Heading size="md" color="gray.700">
        🛒 Cart ({cart.length} items)
      </Heading>

      {/* Cart Items Display */}
      {cart.length === 0 ? (
        <Text mt={2} color="gray.500">
          No items in cart
        </Text>
      ) : (
        <Stack spacing={2} mt={2} align="center">
          {cart.map((item, index) => (
            <Box
              key={index}
              borderBottom="1px solid lightgray"
              pb={1}
              width="100%"
            >
              <Text fontSize="sm" fontWeight="medium">
                {item.name} - ₹{item.price.toFixed(2)}
              </Text>
            </Box>
          ))}
        </Stack>
      )}

      <Divider my={3} />

      {/* Buttons inside the card, styled properly */}
      <Stack direction="row" spacing={3} justify="center">
        <Button colorScheme="blue" size="sm" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
        <Button
          colorScheme="red"
          size="sm"
          onClick={() => removeFromCart(product)}
          isDisabled={cart.length === 0}
        >
          Remove
        </Button>
      </Stack>
    </Box>
  );
};

export default AddToCart;
