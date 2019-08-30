import React from 'react';

import Project from '../blocks/Project';

import { Container } from './styles';

export default function Projects() {
  return (
    <Container>
      <Project item="1" />
      <Project item="2" />
      <Project item="3" />
      <Project item="4" />
    </Container>
  );
}
