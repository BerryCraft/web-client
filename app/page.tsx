import Footer from "components/footer/Footer";
import Hero from "components/hero/Hero";
import Main from "components/main/Main";
import SignUp from "components/signup/SignUp";

import api from "../config/api/api.config";

const HomePage = async () => {
  const user = await api.get("https://jsonplaceholder.typicode.com/users/1");
  return (
    <>
      <Hero />
      <Main />
      <SignUp />
    </>
  );
};

export default HomePage;
