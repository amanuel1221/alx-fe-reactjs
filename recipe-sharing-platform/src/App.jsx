import { BrowserRouter, Router, Routes , Route} from "react-router-dom";
import HomePage from "./components/Homepage";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
