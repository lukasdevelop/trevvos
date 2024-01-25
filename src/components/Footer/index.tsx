import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FooterContainer } from './styles';
import { NavLink } from 'react-router-dom';

export function Footer() {
    return (
        <FooterContainer>
            <h2>Contate-nos</h2>
            <p>E-mail: <NavLink target='_blank' to='mailto:contato@trevvos.com.br'>contato@trevvos.com.br</NavLink></p>
            <h2>Siga-nos</h2>
            <div>
                <NavLink target='_blank' to="https://instagram.com/trevvos">
                    <FontAwesomeIcon fontSize={21} icon={['fab', 'instagram']} />
                </NavLink>
                <NavLink target='_blank' to="https://linkedin.com/in/lucas-amaral-dev">
                    <FontAwesomeIcon fontSize={21} icon={['fab', 'linkedin']} />
                </NavLink>
                <NavLink target='_blank' to="https://github.com/lukasdevelop">
                    <FontAwesomeIcon fontSize={21} icon={['fab', 'github']} />
                </NavLink>
            </div>
            <h2>Links Úteis</h2>
            <div>
                <p><NavLink to="/privacy-politic">Politica de Privacidade</NavLink></p>
            </div>
            <h3>
                <p>Desde 2024 - Trevvos</p>
            </h3>
        </FooterContainer>
    )
}