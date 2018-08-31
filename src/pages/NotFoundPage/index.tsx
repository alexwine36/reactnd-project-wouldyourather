import React from 'react';
import PolarBear from '../../images/PolarBear.svg';
import styled from '../../theme';

const PageBackground = styled.div`
  background: white;
  width: fill-available;
  height: fill-available;
  background-image: url(${PolarBear});
  background-position: center bottom;
  background-repeat: no-repeat;
`;

const NotFoundPage = () => {
  return <PageBackground />;
};

export default NotFoundPage;
