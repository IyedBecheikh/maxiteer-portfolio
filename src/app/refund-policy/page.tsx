import type { Metadata } from "next";

import { PolicyPage } from "@/components/policy-page";
import { lastUpdated, supportEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy | Maxiteer",
  description:
    "Refund Policy for purchases made through findlogisticsjobs.com.",
};

export default function RefundPolicyPage() {
  return (
    <PolicyPage
      title="Refund Policy"
      intro={
        <>
          <p>Last updated: {lastUpdated}</p>
          <p>
            This Refund Policy applies to purchases made through
            findlogisticsjobs.com.
          </p>
        </>
      }
      sections={[
        {
          title: "Paddle / Website Purchases",
          body: (
            <p>
              Purchases made through this website may be eligible for a refund
              within 14 days if the purchase was accidental, duplicated, or if
              you are unable to access the purchased digital product after
              contacting support.
            </p>
          ),
        },
        {
          title: "Non-Refundable Cases",
          body: (
            <p>
              Refunds may be refused in cases of abuse, repeated refund
              requests, or where the digital product or license has been
              delivered and used without a technical issue.
            </p>
          ),
        },
        {
          title: "Google Play Purchases",
          body: (
            <p>
              Purchases made through Google Play are handled by Google Play and
              must be refunded through Google Play&apos;s refund process. This
              website cannot directly refund Google Play purchases.
            </p>
          ),
        },
        {
          title: "How to Request a Refund",
          body: (
            <>
              <p>
                To request a refund for a website purchase, contact:{" "}
                <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
              </p>
              <p>Please include:</p>
              <ul className="bulletList">
                <li>Purchase email</li>
                <li>Purchase date</li>
                <li>Product name</li>
                <li>Reason for the refund request</li>
              </ul>
            </>
          ),
        },
      ]}
    />
  );
}
