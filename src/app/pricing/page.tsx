import type { Metadata } from "next";

import { playDeveloperUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing | Maxiteer Apps Supporter License",
  description:
    "Pricing for the Maxiteer Apps Supporter License and links to Maxiteer apps on Google Play.",
};

const licenseBullets = [
  "One-time digital software support license",
  "Helps support the Maxiteer Android app portfolio",
  "Supports maintenance of apps such as Bill Reminder, Simple Expense Tracker, Subscription Reminder, SwipeSweep, Sobriety Counter, and 1RM Calculator",
  "No physical goods",
  "No subscription",
  "No account required",
  "Google Play app purchases remain separate",
];

export default function PricingPage() {
  return (
    <section className="container pricingPage">
      <div className="pageIntro">
        <h1>Pricing</h1>
        <p>
          Clear pricing for the digital product sold through this website.
        </p>
      </div>

      <div className="pricingCard">
        <p className="eyebrow">Supporter license</p>
        <h2>Maxiteer Apps Supporter License</h2>
        <p className="priceValue">$5 one-time</p>
        <p>
          A one-time digital software support license for Maxiteer&apos;s
          independent Android utility app portfolio. Purchasing this license
          helps fund maintenance, bug fixes, app updates, and future small
          utility app development.
        </p>

        <ul className="bulletList">
          {licenseBullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <p className="noticeBox">
          This supporter license is sold separately from Google Play. It does
          not unlock extra features inside Google Play apps unless a specific
          app or product page explicitly states otherwise. Purchases made on
          Google Play are handled through Google Play.
        </p>

        {/* TODO: Replace with Paddle checkout link after Paddle verification */}
        <a href="#" className="button buttonPrimary" aria-disabled="true">
          Buy Supporter License
        </a>
      </div>

      <div className="secondaryPanel">
        <h2>Prefer Google Play?</h2>
        <p>
          You can install or purchase individual Maxiteer apps directly from
          the Google Play Store.
        </p>
        <a
          href={playDeveloperUrl}
          className="button buttonSecondary"
          target="_blank"
          rel="noreferrer"
        >
          View Apps on Google Play
        </a>
      </div>
    </section>
  );
}
