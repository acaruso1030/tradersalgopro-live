// app/terms-of-service/page.tsx

import Link from "next/link";
import { getSEOTags } from "@/lib/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Terms of Service | ${config.appName}`,
  canonicalUrlRelative: "/terms-of-service",
});

const TermsOfService = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <Link href="/" className="btn btn-ghost mb-4">
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
        Back
      </Link>

      <h1 className="text-3xl font-extrabold mb-6">Terms of Service</h1>

      <div className="prose max-w-none">
        <p>Last Updated: August 6, 2025</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the TradersAlgoPro platform (“Service”), you agree to be legally
          bound by these Terms of Service. If you do not agree to these terms, you may not access
          or use the Service.
        </p>

        <h2>2. Services Provided</h2>
        <p>
          TradersAlgoPro provides stock scanning tools, educational resources, and trade alert
          systems. This content is intended for informational and educational purposes only and
          does not constitute financial advice.
        </p>

        <h2>3. No Refund Policy</h2>
        <p>
          All purchases made on TradersAlgoPro are **final and non-refundable**, including but not
          limited to:
        </p>
        <ul>
          <li>Monthly or yearly subscriptions</li>
          <li>One-time Quantis™ purchases</li>
          <li>Lifetime plans or upgrades</li>
        </ul>
        <p>
          Due to the nature of instant digital access to proprietary software, educational content,
          and stock alerts, we do **not offer refunds** under any circumstances. Please review all
          plans carefully before purchasing.
        </p>

        <h2>4. Membership Access</h2>
        <p>
          You must maintain an active subscription to access the features associated with your plan.
          Access may be revoked for misuse, sharing login credentials, or violation of our rules.
        </p>

        <h2>5. Disclaimer of Warranties</h2>
        <p>
          TradersAlgoPro provides no guarantees of stock performance, trade success, or financial
          returns. You use all features at your own risk. We do not make investment recommendations.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          We are not liable for any loss or damage resulting from the use of the Service,
          including but not limited to trading losses, account restrictions, or business
          interruption.
        </p>

        <h2>7. Modifications</h2>
        <p>
          We reserve the right to update or change these terms at any time. Continued use of the
          Service after changes are made constitutes acceptance of the revised terms.
        </p>

        <h2>8. Contact Information</h2>
        <p>
          For questions, contact us at:
          <br />
          <strong>Email:</strong> {config.resend.supportEmail || "support@tradersalgopro.com"}
        </p>
      </div>
    </main>
  );
};

export default TermsOfService;
