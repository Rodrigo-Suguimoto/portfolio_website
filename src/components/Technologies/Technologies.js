import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { FaFigma } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus, urna eu maximus euismod, dui sem ornare est.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaFigma size="2.5rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Design tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
