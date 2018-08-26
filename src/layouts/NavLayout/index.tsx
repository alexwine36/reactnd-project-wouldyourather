import { transparentize } from 'polished';
import styled, { css } from '../../theme';

const NavCss = css`
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: center;
  text-transform: uppercase;
  padding-top: 0.625em;
  padding-bottom: 0.625em;
  padding-left: 1em;
  padding-right: 1em;
  font-family: ${props => props.theme.fonts!.button.fontFamily};
  letter-spacing: 0.078125em;
  font-size: 0.88875em;
  line-height: 1em;
  border-radius: 0.125em;
  font-weight: ${props => props.theme.fonts!.button.fontWeight};
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => props.theme.color!.primary};
  border: none;
  background-color: transparent;
  color: ${props => props.theme.color!.primary};
  box-shadow: none;
`;

const NavHover = css`
  box-shadow: none;
  background-color: ${props =>
    transparentize(0.75, props.theme.color!.primary)};
`;

const NavContainer = styled.div`
  display: inline-flex;
  & > a,
  & > button {
    ${NavCss};
  }
  & > a > span,
  & > button > span {
    color: ${props => props.theme.color!.primary};
  }
  & > a:hover,
  & > button:hover {
    ${NavHover};
  }
  & > a.active {
    ${NavHover};
  }
`;

export default NavContainer;
