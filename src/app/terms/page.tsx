import type { Metadata } from "next";

import { PolicyPage } from "@/components/policy-page";
import { lastUpdated, supportEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service | Maxiteer",
  description:
    "Terms of Service for findlogisticsjobs.com and Maxiteer digital software products.",
};

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms of Service"
      intro={
        <>
          <p>Last updated: {lastUpdated}</p>
          <p>
            These Terms of Service apply to the website findlogisticsjobs.com
            and digital software products offered by Iyed Becheikh under the
            Maxiteer developer name.
          </p>
          <p>
            By using this website or purchasing a product, you agree to these
            terms.
          </p>
        </>
      }
      sections={[
        {
          title: "Products",
          body: (
            <p>
              Maxiteer offers digital software products, Android utility apps,
              and digital software support licenses. Products are delivered
              digitally only. No physical goods are sold through this website.
            </p>
          ),
        },
        {
          title: "Supporter License",
          body: (
            <>
              <p>
                The Maxiteer Apps Supporter License is a one-time digital
                software support license. It helps support maintenance, bug
                fixes, updates, and future development of Maxiteer apps.
              </p>
              <p>
                The supporter license does not automatically unlock additional
                features inside Google Play apps unless explicitly stated on a
                specific product page.
              </p>
            </>
          ),
        },
        {
          title: "Google Play Apps",
          body: (
            <p>
              Some Maxiteer apps are distributed through Google Play.
              Purchases, downloads, refunds, and subscriptions made through
              Google Play are handled by Google Play and are subject to Google
              Play&apos;s terms and policies.
            </p>
          ),
        },
        {
          title: "License",
          body: (
            <p>
              Purchases grant a personal, non-transferable license to use the
              purchased digital product or supporter license. You may not
              resell, redistribute, copy, or reverse engineer the products.
            </p>
          ),
        },
        {
          title: "Payments",
          body: (
            <p>
              Payments made through this website may be processed by Paddle or
              another payment provider. The payment provider may handle payment
              processing, taxes, invoices, and transaction-related support.
            </p>
          ),
        },
        {
          title: "Refunds",
          body: (
            <p>
              Refunds are handled according to the Refund Policy available at
              /refund-policy.
            </p>
          ),
        },
        {
          title: "No Guarantees",
          body: (
            <p>
              The website and products are provided as-is. I aim to maintain
              and improve the apps, but I do not guarantee uninterrupted
              availability, specific future features, or compatibility with
              every device.
            </p>
          ),
        },
        {
          title: "Contact",
          body: (
            <p>
              For support or questions, contact:{" "}
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            </p>
          ),
        },
      ]}
    />
  );
}
