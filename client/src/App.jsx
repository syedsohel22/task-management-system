import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainRoutes from "./components/MainRoutes";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box >
      <Navbar />
      <MainRoutes />
      <Footer />
    </Box>
  );
}

export default App;
