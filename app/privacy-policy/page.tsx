/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { getSEOTags } from "@/lib/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-2">Back</span>
        </Link>

        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <div className="leading-relaxed whitespace-pre-wrap font-sans text-sm text-gray-800">
          <p><strong>Last Updated:</strong> August 6, 2025</p>

          <p className="mt-4">
            Thank you for using TradersAlgoPro ("we," "us," or "our"). This Privacy Policy outlines how we collect, use, and protect your personal and non-personal information when you use our platform.
          </p>

          <p className="mt-4">
            By accessing or using the platform, you agree to this Privacy Policy.
          </p>

          <h2 className="mt-6 font-bold">1. Information We Collect</h2>
          <ul className="list-disc list-inside">
            <li>Name and Email: Used for login and support.</li>
            <li>Payment Info: Securely processed by Stripe, never stored on our servers.</li>
            <li>Cookies &amp; IP: Used to improve user experience.</li>
          </ul>

          <h2 className="mt-6 font-bold">2. Purpose of Collection</h2>
          <ul className="list-disc list-inside">
            <li>Account management</li>
            <li>Alert delivery (Power/Hustle/Quantis)</li>
            <li>Product improvement</li>
          </ul>

          <h2 className="mt-6 font-bold">3. Data Sharing</h2>
          <p>
            No data is sold or shared with 3rd parties, except as required for payment processing or legal obligations.
          </p>

          <h2 className="mt-6 font-bold">4. Children's Privacy</h2>
          <p>
            TradersAlgoPro is not intended for users under 13.
          </p>

          <h2 className="mt-6 font-bold">5. Changes</h2>
          <p>
            We will notify users of material changes via email.
          </p>

          <h2 className="mt-6 font-bold">6. Contact Us</h2>
          <p>Email: support@tradersalgopro.com</p>

          <p className="mt-4">
            Use of TradersAlgoPro implies acceptance of this policy.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
