import styled from "styled-components";
import "./App.css";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Nav from "./components/Nav";

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &::after {
    content: "";
    background-image: url("/images/home-background.png");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`;

function App() {
  return (
    <Container>
      <Nav />
      <Banner />
      <Category />
    </Container>
  );
}

export default App;
