import React from 'react';
import { storiesOf } from '../helpers/storiesOf';

import { Appbar } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Appbar', module).add('Appbar', () => (
  <Container>
    <Header title={'Appbar'} />
    <Appbar title={'Page Title'} />
    <Appbar
      title={'Page Title'}
      style={{ marginTop: 20 }}
      hasMenuButton={false}
    />
    <Appbar title={'Page Title'} style={{ marginTop: 20 }} isSearch={true} />
  </Container>
));