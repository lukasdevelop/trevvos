import { useState } from "react";
import { ButtonGoApps, ButtonGoForm, ButtonOpenFooter, FooterHomeContainer } from "./styles";

export default function FooterHome() {
    const [openFooter, setOpenFooter] = useState(true)

    const toogleFooter = () => {
        setOpenFooter(!openFooter)
    }

    return (
        <FooterHomeContainer open={openFooter}>
            <ButtonOpenFooter onClick={toogleFooter} />
            <h1> The first step to change your luck</h1>
            <h2>Check out our apps or create your own, but always with the TREVVOS in your pocket</h2>
            <span className="buttonsChoise">
                <ButtonGoApps>Discover Our Apps</ButtonGoApps>
                <ButtonGoForm>Make Your Luck</ButtonGoForm>
            </span>
        </FooterHomeContainer>
    );
}