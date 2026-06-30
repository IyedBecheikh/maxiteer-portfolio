import type { Metadata } from "next";

import { PolicyPage } from "@/components/policy-page";
import { lastUpdated, supportEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Maxiteer",
  description:
    "Privacy Policy for findlogisticsjobs.com and Maxiteer software products.",
};

export default function PrivacyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      intro={
        <>
          <p>Last updated: {lastUpdated}</p>
          <p>
            This Privacy Policy explains how information is handled by
            findlogisticsjobs.com and software products offered by Iyed
            Becheikh under the Maxiteer developer name.
          </p>
        </>
      }
      sections={[
        {
          title: "Information Collected by the Website",
          body: (
            <p>
              The website may collect basic technical information such as
              browser type, device type, pages visited, referring pages,
              approximate location, and usage activity if analytics are
              enabled.
            </p>
          ),
        },
        {
          title: "Contact Information",
          body: (
            <p>
              If you contact support, I may receive your email address, message
              content, and any information you choose to provide, such as app
              name, device model, Android version, screenshots, or issue
              details.
            </p>
          ),
        },
        {
          title: "Payments",
          body: (
            <p>
              Payments made through this website may be processed by Paddle or
              another payment provider. I do not store full card numbers or
              sensitive payment details. Payment providers may collect
              information needed to process payments, issue invoices, handle
              taxes, and provide transaction support.
            </p>
          ),
        },
        {
          title: "App Data",
          body: (
            <p>
              Maxiteer apps are designed as simple utility apps. App data such
              as bills, expenses, subscriptions, counters, reminders, or
              fitness calculations is generally stored locally on the user&apos;s
              device unless a specific app states otherwise.
            </p>
          ),
        },
        {
          title: "Advertising and Analytics",
          body: (
            <p>
              Some free apps may use advertising or analytics services.
              App-specific privacy details are provided in each app&apos;s Google
              Play listing or privacy information.
            </p>
          ),
        },
        {
          title: "Data Sharing",
          body: (
            <p>
              I do not sell personal data. Information may be shared only when
              needed to provide support, process payments, comply with legal
              obligations, or operate website or app services.
            </p>
          ),
        },
        {
          title: "Data Retention",
          body: (
            <p>
              Support emails and transaction-related records may be retained as
              needed for support, accounting, legal, or fraud-prevention
              purposes.
            </p>
          ),
        },
        {
          title: "Contact",
          body: (
            <p>
              For privacy questions, contact:{" "}
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            </p>
          ),
        },
      ]}
    />
  );
}
