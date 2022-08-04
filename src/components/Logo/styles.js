import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin: 1rem 0  0;
 >.icon{
   animation: rotateAnimation 1500ms linear infinite;
   color: ${({ theme }) => theme.COLORS.DARK_BLUE};
   fill: ${({ theme }) => theme.COLORS.DARK_BLUE};
   font-size: 5rem;
 }
 >.icon2{
   //animation: rotateAnimation 1500ms linear infinite;
   color: ${({ theme }) => theme.COLORS.DARK_BLUE};
   fill: ${({ theme }) => theme.COLORS.DARK_BLUE};
   font-size: 3rem;
 }
  > h1{
    color: ${({ theme }) => theme.COLORS.WHITE};
    
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 5rem;

  }

`