import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Our work"
    description="A few of our favorite projects."
    id="portfolio"
  >
    <VerticalFeatureRow
      title="Pamfa"
      description="Pamfa United Citizens is a designer brand that takes pride in creating clothes that allow a person to be truly expressive. With the decision to create a site that meets the Pamfa level of excellence, came the decision to work with Henry Avenue. This project resulted in an e-commerce site, powered by WordPress, WooCommerce, and Stripe."
      link="https://pamfa.com"
      image="/assets/images/pamfa-project-small.png"
      imageAlt="Pamfa website"
    />
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
      description="Four Sisters Closet is a women's fashion boutique with a direct to consumer business model. They offer affordable clothing and accessories. Previously, the boutique shop used a free website provided by a credit card processor. The site presented opportunities for improvement in aesthetic, accessibility, performance, and search engine optimization. Four Sisters Closet decided to ask Henry Avenue to build a new site on the Shopify platform."
      link="https://foursisterscloset.com"
      image="/assets/images/four-sisters-project-small.png"
      imageAlt="Four Sisters Closet website"
    />
  </Section>
);

export { VerticalFeatures };
