import styled from '@emotion/styled';

export const Title = styled.div`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;   
  font-size: ${p => p.theme.space[5]}px;
  font-weight: font-weight: ${p => p.theme.fontweights.aboveNormal};
  text-align: left;
`;

export const Container = styled.div`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
`;