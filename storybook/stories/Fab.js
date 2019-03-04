import React from 'react';
import { storiesOf } from '../helpers/storiesOf';

import { Fab } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Fab', module).add('Fab', () => (
  <Container>
    <Header title={'Fab'} />

    <Fab />
  </Container>
));