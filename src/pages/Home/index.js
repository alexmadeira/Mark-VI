import React from 'react';

import Banner from '../../components/Banner';
import Projects from '../../components/Projects';

import { Container, Crooked } from './styles';

export default function Home() {
  return (
    <Container>
      <Banner />
      <Crooked>
        <Projects limit={6} order="asc" simple />
      </Crooked>
    </Container>
  );
}
