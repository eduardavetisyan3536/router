import { Route, Routes } from "react-router";
import Main from "./Components/Main";
import Header from "./Components/Header";
import Wearbetter from "./Components/Wearbetter";
import UserContext from "./Components/Context/UserContext";
import Print from "./Components/Print";
import Reg from "./Components/Reg";

function App() {
  
  return (
    <div>
      <UserContext.Provider>
      <Header />
      <Routes>
        <Route index path="/router/" element={<Wearbetter />} />
        <Route path="/router/collections" element={<Main />} />
        <Route path="/router/collections/:productId" element={<Print />}/>
        <Route path="/router/reg" element={<Reg />}/>

      </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
