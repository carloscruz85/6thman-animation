import React from "react";
import "./index.scss";
import Banner from "../../components/main_banner";
import TextBanner from "../../components/textBanner";
import VideoBanner from "../../components/videoBanner";
// import FooterForm from "../../components/footerForm";
import Footer from "../../components/footer";
import SimpleForm from "../../components/simple_form"
const App = () => {
  return (
    <>
      <Banner />
      <TextBanner />
      <VideoBanner />
      {/* <FooterForm /> */}
      <SimpleForm />
      <Footer />
    </>
  );
};

export default App;
