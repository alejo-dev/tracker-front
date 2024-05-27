import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import LoginForm from "./views/LoginForm/LoginForm";
import AddActivity from "./views/AddActivity/AddActivity";
import SearchActivities from "./views/SearchActivities/SearchActivities";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/add-activity" element={<AddActivity />} />
        <Route path="/search-activities" element={<SearchActivities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
