import themes from "daisyui/src/theming/themes";
import { ConfigProps } from "./types/config";

const config = {
  // REQUIRED
  appName: "TradersAlgoPro",

  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "TradersAlgoPro is your edge in the market — featuring real-time alerts, smart scanners, and performance tracking powered by Quantis™.",

  // REQUIRED (no https://, no trailing slash)
  domainName: "tradersalgopro.com",

  crisp: {
    id: "", // Leave empty if not using Crisp
    onlyShowOnRoutes: ["/"],
  },

  stripe: {
    plans: [
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1ExampleDevID"
            : "price_1ExampleLiveID",
        name: "Basic",
        description: "Access Power + Hustle Alerts and community.",
        price: 27.99,
        priceAnchor: 39,
        features: [
          { name: "Power + Hustle Alerts" },
          { name: "Training & Recaps" },
          { name: "T.A.P Stream + Feed" },
        ],
      },
      {
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1ExampleDevPremium"
            : "price_1ExampleLivePremium",
        name: "Quantis Full Access",
        description: "All alerts + live scanner + training",
        price: 499,
        priceAnchor: 799,
        features: [
          { name: "Everything in Basic" },
          { name: "Quantis Live Scanner" },
          { name: "Premium Support" },
        ],
      },
    ],
  },

  aws: {
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },

  resend: {
    fromNoReply: `TradersAlgoPro <noreply@tradersalgopro.com>`,
    fromAdmin: `Anthony at TradersAlgoPro <support@tradersalgopro.com>`,
    supportEmail: "support@tradersalgopro.com", // use your final support inbox
  },

  colors: {
    theme: "light", // can switch to dark if needed
    main: themes["light"]["primary"],
  },

  auth: {
    loginUrl: "/api/auth/signin",
    callbackUrl: "/dashboard",
  },
} as ConfigProps;

export default config;
