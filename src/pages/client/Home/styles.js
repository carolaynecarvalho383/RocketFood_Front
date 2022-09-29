import styled from "styled-components";

export const Container = styled.div`
  display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;

>.banner{
  background: url("../../assets/banner.svg");
}

`


export const Main = styled.main`
  padding: 1rem;
  text-align: center;
 @media (min-width: 768px) {
  margin-top: 13rem;
 }

`