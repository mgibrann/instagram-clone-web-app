import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

export default function App() {
  const user = localStorage.getItem("profile");
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
