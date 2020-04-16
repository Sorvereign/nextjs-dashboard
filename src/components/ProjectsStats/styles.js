import styled from 'styled-components';
import Text from '../Text';

export const Texts = styled.div`
  ${Text} {
    display: block;
    color: ${({ theme }) => theme.colors.darkFlatBlue};
    &:last-child {
      margin-top: ${({ theme }) => theme.sizes.tiny};
    }
  }
`;

export const StatsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 185px);
  justify-content: center;
  padding-bottom: 50px;
`;
