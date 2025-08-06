// app/privacy-policy/page.tsx

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
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: 2025-08-06

Thank you for using TradersAlgoPro ("we," "us," or "our"). This Privacy Policy outlines how we collect, use, and protect your personal and non-personal information when you use our platform.

By accessing or using the platform, you agree to this Privacy Policy.

1. Information We Collect
- Name and Email: Used for login and support.
- Payment Info: Securely processed by Stripe, never stored on our servers.
- Cookies & IP: Used to improve user experience.

2. Purpose of Collection
- Account management
- Alert delivery (Power/Hustle/Quantis)
- Product improvement

3. Data Sharing
- No data is sold or shared with 3rd parties, except as required for payment processing or legal obligations.

4. Children's Privacy
- TradersAlgoPro is not intended for users under 13.

5. Changes
- We will notify users of material changes via email.

6. Contact Us
Email: support@tradersalgopro.com

Use of TradersAlgoPro implies acceptance of this policy.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
