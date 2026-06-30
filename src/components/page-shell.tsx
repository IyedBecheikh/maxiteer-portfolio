import Link from "next/link";
import type { ReactNode } from "react";

import {
  footerLinks,
  navigationLinks,
  playDeveloperUrl,
  supportEmail,
} from "@/lib/site";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="siteFrame">
      <header className="siteHeader">
        <div className="container headerInner">
          <Link href="/" className="brandMark">
            <span>Becheikh Software</span>
            <small>Maxiteer apps by Iyed Becheikh</small>
          </Link>
          <nav aria-label="Primary">
            <ul className="navList">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="siteFooter">
        <div className="container footerGrid">
          <div>
            <h2>Becheikh Software</h2>
            <p>
              Independent software products by Iyed Becheikh. Apps published
              under the Maxiteer developer name.
            </p>
            <p>
              Support: <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="footerLinks">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="footerAside">
            <p>Google Play developer profile</p>
            <a href={playDeveloperUrl} target="_blank" rel="noreferrer">
              View Maxiteer on Google Play
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
