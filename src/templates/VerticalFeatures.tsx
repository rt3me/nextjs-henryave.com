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
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
