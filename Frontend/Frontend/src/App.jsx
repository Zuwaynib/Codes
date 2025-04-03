import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./components/forms/SignUp";
import SignIn from "./components/forms/SignIn";

import ProcessingPage from "./components/ProcessingPage";

// import FindMeds from "./pages/FindMeds";
import SearchPage from "./pages/SearchPage";
import SearchpageSummary from "./pages/SearchpageSummary";
import { useState } from "react";
import ProfileSignup from "./pages/ProfileSignup";


function App() {
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />

      <Route path = "/processing" element = {<ProcessingPage/>}/>

      <Route
        path="/findmeds"
        element={
          <SearchPage
            selectedMedicines={selectedMedicines}
            setSelectedMedicines={setSelectedMedicines}
          />
        }
      />
      <Route path="/search-summary" element={<SearchpageSummary />} />
      <Route path="/complete-profile" element={<ProfileSignup />} />

    </Routes>
  );
}

export default App;
