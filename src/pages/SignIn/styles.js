import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  >section{
    background: ${({ theme})=> theme.COLORS.SECONDARY_BG};
  }
`

