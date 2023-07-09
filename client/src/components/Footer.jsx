import { Box, Container, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.200" py={4}>
      <Container maxW="container.lg">
        <Flex justifyContent="center" alignItems="center">
          <Text>&copy; {new Date().getFullYear()} Task Management App</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
