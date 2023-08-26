import styled from 'styled-components';

export const StyledPanell = styled.div`
  background-color: ${({ theme }) => theme.colors.fonsPagina};
  padding: ${({ theme }) => theme.spacing.padding || '20px'};
  margin-top: ${({ theme }) => theme.spacing.margin};
  color: ${({ theme }) => theme.colors.textButton};
`;
