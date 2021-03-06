import styled from 'styled-components';

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 230px;
  height: 100vh;
  border-radius: 5px;
  margin-left: 70px;
  padding-right: ${({ theme }) => theme.sizes.regular};
  padding-top: ${({ theme }) => theme.sizes.large};
  background: ${({ theme }) => theme.colors.brown};
`;
