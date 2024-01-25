import { ContactContainer } from "./styles";

export function Contact() {
    return (
        <ContactContainer>
            <h1>Entre em Contato</h1>
            <form>
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" id="nome" required />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="telefone">Telefone</label>
                <input type="tel" id="telefone" name="telefone" />

                <hr />

                <label htmlFor="projeto">Nome do Projeto/App</label>
                <input type="text" id="projeto" name="projeto" required />

                <label htmlFor="descricao">Descrição do Projeto</label>
                <textarea id="descricao" name="descricao" rows={4} required></textarea>

                <label htmlFor="plataformas">Plataformas desejadas</label>
                <select id="plataformas" name="plataformas" required>
                    <option value="">Selecione</option>
                    <option value="ios">iOS</option>
                    <option value="android">Android</option>
                    <option value="browser">Web Site / Navegadores</option>
                    <option value="ambos">Android e iOS</option>
                </select>

                <button>Solicitar Orçamento</button>

            </form>

        </ContactContainer>
    )
}