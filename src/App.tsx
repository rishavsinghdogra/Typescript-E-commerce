import "./App.css";
import AllDataContext from "./contexts/Alldata.tsx";
import Mainsite from "./components/MainSite.tsx";
import Login from "./components/Auth/Login.tsx";
import { Routes, Route } from "react-router-dom";
import Protectedroute from "./routes/ProtectedRoutes.tsx";
import ProductDetail from "./components/ProductDetail.tsx";
import LoginState from "./contexts/LoginState.tsx";
import { ToastContainer } from "react-toastify";
import ThemeProvider from "./contexts/ThemeContext.tsx";


function App() {
  return (
    <>
      <ToastContainer position="bottom-center" />
      <ThemeProvider>
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
      </ThemeProvider>
    </>
  );
}

export default App;
