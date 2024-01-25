import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 600px) {
        //flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

    }
`;

export const Nav = styled.div<{ open: boolean }>`

  display: block;
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;   
        }

        li {
            margin-bottom: 0.9rem;
            opacity: 1;
            transform: translateY(0);
        }

        a {
          text-decoration: none;
          color: ${(props) => props.theme['white']};
          font-size: 1rem;

        }

  @media only screen and (max-width: 600px) {
    display: ${props => (props.open ? 'block' : 'none')};
    flex-direction: column;
    align-items: center;

    animation: fadeIn 0.5s ease;
    position: absolute;
    background: ${props => props.theme['gray-900']};
    width: 100%;

    ul {
      margin-top: 10px;
      align-items: center;
      border-bottom: 1px solid ${(props) => props.theme['gold']};
    }

    a {
      font-size: 1rem;
    }

  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 0;
      transform: translateY(0);
    }
  }
`;

export const MenuIcon = styled.div`
    display: none;
    cursor: pointer;
  
    @media only screen and (max-width: 600px) {
      display: block;
      cursor: pointer;

      span {
        display: block;
        height: 3px;
        width: 25px;
        margin: 5px 0;
        background-color: ${(props) => props.theme['gold']};
    } 
  }
`;

