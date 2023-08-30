import { Route, Routes } from "react-router";
import Main from "./Components/Main";
import Header from "./Components/Header";
import Wearbetter from "./Components/Wearbetter";
import UserContext from "./Context/UserContext";
import Print from "./Components/Print";

function App() {
  return (
    <div>
      <UserContext.Provider>
      <Header />
      <Routes>
        <Route index path="/router/" element={<Wearbetter />} />
        <Route path="/router/collections" element={<Main />} />
        <Route path="/router/collections/:productId" element={<Print />}/>

      </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
