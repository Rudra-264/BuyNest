import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Your privacy matters - we keep your information secure.
Secure shopping with full data privacy guaranteed.
We do not sell or misuse your personal data.
We only use your data to improve your shopping experience.
We respect your privacy and protect your data with care.
Your trust is important — your data stays private.
Private. Protected. Never misused.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
