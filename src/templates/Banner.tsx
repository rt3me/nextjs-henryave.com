import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Why not get in touch today to talk about possibilities?"
      subtitle="Email to start a conversation."
      button={
        <Link href="mailto:hello@henryave.com">
          <a>
            <Button>hello@henryave.com</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
