import styled from "styled-components";

export const Container = styled.div`
   display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  >main{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    @media (min-width: 768px) {
      flex-direction: row;
      padding: 3.4rem 15rem 15rem 13rem;
      gap: 7.5rem;
      justify-content: center;

    }
    >section{
      display: flex;
       flex-direction: column;
      align-items: flex-start;
      padding: 1rem;
      @media (min-width: 768px) {
        padding:initial;
      }
      >h2{
        align-items: flex-start;
        margin: 0;
      }
      
      >ul li{
      padding: 1.6rem 0;
      }

    }
  }

`


export const StatusContainer = styled.div`



`

export const TaBRequestItem = styled.div`
 display: flex;
  align-items: center;
  gap: 1.3rem;

  >img{
  width: 8rem;
  height: 8rem;
  }
  p{
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.2rem;
    color: ${({ theme})=> theme.COLORS.WHITE_300};
    
    >small{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.9rem;
      color: ${({theme})=> theme.COLORS.TEXT_SECONDARY_COLOR};
    }
  }



`