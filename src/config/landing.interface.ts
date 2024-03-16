export interface LandingPageData {
  meta: Meta;
  headerData: HeaderData;
  heroData: HeroData;
  aboutData: AboutData;
  servicesData: ServicesData;
  brandsData: BrandsData;
  pricingData: PricingData;
  footerData: FooterData;
}

export interface HeaderData {
  logo: string;
  links: Link[];
}

export interface HeroData {
  title: string;
  subTitle: string;
  primaryCta: string;
  secondaryCta: string;
  highlightedTitle: string;
}

export interface AboutData {
  title: string;
  about: About[];
}

export interface About {
  title: string;
  icon: string;
  description: string;
}

export interface ServicesData {
  title: string;
  services: Service[];
}

export interface Service {
  title: string;
  description: string;
  img: string;
  imageAlt: string;
  checks: string[];
}

export interface FooterData {
  logo: string;
  description: string;
  links: Link[];
  socials: Social[];
}

export interface Link {
  label: string;
  href: string;
}

export interface Social {
  icon: string;
  href: string;
}

export interface BrandsData {
  title: string;
  description: string;
  brands: Brand[];
}

export interface Brand {
  label: string;
  icon: string;
  href: string;
}

export interface PricingData {
  title: string;
  tiers: Tier[];
}

export interface Tier {
  title: string;
  description: string;
  price: Price;
  features: string[];
  cta: string;
}

export interface Price {
  amount: string;
  period?: string;
}

export interface Meta {
  title: string;
  description: string;
  lang: string;
  charset: string;
  ldJson: LdJson;
}

export interface LdJson {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  logo: string;
  contactPoint: {
    "@type": string;
    email: string;
    contactType: string;
  };
  sameAs: string[];
}

export type Icon =
  | "DevIcon"
  | "FileIcon"
  | "PlanetIcon"
  | "ConfigIcon"
  | "CheckIcon"
  | "InstagramIcon"
  | "GithubIcon"
  | "TwitterIcon"
  | "FacebookIcon"
  | "ReactIcon"
  | "SvelteIcon"
  | "SolidIcon"
  | "VueIcon"
  | "VercelIcon"
  | "NetlifyIcon";
