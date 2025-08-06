// app/refund-policy/page.tsx

import Link from "next/link";
import { getSEOTags } from "@/lib/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Refund Policy | ${config.appName}`,
  canonicalUrlRelative: "/refund-policy",
});

const RefundPolicy = () => {
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

      <h1 className="text-3xl font-extrabold mb-6">Refund Policy</h1>

      <div className="prose max-w-none">
        <p><strong>Last Updated:</strong> August 6, 2025</p>

        <p>
          At TradersAlgoPro, all purchases are <strong>final and non-refundable</strong>. This includes:
        </p>

        <ul>
          <li>Monthly and yearly subscriptions</li>
          <li>Quantis™ one-time and lifetime access purchases</li>
          <li>Any upgrades, add-ons, or downloadable content</li>
        </ul>

        <p>
          Due to the instant nature of digital access to proprietary software, educational materials, stock alerts, and analytics tools, we do not offer refunds under any circumstances. By purchasing, you acknowledge and agree to this policy.
        </p>

        <p>
          We encourage all users to carefully review available documentation, demos, and pricing details before purchasing.
        </p>

        <p>
          For additional questions, contact us at:
          <br />
          <strong>Email:</strong> {config.resend?.supportEmail || "support@tradersalgopro.com"}
        </p>
      </div>
    </main>
  );
};

export default RefundPolicy;
