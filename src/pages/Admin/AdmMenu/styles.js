import styled from "styled-components";

export const Container = styled.div`




`


export const ImageProduct = styled.label`
 >label{
  display: flex;
  align-items: center;
  gap: 2rem;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  padding: .7rem;
  font-size: 1.4rem;
  cursor: pointer;
 }
 >span{
  font-size: 1.4rem;
 }


`

export const Form = styled.form`

>div .ingredients{
  width: 100%;
  border: 1px solid ${({ theme })=> theme.COLORS.WHITE};
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  @media (min-width:768px) {
    flex-direction: row;

  }
}


`
