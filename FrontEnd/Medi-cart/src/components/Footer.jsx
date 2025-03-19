import React from "react";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Image,
  Icon,
  Button,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      borderTopWidth={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Container as={Stack} maxW={"7xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Flex alignItems="center">
                <Text fontSize="2xl" fontWeight="bold" color="blue.500">
                  MediCare
                </Text>
              </Flex>
            </Box>
            <Text fontSize={"sm"}>
              Your trusted healthcare partner since 2010. Quality medications
              and medical supplies delivered with care.
            </Text>
            <Stack direction={"row"} spacing={6}>
              <Button variant={"link"} color="blue.500">
                <Icon as={FaFacebook} w={5} h={5} />
              </Button>
              <Button variant={"link"} color="blue.500">
                <Icon as={FaTwitter} w={5} h={5} />
              </Button>
              <Button variant={"link"} color="blue.500">
                <Icon as={FaInstagram} w={5} h={5} />
              </Button>
              <Button variant={"link"} color="blue.500">
                <Icon as={FaLinkedin} w={5} h={5} />
              </Button>
            </Stack>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Partners</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Safety Center</Link>
            <Link href={"#"}>Community Guidelines</Link>
            <Link href={"#"}>Shipping Information</Link>
            <Link href={"#"}>Returns & Refunds</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Contact</ListHeader>
            <Flex align="center">
              <Icon as={FaMapMarkerAlt} mr={2} color="blue.500" />
              <Text>123 Medical Drive, Healthville, CA 92345</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaPhone} mr={2} color="blue.500" />
              <Text>+1 (555) 123-4567</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaEnvelope} mr={2} color="blue.500" />
              <Text>support@medicarestore.com</Text>
            </Flex>
            <Box mt={4}>
              <Tag size={"md"} borderRadius="full" colorScheme="green" mr={2}>
                24/7 Support
              </Tag>
              <Tag size={"md"} borderRadius="full" colorScheme="blue" mr={2}>
                Fast Shipping
              </Tag>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"7xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2025 MediCare. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Use</Link>
            <Link href={"#"}>Accessibility</Link>
            <Link href={"#"}>Cookie Policy</Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
