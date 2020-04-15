import styled from 'styled-components';

export const StyledLink = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

export const NoResultsWrapper = styled.div`
  display: grid;
  ${StyledButton} {
    margin-top: ${({ theme }) => theme.sizes.regular};
    justify-self: center;
  }
`;
