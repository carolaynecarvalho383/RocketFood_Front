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
  background-color: rgba(0, 0, 0, 0.32);
  
  border: 1px solid rgba(0, 0, 0, 0.65);
  border-radius: 8px;
  margin: 0 auto;
  >strong{
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 5.1rem;
  text-align: center;
  color: #82F3FF;
  }

  >.favorite{
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;
  }

  >.ingredient-container{
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

`

export const Purchases = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.1rem;
  >div:first-child{
    display: flex;
    align-items: center;
    gap: 1.1rem;
  cursor: pointer;
  }
  >svg{
      cursor: pointer;
  }
  >button{
      width: 9.2rem;
  }


`