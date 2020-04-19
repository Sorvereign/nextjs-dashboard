import styled from 'styled-components';

export const StyledInput = styled.input`
  height: 2em;
  padding: 20px 70px 20px 150px;
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.fonts.families.sourceSans};
  font-size: ${({ theme }) => theme.fonts.sizes.regular};
  border: solid 1px ${({ theme }) => theme.colors.border};
  background: transparent;
  outline: none;
  border-radius: ${({ theme }) => theme.globals.radius};

  &[aria-invalid='true'] {
    border-color: ${({ theme }) => theme.colors.rose};
    color: ${({ theme }) => theme.colors.rose};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.flatYellow};
    box-shadow: 0px 1px 5px 0.1px ${({ theme }) => theme.colors.flatYellow};
  }
`;
