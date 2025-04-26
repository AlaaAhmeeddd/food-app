import { Route, Routes } from "react-router-dom";
import CartProvider from "./components/CartProvider";
import Header from "./components/Header";
import Menu from "./components/Menu";
import SignIn from "./components/SignIn";

function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
