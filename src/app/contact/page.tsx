import type { Metadata } from "next";

import { supportEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Maxiteer",
  description:
    "Contact information for app support, payment questions, and refund requests.",
};

const supportChecklist = [
  "App name",
  "Device model",
  "Android version",
  "What happened",
  "Screenshot or screen recording if useful",
];

export default function ContactPage() {
  return (
    <section className="container contactPage">
      <div className="pageIntro">
        <h1>Contact</h1>
        <p>
          For app support, product questions, payment questions, or refund
          requests, contact:
        </p>
        <p className="contactEmail">
          <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
        </p>
      </div>

      <div className="secondaryPanel">
        <h2>For app support, please include:</h2>
        <ul className="bulletList">
          {supportChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
