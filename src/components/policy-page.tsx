import type { ReactNode } from "react";

type PolicySection = {
  title: string;
  body: ReactNode;
};

type PolicyPageProps = {
  title: string;
  intro: ReactNode;
  sections: PolicySection[];
};

export function PolicyPage({ title, intro, sections }: PolicyPageProps) {
  return (
    <section className="container prosePage">
      <div className="pageIntro">
        <h1>{title}</h1>
        <div>{intro}</div>
      </div>
      <div className="policySections">
        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <div>{section.body}</div>
          </section>
        ))}
      </div>
    </section>
  );
}
