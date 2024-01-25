import styled from "styled-components";

export const AboutContainer = styled.main`
    margin: 1rem 2rem 4rem;
    text-align: justify;

    strong {
        color: ${props => props.theme['gold']};
    }
    
    h1 {
        margin-bottom: 2rem;
    }
`; 