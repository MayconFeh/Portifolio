import { Container, Nav } from "./styles"

export const Header = () => {
    return (
        <Container>
            <h1>MayconFeh</h1>
            <Nav>
                <a href="">Home</a>
                <a href="">Sobre-Mim</a>
                <a href="">Projetos</a>
                <a href="">Contato</a>
            </Nav>
        </Container>
    )
}