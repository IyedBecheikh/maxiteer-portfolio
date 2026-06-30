import Image from "next/image";
import type { AppEntry } from "@/lib/site";

type AppCardProps = {
  app: AppEntry;
};

export function AppCard({ app }: AppCardProps) {
  return (
    <article className="appCard">
      <div className="appCardHeader">
        <Image
          src={app.icon}
          alt={`${app.name} icon`}
          className="appIcon"
          width={64}
          height={64}
        />
        <div>
          <span className="badge">{app.badge}</span>
          <h3>{app.name}</h3>
        </div>
      </div>
      <p>{app.description}</p>
      <a
        href={app.href}
        className="textLink"
        target="_blank"
        rel="noreferrer"
      >
        View on Google Play
      </a>
    </article>
  );
}
