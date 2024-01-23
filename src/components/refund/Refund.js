import React  from "react";
import tw from "twin.macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 bg-primary-900 text-gray-100`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

export default ({
                    subheading = "",
                    heading = "Refund Policy",
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                }) => {

    return (
        <PrimaryBackgroundContainer>
            <ContentWithPaddingXl>
                <HeadingContainer>
                    <Heading>{heading}</Heading>
                    {subheading && <Subheading>{subheading}</Subheading>}
                    <Description>{description}</Description>
                </HeadingContainer>
            </ContentWithPaddingXl>
        </PrimaryBackgroundContainer>
    );
};
