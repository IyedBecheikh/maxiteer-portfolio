export const siteUrl = "https://findlogisticsjobs.com";
export const playDeveloperUrl =
  "https://play.google.com/store/apps/dev?id=7968531320746201492";
export const supportEmail = "becheikh.iyed@gmail.com";
export const lastUpdated = "June 30, 2026";

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/#apps", label: "Apps" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/contact", label: "Contact" },
  { href: playDeveloperUrl, label: "Google Play", external: true },
];

export type AppEntry = {
  name: string;
  description: string;
  badge: string;
  href: string;
  icon: string;
};

export const apps: AppEntry[] = [
  {
    name: "Bill Reminder & Tracker",
    description:
      "A simple app for tracking bills, due dates, recurring payments, and reminders.",
    badge: "Reminder",
    href: "https://play.google.com/store/apps/details?id=com.billtracker.app",
    icon: "https://play-lh.googleusercontent.com/DwknqQTO1hm6LBRKhj_Bj_aCsqGWIPmXPHBlKLvVgzWpr5yKxnCY32TMWkYYCfjYB-JkLgRUc6JyFnVZVy8Y=s256-rw",
  },
  {
    name: "Simple Expense Tracker",
    description:
      "A lightweight expense tracker for recording spending, categories, payment methods, and basic personal finance activity.",
    badge: "Expense Tracking",
    href: "https://play.google.com/store/apps/details?id=com.maxiteer.expensetracker",
    icon: "https://play-lh.googleusercontent.com/fCQ0bs36JI5Z5rYuC4rbKCugbUqKu7t4uKEcOlbc4NodM0_9soyyVxpSI3GIf3oJsZj8G6_UlYFKrOOMknqm=s256-rw",
  },
  {
    name: "Subscription Reminder",
    description:
      "A simple subscription tracker for renewal dates, recurring payments, monthly costs, and upcoming reminders.",
    badge: "Subscriptions",
    href: "https://play.google.com/store/apps/details?id=com.subscriptionreminder.app",
    icon: "https://play-lh.googleusercontent.com/stvWueMX6czo-llpb64-_bZfA1ZIp3ZWQu6NPC6gS0bmHr-Cq7S7jKA9FJp4VE63TmgKF8ve4lTNhN3INDaScBA=s256-rw",
  },
  {
    name: "SwipeSweep: Photo Cleaner",
    description:
      "A utility app for reviewing and cleaning unwanted photos from your device.",
    badge: "Photo Utility",
    href: "https://play.google.com/store/apps/details?id=com.maxiteer.swipesweep",
    icon: "https://play-lh.googleusercontent.com/9EqmxlAAV-dXiETciDGRX1RN5UUXfkW53U32RQxQuv6GI3YMsmp-J28-e6iCxA6xVqR30E6rhhL5r7V01pACdw=s256-rw",
  },
  {
    name: "Sobriety Counter & Tracker",
    description:
      "A simple counter and tracker for sobriety milestones and personal progress.",
    badge: "Sobriety Tracking",
    href: "https://play.google.com/store/apps/details?id=com.sobriety_tracker.app",
    icon: "https://play-lh.googleusercontent.com/wwBgrhznDgU2TwLFtnhX-nVjekMDn_B6_1xULJKqfm5Jnlrn8-xz50fa784uXj2J5mmjVsD2aOrUMmNZpKJJuw=s256-rw",
  },
  {
    name: "1RM Calculator & Strength Rank",
    description:
      "A fitness utility for estimating one-rep maxes and comparing strength levels.",
    badge: "Fitness",
    href: "https://play.google.com/store/apps/details?id=com.ironrank.app",
    icon: "https://play-lh.googleusercontent.com/HuSv4Na7Xm0jxE_9a2vYHccBZWpBUqxpuEIUdCWmwB2WAL9Ci264j1h0gdoadOmlYUQ63jxTGhUt9qmkfUTT=s256-rw",
  },
];

export const homeMetadata = {
  title: "Independent Software Products by Iyed Becheikh | Maxiteer",
  description:
    "Independent Android productivity and utility apps by Iyed Becheikh under the Maxiteer developer name. Apps for reminders, expenses, subscriptions, photo cleanup, sobriety tracking, and fitness calculations.",
};
