import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  margin-top: 1rem;
  width: 28rem;
  height: 40rem;
  padding: 4rem;
  background-color: red;
  
  >.favorite{
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
  }
  >.purchases{
    display: flex;
    align-items: center;
    gap: 1.1rem;
    >svg{
      cursor: pointer;
    }
    >button{
      width: 9.2rem;
    }
  }

`