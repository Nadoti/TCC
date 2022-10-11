import styled from "styled-components";


export const Container = styled.section`
  max-width: 900px;
  margin: 200px auto auto auto;


`

export const Content = styled.div`
  width: 100%;

`

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  
  div {
    width: 100%;
    border: 1px solid #CCD0CD;
    height: 200px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
    padding: 10px;
    transition: all .3s ease;

    &:first-child {
      background: #EDF1EE;
    }

    &:hover {
      background: #EDF1EE;

      svg {
        scale: 1.1;
      }
    }

    span {
      margin-bottom: 40px;

      svg {
        color: red;
      }
    }

    h4 {
      font-size: 16px;
      font-family: monospace;
    }

    &.ativo::after {
      content: '';
      display: block;
      width: 100%;
      height: 3px;
      background: red;
      position: absolute;
      bottom: 0;
    }
  }
`


export const ResultOptions = styled.div`
  background: #EDF1EE;
  width: 100%;
  height: 600px;

  div {
    padding: 90px;

    h5 {
      font-size: 2.25rem;
      color: #707371;
      font-family: Arial, Helvetica, sans-serif;
    }

    p {
      font-size: 21px;
      margin-top: 20px;
      color: #969997;
      line-height: 1.7;
    }
  }

`