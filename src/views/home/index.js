import React from "react";
import "./index.scss";
import Banner from "../../components/main_banner";
import TextBanner from "../../components/textBanner";
import VideoBanner from "../../components/videoBanner";
import FooterForm from "../../components/footerForm";
import Footer from "../../components/footer";
const App = () => {
  return (
    <>
      <Banner />
      <TextBanner />
      <VideoBanner />
      <FooterForm />
      <Footer />
    </>
  );
};

export default App;
