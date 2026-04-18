import ContextProvider from "./components/ContextProvider";
import Home from "./components/Home";
import "./App.css"; // Tailwind import

function App() {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
}

export default App;