import React from 'react';
import PolarBear from '../../images/PolarBear.svg';
import styled from '../../theme';

const PageBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${PolarBear});
  background-position: center bottom;
  background-repeat: no-repeat;
`;

const NotFoundPage = () => {
  return <PageBackground />;
};

export default NotFoundPage;
