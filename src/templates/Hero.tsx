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
            <a>Work</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/rt3me">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="https://codewithrob.dev">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="https://henry.host">
            <a>Hosting</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-primary-500">Henry Avenue</span>
            <br />
            {'Modern web development\n'}
          </>
        }
        description="Get in touch to talk about how we can work together or take a look at some of our work below"
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
