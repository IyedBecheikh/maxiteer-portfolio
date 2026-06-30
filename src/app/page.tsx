import type { Metadata } from "next";

import { AppCard } from "@/components/app-card";
import { apps, homeMetadata, playDeveloperUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: homeMetadata.title,
  description: homeMetadata.description,
};

export default function HomePage() {
  return (
    <>
      <section className="heroSection">
        <div className="container heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Independent software products by Iyed Becheikh</p>
            <h1>Simple Android productivity and utility apps built under the Maxiteer developer name.</h1>
            <p className="heroLead">
              Tools for reminders, expenses, subscriptions, photo cleanup,
              sobriety tracking, and strength calculations.
            </p>
            <div className="heroActions">
              <a
                href={playDeveloperUrl}
                className="button buttonPrimary"
                target="_blank"
                rel="noreferrer"
              >
                View Apps
              </a>
              <a href="/pricing" className="button buttonSecondary">
                Support Development
              </a>
            </div>
          </div>
          <aside className="heroPanel">
            <p className="eyebrow">Becheikh Software</p>
            <ul className="featureList">
              <li>Apps published under the Maxiteer developer name</li>
              <li>Clear pricing and policy pages for Paddle review</li>
              <li>Focused on practical Android utility software</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="apps" className="sectionBlock">
        <div className="container sectionHeader">
          <div>
            <p className="eyebrow">App portfolio</p>
            <h2>Current Android apps</h2>
          </div>
          <p>
            Available on Google Play through the Maxiteer developer profile.
          </p>
        </div>
        <div className="container appGrid">
          {apps.map((app) => (
            <AppCard key={app.href} app={app} />
          ))}
        </div>
      </section>

      <section className="sectionBlock supportSection">
        <div className="container splitPanel">
          <div>
            <p className="eyebrow">Support Maxiteer Apps</p>
            <h2>Support Maxiteer Apps</h2>
            <p>
              Buy a one-time supporter license to help fund maintenance, bug
              fixes, and future small utility app development.
            </p>
            <p className="mutedText">
              This is a separate digital software support license. It does not
              replace Google Play purchases and does not unlock extra in-app
              features unless explicitly stated.
            </p>
          </div>
          <div className="ctaPanel">
            <p className="priceLabel">$5 one-time</p>
            <a href="/pricing" className="button buttonSupport">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      <section className="sectionBlock">
        <div className="container comingSoon">
          <p className="eyebrow">Coming Soon</p>
          <h2>ContextGraph</h2>
          <p>
            ContextGraph is an upcoming local-first desktop tool for organizing
            AI-assisted software development workflows, project context,
            prompts, files, and task instructions.
          </p>
          <p className="mutedText">
            ContextGraph is not currently available for purchase.
          </p>
        </div>
      </section>
    </>
  );
}
