import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords do not match!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:3000/user/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      toast({
        title: "Sign Up Successful!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/login"); // Redirect to login page
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      toast({
        title: error.response?.data?.message || "Registration failed!",
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
        Sign Up
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          {/* Name */}
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>

          {/* Email */}
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

          {/* Password */}
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

          {/* Confirm Password */}
          <FormControl isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
              <Input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <InputRightElement>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          {/* Submit Button */}
          <Button type="submit" colorScheme="blue" w="full">
            Sign Up
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Register;
