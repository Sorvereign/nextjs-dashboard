import styled, { css } from 'styled-components';
// import { StyledIcon } from '../Icon/styles'

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  background: ${({ light, theme }) =>
    light ? theme.colors.light : theme.colors.flatRed};
  color: ${({ light, theme }) =>
    light ? theme.colors.light : theme.colors.light};
  padding: 0.6em 1em;
  font-family: ${({ theme }) => theme.fonts.families.sourceSans};
  font-size: ${({ theme }) => theme.fonts.sizes.default};
  border: solid 1px
    ${({ light, theme }) => (light ? theme.colors.light : theme.colors.flatRed)};
  border-radius: 1px;
  cursor: ${({ isLoading }) => (isLoading ? 'wait' : 'pointer')};
  outline: none;
  opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};

  &:hover {
    background: ${({ light, theme }) =>
      light ? theme.colors.accentLight : theme.colors.accentDark};
  }

  ${({ transparent, theme }) =>
    transparent &&
    `
      padding: 0;
      background: transparent;
      &:hover {
        background: transparent;
      }
    `};

  ${({ bordered, theme }) =>
    bordered &&
    css`
      background: ${theme.colors.alphaDark};
      color: ${theme.colors.alphaBrown};
      border-color: ${theme.colors.gray};

      &:hover {
        background: ${theme.colors.semiGray};
        border-color: ${theme.colors.gray};
      }
    `};

  &[disabled] {
    opacity: 0.4;
    cursor: default;
  }

  ${({ center }) =>
    center &&
    `	margin-left: 135px;
  `};

  ${({ mTop }) =>
    mTop &&
    `	margin-top: 10px;
   `};
`;
