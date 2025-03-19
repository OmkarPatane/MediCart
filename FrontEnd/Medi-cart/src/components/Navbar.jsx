import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  IconButton,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  HStack,
  Text,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="nav" bg="gray.100" w="100vw" py={3} boxShadow="sm">
      <Container maxW="100%" px={6}>
        <Flex align="center" justify="space-between">
          {/* 🌟 Logo */}
          <Text fontSize="xl" fontWeight="bold" color="blue.600">
            <Link to="/">MediCart</Link>
          </Text>

          <Box display={{ base: "none", md: "block" }} flex="1" mx={6}>
            <InputGroup maxW="400px">
              <Input placeholder="Search for medicines..." />
              <InputRightElement>
                <IconButton
                  aria-label="Search"
                  icon={<SearchIcon />}
                  variant="ghost"
                />
              </InputRightElement>
            </InputGroup>
          </Box>

          {/* 🏠 Navigation Links (Hidden on Mobile) */}
          <HStack spacing={6} display={{ base: "none", md: "flex" }}>
            <Button as={Link} to="/" variant="ghost">
              Home
            </Button>
            <Button as={Link} to="/medicines" variant="ghost">
              Medicines
            </Button>
            <Button as={Link} to="/feature" variant="ghost">
              Features
            </Button>
          </HStack>

          <HStack spacing={4} display={{ base: "none", md: "flex" }}>
            <Button as={Link} to="/login" colorScheme="blue" variant="outline">
              Sign In
            </Button>
            <Button as={Link} to="/register" colorScheme="blue">
              Sign Up
            </Button>
          </HStack>

          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            display={{ base: "block", md: "none" }}
            onClick={onOpen}
          />
        </Flex>
      </Container>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <VStack p={6} spacing={4} align="stretch">
            <Button as={Link} to="/" onClick={onClose} variant="ghost">
              Home
            </Button>
            <Button as={Link} to="/medicines" onClick={onClose} variant="ghost">
              Medicines
            </Button>
            <Button
              as={Link}
              to="/login"
              colorScheme="blue"
              variant="outline"
              onClick={onClose}
            >
              Sign In
            </Button>
            <Button
              as={Link}
              to="/register"
              colorScheme="blue"
              onClick={onClose}
            >
              Sign Up
            </Button>
          </VStack>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
