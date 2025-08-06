import Link from "next/link";
import { getSEOTags } from "@/lib/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Refund Policy | ${config.appName}`,
  canonicalUrlRelative: "/refund-policy",
});

const RefundPolicy = () => {
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
          Refund Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: ${new Date().toISOString().split("T")[0]}

At ${config.appName}, all sales are final.

Due to the immediate access to premium digital content, proprietary tools, exclusive alerts, training resources, and protected dashboards, we do not offer refunds under any circumstances — including but not limited to:

- Change of mind
- Lack of usage or engagement
- Misunderstanding of product features
- Inability to profit or generate returns

By purchasing any membership tier (monthly, annual, or lifetime), or any digital access to the ${config.appName} platform (including Quantis), you agree to this strict refund policy.

**Why No Refunds?**
This policy protects our platform from abuse and ensures all users receive secure, non-transferable access to digital services and educational materials. Once purchased, digital access is instant and cannot be undone.

**Chargeback Policy**
All chargebacks or payment disputes will be strongly contested. Evidence of digital access, logins, platform usage, and our visible refund policy will be provided to payment processors.

If you have any concerns or technical issues, we are happy to assist — but we do not offer refunds for digital access.

For help or support, contact us directly at: ${config.resend.supportEmail}

Thank you for understanding our position and respecting our terms.
`}
        </pre>
      </div>
    </main>
  );
};

export default RefundPolicy;
