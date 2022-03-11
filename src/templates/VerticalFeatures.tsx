import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Our work"
    description="Take a look at a few of our favorite projects."
    id="portfolio"
  >
    <VerticalFeatureRow
      title="Four Sisters Closet"
      description="Four Sisters Closet is a women's clothing boutique operating exclusively online. They offer affordable clothing and accessories. Previously, the boutique shop used a free website provided by a credit card processor. The site was visually unappealing, performed slowly, and had poor SEO. Four Sisters Closet decided to ask Henry Avenue to build a new site on the Shopify platform."
      link="https://foursisterscloset.com"
      image="/assets/images/four-sisters-project-small.png"
      imageAlt="Four Sisters Closet website"
    />
    <VerticalFeatureRow
      title="Pamfa"
      description="Pamfa United Citizens is a designer brand that takes pride in creating clothes that allow a person to be truly expressive. With the decision to create a site that meets the Pamfa level of excellence, came the decision to work with Henry Avenue. This project resulted in an e-commerce site, powered by WordPress, WooCommerce, and Stripe."
      link="https://pamfa.com"
      image="/assets/images/pamfa-project-small.png"
      imageAlt="Pamfa website"
      reverse
    />
    <VerticalFeatureRow
      title="A Notary On the Go"
      description="A Notary On the Go is a notary public offering service to the San Diego area. Henry Avenue created a new WordPress website with a responsive theme adjusting for viewing on any screen size as well as an attractive aesthetic."
      link="https://anotaryonthego.henryave.com"
      image="/assets/images/notary-project-small.png"
      imageAlt="A Notary On the Go website"
    />
  </Section>
);

export { VerticalFeatures };
