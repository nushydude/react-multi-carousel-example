import React from "react";
import ProductMarketingCarousel from "./components/ProductMarketingCarousel";

function App() {
  return (
    <ProductMarketingCarousel
      content={{
        component: {
          heading:
            "You can choose from a range of different finishes to suit your needs.",
          content: [
            {
              heading: "Gloss Paper ",
              description:
                "Gloss paper is ideal for giving your presentation a professional finish.",
              image: {
                image:
                  "https://appsvc01-pcc-public-t-app-01.s3-ap-southeast-2.amazonaws.com/images/products/documents-and-handouts/document-prints/carousel/CAR_DOCPRINT.jpg",
                altText: "Gloss Paper ",
              },
            },
            {
              heading: "Coloured Paper",
              description:
                "Coloured paper can help your black and white document to stand out and attract attention.",
              image: {
                image:
                  "https://appsvc01-pcc-public-t-app-01.s3-ap-southeast-2.amazonaws.com/images/products/documents-and-handouts/document-prints/carousel/CAR_DOCPRINT_B.jpg",
                altText: "Coloured Paper",
              },
            },
            {
              heading: "Coloured Parchment",
              description:
                "Coloured parchment creates elegant prints with a subtle coloured parchment pattern.",
              image: {
                image:
                  "https://appsvc01-pcc-public-t-app-01.s3-ap-southeast-2.amazonaws.com/images/products/documents-and-handouts/document-prints/carousel/CAR_DOCPRINT_D.jpg",
                altText: "Coloured Parchment",
              },
            },
            {
              heading: "Nevertear Paper",
              description:
                "For added durability, you can choose Nevertear paper for its water, oil and grease resistance.",
              image: {
                image:
                  "https://appsvc01-pcc-public-t-app-01.s3-ap-southeast-2.amazonaws.com/images/products/documents-and-handouts/document-prints/carousel/CAR_DOCPRINT_C.jpg",
                altText: "Nevertear Paper",
              },
            },
          ],
        },
      }}
    />
  );
}

export default App;
