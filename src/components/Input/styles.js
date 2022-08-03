import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap:1rem;
  color:${({ theme }) => theme.COLORS.TEXT_COLOR};
  width: 100%;
  >label{
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;

  }
  >input{
  background: transparent;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  padding: 12px 14px;
  color:${({ theme }) => theme.COLORS.WHITE};
    ::placeholder{
      color:${({ theme }) => theme.COLORS.TEXT_COLOR};
    }

  }


`