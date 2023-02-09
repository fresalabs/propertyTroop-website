import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "components/footers/FiveColumnDark.js";
import YouTube from 'react-youtube';
import ShieldIconImage from "../images/shield-icon.svg";
import SupportIconImage from "../images/support-icon.svg";
import CustomizeIconImage from "../images/customize-icon.svg";
import ReliableIconImage from "../images/reliable-icon.svg";
import FastIconImage from "../images/fast-icon.svg";
import reserchingBro from "images/propertyTroop/Researching-bro.svg";
import documents from "images/propertyTroop/documents.svg";
import GovindReddy from "images/propertyTroop/testimonals.jpeg";
import Financier  from "images/propertyTroop/testimonal2.jpeg";

import search from "images/propertyTroop/search.svg";
import DownloadApp from "../components/cta/DownloadApp";
import tw from "twin.macro";
import ThreePlans from "../components/pricing/ThreePlans";
import {androidUrl} from "../constants";

const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;

export default () => {
    const opts = {
        height: '597',
        width: '277.03937008',

        playerVars: {
            autoplay: 1,
            loop: 1,
            showinfo: 0,
            controls: 0,
            rel: 0,
            mute: 1
        },
    }
  return (
    <AnimationRevealPage>
      <Hero
        heading="Effortlessly access property encumbrance with PropertyTroop"
        description="Discover the encumbrance history of any property without the hassle of visiting a lawyer or standing in government lines with PropertyTroop's convenient app."
        primaryButtonText="Take control of your property"
        primaryButtonUrl={androidUrl}
        imageSrc={reserchingBro}
      />
        <DownloadApp
            text={<>People around you are using <HighlightedTextInverse>PropertyTroop.</HighlightedTextInverse></>}
            image={<YouTube videoId="WMPINeZLo3A" opts={opts}  />}
        />
      <MainFeature
        subheading="Timeline Service"
        heading="Easily track the history of your documents with our Timeline View feature"
        description="Our Timeline View feature provides a comprehensive and chronological history of your documents. With a user-friendly interface, you can easily track changes or updates made to the document over time. You can customize the Timeline View to focus on specific dates, events, or changes, making it easy to find the specific information you are looking for. Our Timeline View feature is shareable and can be accessed in a variety of formats. Whether you need to track the history of a single document or multiple documents, our Timeline View feature has you covered."
        imageSrc={documents}
        buttonRounded={false}
        primaryButtonText="Try PropertyTroop"
        primaryButtonUrl={androidUrl}
      />
      <MainFeature
        subheading="Search Service"
        heading="PropertyTroop allows users to easily search for and access the complete history of any property"
        description="At PropertyTroop, we make it easy to search for and access the documents you need. Whether you have a document number or survey number, you can use our advanced search tools to quickly locate the desired document. Our database is regularly updated and comprehensive, ensuring that you have access to the most current information available. Once you have found the document you are looking for, you can view all of the details in a user-friendly format. Whether you need to review the document itself or track its history with our Timeline View feature, PropertyTroop has you covered. Try it out today and see the difference for yourself."
        imageSrc={documents}
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Try PropertyTroop"
        primaryButtonUrl={androidUrl}
      />
      <MainFeature
        subheading="CC (Certified Copy) Service"
        heading="Don't trust without seeing the document"
        description="At PropertyTroop, we understand the importance of having a reliable and accurate copy of your documents. That's why we offer a Certified Copy service that allows you to obtain a copy of your document without having to rely on the parties involved. Our Certified Copy service provides an exact replica of the original document, ensuring that you have a reliable and trustworthy reference. Whether you need to review the document yourself or provide it to another party, our Duplicate Copy service gives you the peace of mind that you have a genuine and accurate copy. Try it out today and see the difference for yourself."
        imageSrc={search}
        buttonRounded={false}
        primaryButtonText="Try PropertyTroop"
        primaryButtonUrl={androidUrl}
      />
      <Features
        heading="Experience the Convenience and Accuracy of PropertyTroop's features"
        description=""
        cards={[
        {
          imageSrc: ShieldIconImage,
          title: "Timeline View",
          description: "View the complete encumbrance history of a property in an easy-to-read timeline format."
        },
        { imageSrc: FastIconImage,
          title: "Encumbrance",
          description: " Our platform provides detailed information about a property's encumbrance, including any mortgages, liens, or other encumbrances."
        },
        { imageSrc: SupportIconImage,
          title: "Search",
          description: "PropertyTroop allows users to easily search for and access the complete history of any property."
        },
        { imageSrc: SupportIconImage,
          title: "Instant Access",
          description: "Get the encumbrance history of any property in just a few clicks, without the need to visit a lawyer or stand in long lines at a government office."
        },
        { imageSrc: CustomizeIconImage,
          title: "Accurate Information",
          description: "Trust in the accuracy of PropertyTroop's encumbrance data, regularly updated from reliable government data sources to ensure you have the most current information"
        },
        { imageSrc: ReliableIconImage,
          title: "Personalized Support",
          description: "Our dedicated team of agents is here to assist you with any questions or concerns throughout the process."
        },
        ]}
      />
      <Pricing
        heading="Affordable Pricing"
        description="At PropertyTroop, we understand that not everyone has the same real estate needs. That's why we offer flexible pricing options to suit your specific requirements. Rather than a traditional monthly subscription model, we allow you to pay on a per-use basis. This means that you only pay for the timeline views or documents that you access, giving you complete control over your budget. Whether you're a first-time property buyer or a seasoned investor, our pay-as-you-use pricing makes it easy to get the information you need without breaking the bank. Try PropertyTroop today and see the difference for yourself."
        plans={[{
          name: "Timeline view",
          price: ["₹10", ".00/timeline"],
          oldPrice: "₹50.00",
          description: "Timeline View provides a complete and chronological history of your document, including any changes or updates made",
          features: [
            "Shareable Timeline view",
            "Parties involved",
            "Schedule of the property",
            "Boundaries",
          ],
          url: "https://google.com"
        }, {
          name: "Certified Copy",
          price: ["₹300", ".00/document"],
          oldPrice: "₹400.00",
          description: "Obtain a copy of your document with our Certified Copy service.",
          features: [
            "Fast turnaround",
            "Convenient",
            "View/Print",
            "Shareable",
          ],
          url: "https://google.com"
        }]}
      />
      <Testimonial
        description="At PropertyTroop, we value the feedback of our customers and use testimonials to highlight the positive impact our app has had on their real estate journey. Whether you are looking to buy, sell, or rent a property, our testimonials can give you an idea of what to expect when working with PropertyTroop. Read or watch our testimonials today and see what others have to say about their experiences with our app."
        testimonials={[
          {
            customerName: "Govinda Reddy",
            customerProfile: "Real Estate Broker",
            imageSrc:Financier,
            quote:
              "I have been using PropertyTroop for 6 months, their timeline view helps me and my clients make informed decisions on property in a minute that usually takes a 2-3 weeks. PropertyTroop made my life easier with a single tap of a button."
          }, {
            customerName: "Sreeramulu",
            customerProfile: "Financier",
            imageSrc:GovindReddy,
            quote:
              "PropertyTroop helps me find the genuineness of the property and helps validate the property & owners without leaving my office."
          }
        ]}
      />
        <ThreePlans subheading="More Information" heading="YouTube Videos" description="These videos explain what an EC is and how PropertyTroop comes into picture knowing property's history"/>
      <FAQ
        description="At PropertyTroop, we have compiled a list of FAQs to provide you with the information you need to make an informed decision about our app. Our FAQs cover a range of topics, including how to use PropertyTroop, the accuracy and security of our services, and pricing. "
        faqs={[
          {
            question: "What is PropertyTroop?",
            answer:
              "PropertyTroop is an comprehensive app that allows users to access the encumbrance history of a property without the need to visit a lawyer or stand in long lines at a government office. It also offers a Timeline View feature to track the history of a document and a Certified Copy service to obtain a reliable copy of a document."
          },
          {
            question: "How do I use PropertyTroop?",
            answer:
              "To use PropertyTroop, simply enter the property details or document information into the app and follow the prompts. Our app is designed to be user-friendly and intuitive, so you can easily access the information you need."
          },
          {
            question: "Is PropertyTroop accurate?",
            answer:
              "PropertyTroop's encumbrance data is regularly updated to ensure accuracy from various Government sources. In addition, our Certified Copy service provides an exact replica of the original document, ensuring that you have a reliable and trustworthy reference."
          },
          {
            question: "How much does PropertyTroop cost?",
            answer:
              "PropertyTroop offers a pay-as-you-use pricing model, which means you only pay for the timeline views or documents that you access. This allows you to have complete control over your budget and only pay for the services you need."
          },
          {
            question: "Is there a monthly/yearly payment model?",
            answer:
              "We currently don't have a monthly/yearly payment to ensure you only pay for what you use. We ensure your money is spent wisely"
          },
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
