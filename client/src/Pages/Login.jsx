import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginFunc } from "./../redux/authReducer/action";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    dispatch(loginFunc(formData));
    console.log(formData);
    setFormData({ email: "", password: "" });
  };

  return (
    <Container maxW="sm" height={"60vh"} mt={"10%"}>
      <Box p={4} borderWidth="1px" borderRadius="lg">
        <Heading mb={4}>Login</Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </FormControl>

            <Button type="submit" colorScheme="blue">
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
