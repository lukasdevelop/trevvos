import styled from "styled-components";

export const ContactContainer = styled.main`
    margin: 1rem 2rem 4rem;

    label {
        display: block;
        font-size: 1.1rem;
        margin-bottom: 0.2rem;
    }

    input, textarea, select {
        width: 100%;
        border: 0;
        background: ${props => props.theme['gray-800']};
        border-radius: 6px;
        color: ${props => props.theme['white']};
        padding: 0.5rem;
        margin-bottom: 1rem;

    }

    hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    button {
        background: ${props => props.theme['gold']};
        color: ${props => props.theme['gray-800']};
        padding: 0.5rem;
        width: 100%;
        border: 0;
        border-radius: 6px;
        margin-top: 2rem;
    }

    input, select {
        height: 2rem;
    }

    strong {
        color: ${props => props.theme['gold']};
    }
    
    h1 {
        margin-bottom: 2rem;
    }
`; 