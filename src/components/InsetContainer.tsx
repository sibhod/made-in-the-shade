import styled from 'styled-components';

export const InsetContainer = styled.div<{ inset?: string }>`
  position: absolute;
  inset: ${({ inset }) => inset ?? 0};
`;

export const InsetFlexContainer = styled(InsetContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
