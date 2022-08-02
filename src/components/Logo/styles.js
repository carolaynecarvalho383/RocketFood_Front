import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  > h1{
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

`