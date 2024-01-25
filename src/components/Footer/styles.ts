import styled from "styled-components";

export const FooterContainer = styled.footer`

    margin: 1rem;
    border-top: 1px solid ${props => props.theme['gold']};
    

    h2{
        margin-top: 1rem;
        margin-bottom: 0.3rem;
        color: ${props => props.theme['gold']};
        font-size: 1rem;
    }

    h3 {
        display: flex;
        margin-top: 1rem;
        justify-content: center;
        font-size: 0.9rem;
        font-weight: 400;

    }

    a {
        color: ${props => props.theme['white']};
        text-decoration: none;
    }

    div {
        display: flex;
        gap:1rem
    }
`;