import styled from "styled-components";

export const FooterHomeContainer = styled.footer<{open: boolean}>`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme['gray-900']};
    border-top: 1px solid ${props => props.theme['white']};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    color: ${props => props.theme['white']};
    padding: 1rem;  
    text-align: center;
    position: fixed;
    width: 100%;
    bottom: 0;
    overflow: hidden;

    .buttonsChoise{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }


    @media only screen and (max-width: 600px) {
        height: ${(props) => (props.open ? '14rem': '4rem')};
        transition: height 0.5s ease;
        overflow: hidden;

        h1 {
            margin-top: 5px;
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 10px;
        }

        h2 {
            font-size: 1rem;
            font-weight: 700;
            color: ${props => props.theme['gray-700']};
            line-height: 1.5;
            font-family: 'Inter', sans-serif
        }
    }
`;

export const ButtonOpenFooter = styled.button`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    min-width: 30px;
    min-height: 30px;
    border-radius: 50%;
    color: ${props => props.theme['white']};
    margin-bottom: 10px;
`;

export const ButtonGoApps = styled.button`
    width: 10rem;
    height: 50px;
    background: ${(props) => props.theme['gold']};
    color: ${(props) => props.theme['gray-900']};
    border: 0;
    border-radius:9px;
`;

export const ButtonGoForm = styled.button`
    width: 10rem;
    height: 50px;
    background: ${(props) => props.theme['green']};
    color: ${(props) => props.theme['gray-900']};
    border: 0;
    border-radius:9px;
`;