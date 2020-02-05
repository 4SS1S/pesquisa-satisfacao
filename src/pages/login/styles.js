import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,#32426b,#ca3538);
    align: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    padding: 25px;

    * {
        width: 80%;
        background-color: #f7f7f7;
        outline: none;
        border: none;
        padding: .375rem .75rem;
        display: block;
        border-radius: .25rem;
    }

    input {
        border: 1px solid #ced4da;
        margin: 5px 15px;
    }

    button{
        background-color: #28a745;
        color: #fff;
        font-weight: bold;
    }
`;