import styled from 'styled-components';

export const DefaultWrapper = styled.div`
  width: 100%;

  ${({ theme, border }) =>
    border &&
    `
    border-radius: 5px;
    border-top: 1px solid ${theme.colors.border};
    border-left: 1px solid ${theme.colors.border};
    border-right: 1px solid ${theme.colors.border};
    box-shadow: 0px 1px 4px ${theme.colors.border};
  `};

  ${({ theme, margin }) => margin && `margin: ${theme.sizes[margin]}`};
  ${({ theme, mTop }) => mTop && `margin-top: ${theme.sizes[mTop]}`};
  ${({ theme, mBottom }) =>
    mBottom && `margin-bottom: ${theme.sizes[mBottom]}`};
  ${({ theme, mLeft }) => mLeft && `margin-left: ${theme.sizes[mLeft]}`};
  ${({ theme, mRight }) => mRight && `margin-right: ${theme.sizes[mRight]}`};
  ${({ theme, padding }) => padding && `padding: ${theme.sizes[padding]}`};
  ${({ theme, pTop }) => pTop && `padding-top: ${theme.sizes[pTop]}`};
  ${({ theme, pBottom }) =>
    pBottom && `padding-bottom: ${theme.sizes[pBottom]}`};
  ${({ theme, pLeft }) => pLeft && `padding-left: ${theme.sizes[pLeft]}`};
  ${({ theme, pRight }) => pRight && `padding-right: ${theme.sizes[pRight]}`};
  ${({ theme, center, width }) =>
    center &&
    `
    margin-left: auto;
    margin-right: auto;
    max-width: ${
      width ? theme.sizes.wrappers[width] : theme.sizes.wrappers['regular']
    };
  `};
  ${({ flex }) => flex && `display: flex;`};
  ${({ align }) => align && `flex-direction: ${align}`};
  ${({ contentCentered }) =>
    contentCentered &&
    `
      display: flex;
      justify-content: center;
    `};
  ${({ stretch }) => stretch && `min-height: 100vh;`};
`;

const Wrapper = styled.div`
  background: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.background};

  ${({ theme, border }) =>
    border &&
    `
    border-radius: 5px;
    border-top: 1px solid ${theme.colors.border};
    border-left: 1px solid ${theme.colors.border};
    border-right: 1px solid ${theme.colors.border};
    box-shadow: 0px 1px 4px ${theme.colors.border};
  `};

  width: 100%;
  ${({ theme, margin }) => margin && `margin: ${theme.sizes[margin]}`};
  ${({ theme, mTop }) => mTop && `margin-top: ${theme.sizes[mTop]}`};
  ${({ theme, mBottom }) =>
    mBottom && `margin-bottom: ${theme.sizes[mBottom]}`};
  ${({ theme, mLeft }) => mLeft && `margin-left: ${theme.sizes[mLeft]}`};
  ${({ theme, mRight }) => mRight && `margin-right: ${theme.sizes[mRight]}`};
  ${({ theme, padding }) => padding && `padding: ${theme.sizes[padding]}`};
  ${({ theme, pTop }) => pTop && `padding-top: ${theme.sizes[pTop]}`};
  ${({ theme, pBottom }) =>
    pBottom && `padding-bottom: ${theme.sizes[pBottom]}`};
  ${({ theme, pLeft }) => pLeft && `padding-left: ${theme.sizes[pLeft]}`};
  ${({ theme, pRight }) => pRight && `padding-right: ${theme.sizes[pRight]}`};
  ${({ theme, center, width }) =>
    center &&
    `
    margin-left: auto;
    margin-right: auto;
    max-width: ${
      width ? theme.sizes.wrappers[width] : theme.sizes.wrappers['regular']
    };
  `};
  ${({ flex }) => flex && `display: flex;`};
  ${({ align }) => align && `flex-direction: ${align}`};
  ${({ contentCentered }) =>
    contentCentered &&
    `
      display: flex;
      justify-content: center;
    `};
  ${({ stretch }) => stretch && `min-height: 100vh;`};
`;

export default Wrapper;
