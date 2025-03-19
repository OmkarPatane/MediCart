import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  VStack,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const toast = useToast();
  const navigate = useNavigate(); // For redirection

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:3000/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      toast({
        title: "Login Successful!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      localStorage.setItem("token", data.token); // Store token for authentication

      setTimeout(() => {
        navigate("/feature"); // Redirect to Feature page after login
      }, 2000);
    } catch (error) {
      toast({
        title: error.response?.data?.message || "Login failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      maxW="400px"
      mx="auto"
      mt="50px"
      p={6}
      boxShadow="lg"
      borderRadius="md"
      bg="gray.50"
    >
      <Heading size="lg" textAlign="center" mb={4}>
        Sign In
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
              <InputRightElement>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button type="submit" colorScheme="blue" w="full">
            Sign In
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Login;
