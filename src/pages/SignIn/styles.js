import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  >section{
    background: ${({ theme})=> theme.COLORS.SECONDARY_BG};
    padding:  2rem 2rem 6.4rem 2rem;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;
  margin-top: 3.2rem;
  
`

