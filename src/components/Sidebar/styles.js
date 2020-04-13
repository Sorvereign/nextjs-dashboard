import styled from 'styled-components';

export const StyledSidebar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 70px;
  height: 100vh;
  text-decoration: none;
  color: black;
  background: ${({ theme }) => theme.colors.flatYellow};
  padding: ${({ theme }) => `${theme.sizes.large} ${theme.sizes.regular}`};
`;

/*
 *   ${StyledIcon} {
    fill: ${({ theme }) => theme.colors.light};
    margin-bottom: 6px;
  }

 * */

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
