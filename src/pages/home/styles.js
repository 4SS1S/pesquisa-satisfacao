import styled from 'styled-components';

export const Background = styled.div `
  width: 100%;
  height: 100%;
  min-width: 100%;
  max-height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(45deg,#314270,#ca3437);
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
`;

export const Button = styled.button `
  margin: 15px;
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  position: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  padding: 15px;
  background-color: #dddd;
  border-radius: 5px;
  outline: none;
  border: none;
  flex-direction: column;

  img{
    width: 20%;
    display: block;
    padding: 0 20px;
  }
`;

export const Satisfacao = styled.div `
  width: 100%;
  height: 100%;
  min-width: 100%;
  max-height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(49,66,112, 0.5);
  box-shadow: 0 0 2px rgba(49,66,112,.5);
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

  * {
    font-weight: bold;
    display: block;
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
    display: flex;
    flex-direction: column;

    img {
      width: 20%;
    }
  }
`;