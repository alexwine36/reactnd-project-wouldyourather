import styled, { css } from '../../theme';

interface Props {
  column?: boolean;
}

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props: Props) =>
    props.column &&
    css`
      flex-direction: column;
    `};
`;

export default CenteredContainer;
