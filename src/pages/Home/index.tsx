import smartphoneBuildingImg from '../../assets/home.png'
import FooterHome from '../../components/FooterHome'
import { HomeContainer } from './styles'

export default function Home() {
    return (
        <HomeContainer>
            <img src={smartphoneBuildingImg} alt="Imagem que representa um app sendo construido." />
            <FooterHome />
        </HomeContainer>
    )
}