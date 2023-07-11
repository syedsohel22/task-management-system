import { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { registerFunc } from "../redux/authReducer/action";
const Register = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    dispatch(registerFunc(formData));
    console.log(formData);
  };

  return (
    <Container maxW="sm">
      <Box p={4} borderWidth="1px" borderRadius="lg">
        <Heading mb={4}>Register</Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <FormControl isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleInputChange}
              />
            </FormControl>

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
              Register
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
