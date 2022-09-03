import styled from 'styled-components'

export const Container = styled.div`
  display: flex; 
  align-items:center;
  background-color: ${({ theme, isNew }) => isNew ? "transparent" :theme.COLORS.GRAY_700};
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  border : ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.TEXT_COLOR}` : "none"};
  border-radius:1rem;
  padding-right: 1.6rem;
  width: 100%;
  
  > button{
    border: none;
    background: none;
  }
  > input{
    height:3.6rem;
    width: 100%;
    padding: 1.3rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color:transparent;
    border: none;
    &::placeholder{
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    }
  }
  .button-delete{
    color: ${({ theme }) => theme.COLORS.DARK_RED};
  }
  .button-add{
   color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

  }
`