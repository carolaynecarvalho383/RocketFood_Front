import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: 0;
  list-style: none;
  text-decoration: none;
  }
  :root{
  font-size: 62.5%;
  -webkit-font-smoothing: antialiased;
  }
  body{
  font-size: 1.6rem;
  }
  .sr-only {
  opacity: 0;
  width: 1px;
  height: 1px;
  position: absolute;
  margin: -1px;
  white-space: nowrap;
  overflow: hidden;
  border-width: 0;
  clip: rect(0, 0, 0, 0);
  }
  .hide{
  display: none;
  }


`