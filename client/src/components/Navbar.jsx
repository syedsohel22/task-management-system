import {
  Box,
  Flex,
  HStack,
  Button,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex
            spacing={8}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box>Logo</Box>

            {/* Navbar Links here */}
            <Button>Login</Button>
            <Button>Sign-up</Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
