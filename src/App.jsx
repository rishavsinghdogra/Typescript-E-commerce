import "./App.css";
import AllDataContext from "./contexts/Alldata";
import Mainsite from "./components/MainSite";
import Login from "./components/auth/Login";
import { Routes, Route } from "react-router-dom";
import Protectedroute from "./routes/ProtectedRoutes";
import ProductDetail from "./components/ProductDetail";
import LoginState from "./contexts/LoginState";


function App() {

  return (
    <>
      <LoginState>
        <AllDataContext>
          <Routes>
            <Route element={<Protectedroute />}>
              <Route path="/" element={<Mainsite />} />
              <Route path="/productDetail/:id" element={<ProductDetail />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </AllDataContext>
      </LoginState>
    </>
  );
}

export default App;
