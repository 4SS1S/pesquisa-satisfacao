import styled from 'styled-components';

export const Background = styled.div `
  width: 100%;
  height: 100%;
  min-width: 100%;
  max-height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* background: linear-gradient(45deg,#314270,#ca3437); */
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  overflow-y: scroll;

  *{
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  p {
    display: block;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    color: #ddd;
  }
`;

export const Button = styled.button `
  margin: 15px;
  -ms-flex: 0 0 22.%;
  flex: 0 0 22.%;
  max-width: 22.%;
  position: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  padding: 15px 5px;
  background-color: #ddd;
  border-radius: 5px;
  outline: none;
  border: none;
  flex-direction: column;

  img{
    width: 10%;
    display: block;
    padding: 0 15px;
  }
`;

export const Satisfacao = styled.div `
  width: 100%;
  height: 100%;
  min-width: 100%;
  max-height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(5px);
  background-color: rgba(49,66,112);
  z-index: 300;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  overflow-y: scroll;
  transition: .6s;

  * {
    font-weight: bold;
    display: block;
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
    display: flex;
    flex-direction: column;
    transition: .6s;
    visibility: visible;
    opacity: 1;
    height: auto; opacity: 1;
    transition: height 0ms 0ms, opacity 600ms 0ms;

    img {
      width: 20%;
    }

    .stars {
      width: 20%;
      filter: drop-shadow(0 0 4px #333);
    }
  }
`;