import {
  Container,
  // Heading
} from 'mabrg-ui';
import React from 'react';
import { AuthenticationCheck } from '../../atoms';
import { NewQuestionComponent } from '../../components';

const NewQuestionPage = (props: { id?: string }) => (
  <Container>
    <AuthenticationCheck />
    <NewQuestionComponent />
  </Container>
);

export default NewQuestionPage;
