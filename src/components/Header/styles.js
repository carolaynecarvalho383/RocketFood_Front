import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.COLORS.SECONDARY_BG};
  display: flex;
  flex-direction: column;
  align-items:  center;
  padding: 0 2rem;
  gap: 1rem;
 
  
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
 

 >button{
    max-width: max-content;
    padding: 1rem;
  
  }


`