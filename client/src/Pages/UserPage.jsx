import {
  Stack,
  Input,
  Select,
  FormControl,
  FormLabel,
  Flex,
  Button,
  Heading,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
const UserPage = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    due_date: "",
    status: "",
    assigned_user: "",
  });

  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };

  const user = ["Aman", "sohel", "sohel-1", "sohel-2", "sohel-3"];
  return (
    <Flex minH={"85vh"} align={"center"} justify={"center"}>
      <Stack w={"30%"} margin={"auto"} border={"1px solid grey"} p={"10px"}>
        <Center bg={"green"} color={"white"} borderRadius={"10px"}>
          <Heading p={"10px"}>Create a new task</Heading>
        </Center>
        <form onSubmit={handleTaskSubmit}>
          <FormControl isRequired>
            <FormLabel>Task title</FormLabel>
            <Input
              placeholder="Task title"
              type="text"
              name="title"
              value={taskData.title}
              onChange={handleTaskChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Task description</FormLabel>
            <Input
              placeholder="Task description"
              type="text"
              name="description"
              value={taskData.description}
              onChange={handleTaskChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Due Date</FormLabel>
            <Input
              placeholder=""
              type="date"
              name="due_date"
              value={taskData.due_date}
              onChange={handleTaskChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Select Assign User</FormLabel>
            <Select
              placeholder="Select Assign User"
              name="assigned_user"
              value={taskData.assigned_user}
              onChange={handleTaskChange}
            >
              {user?.map((el, i) => {
                return (
                  <option key={i} value={el}>
                    {el}
                  </option>
                );
              })}
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Select Status</FormLabel>
            <Select
              placeholder="Select Status"
              name="status"
              value={taskData.status}
              onChange={handleTaskChange}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </Select>
          </FormControl>
          <Spacer />
          <Button type="submit" w={"100%"} mt={"15px"}>
            Create task
          </Button>
        </form>
      </Stack>
    </Flex>
  );
};

export default UserPage;
