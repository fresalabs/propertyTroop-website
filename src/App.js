import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import RootPage from "demos/PropertyTroop.js";

import TermsOfServicePage from "pages/TermsOfService.js";
import PrivacyPolicyPage from "pages/PrivacyPolicy.js";

import DisclaimerPage from "ThankYouPage.js";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/tos" element={<TermsOfServicePage links={[]}/>} />
          <Route path="/privacy" element={<PrivacyPolicyPage links={[]} />} />
          <Route path="/disclaimer" element={<DisclaimerPage links={[]} />} />
          <Route path="/" element={<RootPage />} />
        </Routes>
      </Router>
    </>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
