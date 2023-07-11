import { useState } from "react";
import { Box, Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Da Vinci", "Picasso", "Monet"],
    answer: "Da Vinci",
  },
  // Add more questions here...
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption("");
    }
  };

  const handleOptionChange = (e) => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    // Handle submission logic here, e.g., checking the selectedOption against the correct answer
    console.log("Selected option:", selectedOption);
  };

  const { question, options } = questions[currentQuestionIndex];

  return (
    <Box p={4}>
      <Box>
        <h1>Question {currentQuestionIndex + 1}</h1>
        <h2>{question}</h2>
        <RadioGroup
          onClick={(e) => handleOptionChange(e)}
          value={selectedOption}
        >
          <Stack spacing={2}>
            {options.map((option) => (
              <Radio key={option} value={option}>
                {option}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </Box>

      <Box mt={4}>
        <Button
          colorScheme="blue"
          mr={2}
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>
        <Button
          colorScheme="blue"
          mr={2}
          onClick={handleNextQuestion}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          Next
        </Button>
        {currentQuestionIndex === questions.length - 1 && (
          <Button colorScheme="green" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Quiz;
