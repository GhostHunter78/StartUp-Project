import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <>
      <Title>Award-winning custom designs and digital branding solutions</Title>
      <Description>
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </Description>
    </>
  );
}

export default App;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 600px;
`;

const Description = styled.p`
  font-size: 15px;
  font-weight: 400px;
`;
