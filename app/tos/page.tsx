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
      <Link href="/" className="btn btn-ghost mb-4 inline-flex items-center">
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

      <h1 className="text-3xl font-extrabold mb-6">Terms of Service</h1>

      <div className="prose max-w-none">
        <p><strong>Last Updated:</strong> August 6, 2025</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the TradersAlgoPro platform (“Service”), you agree to be legally
          bound by these Terms of Service. If you do not agree to these terms, do not use the Service.
        </p>

        <h2>2. Services Provided</h2>
        <p>
          TradersAlgoPro provides stock scanning tools, educational materials, and trade alerts. All content is for informational and educational use only and does not constitute financial advice.
        </p>

        <h2>3. No Refund Policy</h2>
        <p>
          All purchases made on TradersAlgoPro are <strong>final and non-refundable</strong>, including:
        </p>
        <ul>
          <li>Monthly or yearly subscriptions</li>
          <li>One-time Quantis™ purchases</li>
          <li>Lifetime plans or upgrades</li>
        </ul>
        <p>
          Due to instant digital access to proprietary tools and education, we do <strong>not</strong> offer refunds under any circumstance. Please review plans carefully before purchasing.
        </p>

        <h2>4. Membership Access</h2>
        <p>
          You must maintain an active subscription to access features tied to your plan. We may revoke access if account misuse is detected (e.g. sharing credentials).
        </p>

        <h2>5. Disclaimer of Warranties</h2>
        <p>
          We provide no guarantees of financial performance, stock behavior, or trading success. Use all tools at your own risk. We do not offer investment advice.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          TradersAlgoPro is not liable for any losses, damages, or disruptions caused by use of the platform, including financial losses or technical failures.
        </p>

        <h2>7. Modifications</h2>
        <p>
          We may update these terms at any time. Continued use of the platform after updates indicates your agreement to the new terms.
        </p>

        <h2>8. Contact Information</h2>
        <p>
          Questions? Reach out to us:
          <br />
          <strong>Email:</strong>{" "}
          {config.resend?.supportEmail || "support@tradersalgopro.com"}
        </p>
      </div>
    </main>
  );
};

export default TermsOfService;
