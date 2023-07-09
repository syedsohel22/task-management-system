import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box minHeight="100vh"  py={6}>
      <Container maxW="container.lg">
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Welcome to the Task Management App
        </Heading>
        <Text textAlign="center" fontSize="lg" mb={6}>
          Stay organized and manage your tasks effectively with our powerful
          Task Management app.
        </Text>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          <GridItem>
            <Card title="Task Organization" icon="💼">
              Prioritize and organize your tasks efficiently to stay focused on
              what matters the most.
            </Card>
          </GridItem>
          <GridItem>
            <Card title="Collaboration" icon="🤝">
              Collaborate with your team members, assign tasks, and track
              progress together in one place.
            </Card>
          </GridItem>
          <GridItem>
            <Card title="Deadline Management" icon="⏰">
              Set deadlines, receive reminders, and ensure timely completion of
              your tasks and projects.
            </Card>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

const Card = ({ title, icon, children }) => {
  return (
    <Box bg="white" p={4} borderWidth="1px" borderRadius="lg">
      <Text fontSize="xl" mb={2}>
        {icon} {title}
      </Text>
      <Text>{children}</Text>
    </Box>
  );
};

export default HomePage;
