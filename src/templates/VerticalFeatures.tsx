import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Our work"
    description="A few of our favorite projects."
    id="portfolio"
  >
    <VerticalFeatureRow
      title="A Notary On the Go"
      description="A Notary On the Go is a notary public offering service to the San Diego area. With the goal of creating a web presence that properly represents this quality small business, Henry Avenue was commissioned to create a new WordPress website with a responsive theme and an updated design."
      link="https://anotaryonthego.com"
      image="/assets/images/notary-project-small.png"
      imageAlt="A Notary On the Go website"
      reverse
    />
    <VerticalFeatureRow
      title="Four Sisters Closet"
      description="Four Sisters Closet is a fashion boutique offering affordable clothing and accessories with a direct to consumer business model. Previously, the boutique shop's previous site presented opportunities for improvement in aesthetic, accessibility, performance, and search engine optimization. Four Sisters Closet asked Henry Avenue to build a new site on the Shopify platform."
      link="https://foursisterscloset.com"
      image="/assets/images/four-sisters-project-small.png"
      imageAlt="Four Sisters Closet website"
    />
  </Section>
);

export { VerticalFeatures };
