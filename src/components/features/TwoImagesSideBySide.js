import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import TeluguOldDocument from "../../images/propertyTroop/telugu-old-document.png";
import TeluguNewDocument from "../../images/propertyTroop/telugu-document.png";
import EnglishDocument from "../../images/propertyTroop/english-document.png";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div`margin-bottom: 40px`;


const Details = tw.div`flex flex-col justify-center`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;

const SvgDotPattern1 = tw(
    SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
    SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
    SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
    SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

const ThreeColumnContainer = styled.div`
  justify-content: space-evenly;
  ${tw` flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/2 max-w-xs`}
  img {
    width: 98%;
    margin: 10px 0;
  }
`;



export default ({
                    heading,
                    subheading ,
                    cards = [
                        {
                            imageSrc: TeluguOldDocument,
                            imageSrc2: TeluguNewDocument,
                            title: "Digitization and Translation Services for Handwritten Certified Copies",
                            description:
                                "Elevate your document management to the next level with our app's revolutionary feature that transforms handwritten certified copies into readable digital text. Leveraging state-of-the-art OCR technology, we ensure that your essential documents—no matter how old or hard-to-decipher—are easily understood, shareable, and preserved in a digital format. Whether you're dealing with a fragile ancient manuscript or a recent handwritten note, our app offers an effortless solution to digitize, read, and share your vital documents anytime, anywhere. Simplify your life with us—one document at a time.",
                        },

                        {
                            imageSrc: TeluguNewDocument,
                            imageSrc2: EnglishDocument,
                            title: "Language Transformation Solutions: English to Telugu, Telugu to English Document Translation",
                            description:"Break down language barriers effortlessly with our app's state-of-the-art document translation feature, now supporting English and Telugu. Harnessing the power of advanced AI technology, our app delivers accurate and contextually correct translations, ensuring the essence and integrity of your original document remain intact. Whether you need to translate business reports, academic research, or personal texts, we've got you covered. Experience seamless, time-saving translations while preserving the original document formatting—unlock a world without linguistic limitations with us.",
                        },


                    ]
                }) => {



    return (
        <Container>
            <SingleColumn>
                <HeadingInfoContainer>
                    {heading && <HeadingTitle>{heading}</HeadingTitle>}
                    {subheading &&<HeadingDescription>
                        {subheading}
                    </HeadingDescription>}
                </HeadingInfoContainer>

                <Content>
                    {cards.map((card, i) => (

                        <Card key={i}>
                            <Details>
                                <Title>{card.title}</Title>
                                <Description>{card.description}</Description>
                            </Details>
                            <ThreeColumnContainer>
                                <Column >
                                    <img src={card.imageSrc} />
                                </Column>
                                <Column >
                                    <img src={card.imageSrc2} />
                                </Column>
                            </ThreeColumnContainer>

                        </Card>
                    ))}
                </Content>
            </SingleColumn>
            <SvgDotPattern1 />
            <SvgDotPattern2 />
            <SvgDotPattern3 />
            <SvgDotPattern4 />
        </Container>
    );
};
