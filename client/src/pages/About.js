import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to BuyNest, your trusted destination for premium watches and clocks. We're passionate about helping you find the perfect timepiece that fits your style and space. Whether it's a classic wristwatch or a modern wall clock, BuyNest offers quality, reliability, and timeless design - all in one place. Built with care and delivered with trust, your time matters to us.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
