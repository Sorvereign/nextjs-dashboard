import styled from 'styled-components';
import Text from '../Text';

export const StyledBlock = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  height: 90px;
  border-right: solid 1px ${({ theme }) => theme.colors.flatYellow};
  ${Text} {
    display: block;
    text-align: center;
    &:last-child {
      margin-top: ${({ theme }) => theme.sizes.tiny};
    }
  }
  &:last-child {
    border: none;
  }
`;
