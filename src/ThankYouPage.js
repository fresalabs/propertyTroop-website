import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl } from "components/misc/Layouts";
import tw from "twin.macro";

import { LogoLink } from "components/headers/light.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";

import logo from "images/propertyTroop/logo.svg";

/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 lg:mr-12 last:mr-0 text-gray-700 border-gray-400 hocus:border-gray-700 `;
const PrimaryNavLink = tw(
  NavLink
)`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline`;
const HeroRow = tw(Row)`max-w-xl flex-col justify-between items-center py-20 lg:py-24 mx-auto`;

const Heading = tw(HeadingBase)`text-center text-primary-900 leading-snug`;
const Description = tw(DescriptionBase)`mt-4 text-center lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;

export default () => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  window.gtag("js", new Date());
  window.gtag("config", "G-3SX737NCJ3");

  return (
    <AnimationRevealPage disabled>
      <Container tw="-mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
          <NavRow>
            <LogoLink href="/">
              <img src={logo} alt="" />
            </LogoLink>
          </NavRow>
          <HeroRow>
            <Heading>Disclaimer</Heading>
            <Description tw="mt-12">PropertyTroop is a resource for information about property ownership and related matters. We rely on government sources for the data we provide and make every effort to keep it up to date. However, we cannot guarantee the accuracy of this information and are not legally responsible for any errors or discrepancies that may occur.</Description>
            <div tw="mt-12 text-center">
              Please note that PropertyTroop is intended only as a source of information and should not be relied upon for legal representation or as a substitute for legally binding documents from government offices. If you require legally binding information about property ownership or any other matter, we recommend that you contact the appropriate government office for assistance.
            </div>
            <div tw="mt-12 text-center">
              In addition, the timeline view provided by PropertyTroop is generated using algorithms that attempt to accurately represent information about property ownership and related events. However, we cannot guarantee the accuracy of this information and are not responsible for any errors or omissions that may occur.
            </div>
            <div tw="mt-12 text-center">
              By using PropertyTroop, you acknowledge and agree that you are using the information provided at your own risk and that PropertyTroop is not responsible for any errors or omissions. We encourage you to verify any information obtained from PropertyTroop with the appropriate government office before relying on it for any purpose.
            </div>
          </HeroRow>
          <h1>Changes to Disclaimer</h1>
          <p>
            We reserve the right, at Our sole discretion, to modify or replace the disclaimer. If a revision
            is material We will make reasonable efforts to keep you updated. What constitutes a material change will be determined at Our sole discretion.
          </p>
          <p>
            By continuing to access or use Our Service after those revisions become effective, You agree to be bound
            by the revised disclaimer. If You do not agree to the new disclaimer, in whole or in part, please stop using the
            website and the Service.
          </p>
          <h1>Contact Us</h1>
          <p>If you have any questions about the disclaimer, You can contact us:</p>

          <ul>
            <li>By email: support@getpropertytroop.com</li>
          </ul>
        </Content2Xl>
      </Container>
    </AnimationRevealPage>
  );
};
