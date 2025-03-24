import React, { useState, useEffect } from "react";
import axios from "axios";
import AddToCart from "./AddToCart";
import ProductCard from "./ProductCart";
import Feature from "../components/Feature";
import ProductCategory from "../components/ProductCategory";
import TestimonialCard from "../components/TestimonialCard";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Icon,
  useColorModeValue,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import {
  FaSearch,
  FaShippingFast,
  FaUserMd,
  FaTablets,
  FaHeartbeat,
} from "react-icons/fa";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [medicines, setMedicines] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cart, setCart] = useState([]); // 🔥 Centralized cart state

  // Fetch medicines on component mount
  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get("http://localhost:3000/medi");
        if (response.data && response.data.length > 0) {
          setMedicines(response.data);
          setBestSellers(response.data.slice(0, 4)); // Top 4 as best sellers
        }
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    };
    fetchMedicines();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Handle search
  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    setShowResults(true);

    try {
      const response = await axios.get(
        `http://localhost:3000/medi?search=${searchTerm}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching medicines:", error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (!e.target.value.trim()) {
      setShowResults(false);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bg={useColorModeValue("blue.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container maxW={"7xl"} py={12}>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={10}
            alignItems="center"
          >
            <GridItem>
              <Stack spacing={6}>
                <Heading
                  as="h1"
                  size="xl"
                  fontWeight="bold"
                  color={useColorModeValue("gray.800", "white")}
                  lineHeight={1.2}
                >
                  Your Trusted Healthcare Partner
                </Heading>
                <Text color={"gray.500"} fontSize={"lg"}>
                  Quality medications, medical supplies, and healthcare products
                  delivered to your doorstep with care and precision.
                </Text>
                <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                  <Button
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={6}
                    colorScheme={"blue"}
                    bg={"blue.500"}
                    _hover={{ bg: "blue.600" }}
                  >
                    Shop Now
                  </Button>
                  <Button
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={6}
                  >
                    Learn More
                  </Button>
                </Stack>
              </Stack>
            </GridItem>
            <GridItem>
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
                src={"/api/placeholder/600/500"}
                rounded={"lg"}
              />
            </GridItem>
          </Grid>
        </Container>
      </Box>
      {/* Search Bar */}
      <Container maxW={"7xl"} py={10}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <InputGroup size="lg">
            <Input
              pr="4.5rem"
              placeholder="Search for medications, supplements, or medical equipment"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                colorScheme="blue"
                onClick={handleSearch}
                isLoading={loading}
              >
                {loading ? <Spinner size="sm" /> : <Icon as={FaSearch} />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>

        {/* Search Results */}
        {showResults && (
          <Box mt={4} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <Text fontSize="2xl" mb={4}>
              Search Results
            </Text>
            {searchResults.length > 0 ? (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                {searchResults.map((medicine) => (
                  <ProductCard key={medicine._id} product={medicine} />
                ))}
              </SimpleGrid>
            ) : (
              <Text>No results found for "{searchTerm}"</Text>
            )}
          </Box>
        )}
      </Container>

      {/* Features Section */}
      <Box bg={useColorModeValue("gray.50", "gray.900")}>
        <Container maxW={"7xl"} py={16}>
          <Stack
            spacing={4}
            as={Container}
            maxW={"3xl"}
            textAlign={"center"}
            mb={10}
          >
            <Heading fontSize={"3xl"}>Why Choose Us</Heading>
            <Text color={"gray.600"} fontSize={"lg"}>
              We prioritize your health with quality products, expert advice,
              and seamless service.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            <Feature
              icon={<Icon as={FaShippingFast} w={10} h={10} />}
              title={"Fast Delivery"}
              text={
                "Get your medical supplies delivered quickly and safely to your doorstep."
              }
            />
            <Feature
              icon={<Icon as={FaUserMd} w={10} h={10} />}
              title={"Expert Advice"}
              text={
                "Access professional healthcare guidance when you need it most."
              }
            />
            <Feature
              icon={<Icon as={FaTablets} w={10} h={10} />}
              title={"Quality Products"}
              text={
                "All products are sourced from verified and trusted manufacturers."
              }
            />
            <Feature
              icon={<Icon as={FaHeartbeat} w={10} h={10} />}
              title={"Care & Support"}
              text={
                "Dedicated customer service team available to assist you 24/7."
              }
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Popular Categories */}
      <Container maxW={"7xl"} py={16}>
        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
          mb={10}
        >
          <Heading fontSize={"3xl"}>Popular Categories</Heading>
          <Text color={"gray.600"} fontSize={"lg"}>
            Browse our most popular product categories
          </Text>
        </Stack>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <ProductCategory
                key={index}
                title={category.title}
                image={category.image}
              />
            ))
          ) : (
            <>
              <ProductCategory
                title="Medications"
                image="/api/placeholder/270/200"
              />
              <ProductCategory
                title="Medical Devices"
                image="/api/placeholder/270/200"
              />
              <ProductCategory
                title="Supplements"
                image="/api/placeholder/270/200"
              />
              <ProductCategory
                title="Personal Care"
                image="/api/placeholder/270/200"
              />
            </>
          )}
        </Flex>
      </Container>

      {/* Best Selling Products */}
      <Box bg={useColorModeValue("gray.50", "gray.900")}>
        <Container maxW={"7xl"} py={16}>
          <Stack
            spacing={4}
            as={Container}
            maxW={"3xl"}
            textAlign={"center"}
            mb={10}
          >
            <Heading fontSize={"3xl"}>Best Selling Products</Heading>
            <Text color={"gray.600"} fontSize={"lg"}>
              Our customers' favorite healthcare products
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {bestSellers.length > 0
              ? bestSellers.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              : // Fallback if no products loaded
                [1, 2, 3, 4].map((id) => (
                  <Box
                    key={id}
                    maxW={"270px"}
                    w={"full"}
                    bg={useColorModeValue("white", "gray.800")}
                    boxShadow={"lg"}
                    rounded={"md"}
                    overflow={"hidden"}
                    mx="auto"
                  >
                    <Image
                      h={"200px"}
                      w={"full"}
                      src={`/api/placeholder/270/200`}
                      objectFit={"cover"}
                    />
                    <Box p="6">
                      <Stack spacing={2} align={"center"}>
                        <Text fontWeight={600}>Product {id}</Text>
                        <Text color={"gray.500"} fontSize={"sm"}>
                          Short description here
                        </Text>
                        <Text
                          color={"blue.600"}
                          fontSize={"xl"}
                          fontWeight={"bold"}
                        >
                          ${(19.99 + id).toFixed(2)}
                        </Text>
                        <Button colorScheme="blue" size="sm">
                          Add to Cart
                        </Button>
                      </Stack>
                    </Box>
                  </Box>
                ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Container maxW={"7xl"} py={16}>
        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
          mb={10}
        >
          <Heading fontSize={"3xl"}>Customer Testimonials</Heading>
          <Text color={"gray.600"} fontSize={"lg"}>
            Hear what our customers have to say about us
          </Text>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <TestimonialCard
            content="The customer service is exceptional. They helped me find exactly what I needed for my condition."
            author="Sarah J."
          />
          <TestimonialCard
            content="Fast delivery and excellent product quality. I've been a loyal customer for over 2 years now."
            author="Michael T."
          />
          <TestimonialCard
            content="Their subscription service for my regular medication has made my life so much easier."
            author="Emma R."
          />
        </SimpleGrid>
      </Container>

      {/* Newsletter */}
      <Box bg={useColorModeValue("blue.50", "gray.900")}>
        <Container maxW={"7xl"} py={16}>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"}>Stay Updated</Heading>
            <Text color={"gray.600"} fontSize={"lg"}>
              Subscribe to our newsletter for the latest health tips and product
              updates
            </Text>
            <Flex
              direction={{ base: "column", md: "row" }}
              maxW={"md"}
              mx={"auto"}
              mt={4}
            >
              <Input
                placeholder={"Your email address"}
                bg={"white"}
                border={0}
                mr={{ md: 2 }}
                mb={{ base: 2, md: 0 }}
              />
              <Button
                colorScheme={"blue"}
                bg={"blue.500"}
                px={6}
                _hover={{
                  bg: "blue.600",
                }}
              >
                Subscribe
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
