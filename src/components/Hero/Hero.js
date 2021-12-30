import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main>
        Hi, I'm Rodrigo! <br />
        Welcome to my Portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus, urna eu maximus euismod, dui sem ornare est.
      </SectionText>

      {/* The window.open is working fine, but it doesn't show the user in the browser which link he will be redirected */}
      <Button onClick={() => window.open('https://www.linkedin.com/in/rodrigosuguimoto/', "_blank")}> 
        Talk to me
      </Button>

    </LeftSection>
  </Section>
);

export default Hero;