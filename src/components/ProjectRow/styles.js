import styled from 'styled-components';
import Text from '../Text';

export const Row = styled.div`
  background-color: ${({ isEven, theme }) =>
    isEven ? theme.colors.semiAccentLight : theme.colors.light};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentLight}
`;

export const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 100px;
`;

export const Texts = styled.div`
  display: grid;

  ${Text} {
    &:last-child {
      margin-top: ${({ theme }) => theme.sizes.tiny};
    }
  }
`;
