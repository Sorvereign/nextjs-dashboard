import styled from 'styled-components';
import Text from '../Text';

export const Texts = styled.div`
  ${Text} {
    display: block;
  
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.sizes.tiny} ${theme.sizes.regular}`};
`;
