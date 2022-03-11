import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/#portfolio">
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/rt3me">
            <a>GitHub</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Modern web development\n'}
            <span className="text-primary-500">Henry Avenue</span>
          </>
        }
        description="Get in touch to find out how we can help you or take a look at some of our work below"
        button={
          <Link href="mailto:hello@henryave.com">
            <a>
              <Button xl>hello@henryave.com</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
