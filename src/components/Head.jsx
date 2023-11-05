import React from "react";
import { useContext } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { ThemeContext } from "../context/ThemeProvider";
import { useLanguage } from "../context/LanguageProvider";
import styled from "styled-components";

const Head = () => {
  const { isDark, dispatch } = useContext(ThemeContext);
  const { currentLang, dispatchLang } = useLanguage();

  return (
    <Header>
      <Heading>{currentLang.title}</Heading>
      <ButtonContainer>
        <Switch onClick={() => dispatch({ type: "toggleTheme" })}>
          {isDark ? <BiSun /> : <BiMoon />}
        </Switch>
        <LenguageBtn>
          <RusLenguage
            onClick={() => dispatchLang({ type: "SWITCH", payload: "ru" })}
          >
            RU
          </RusLenguage>
          <EnsLenguage
            onClick={() => dispatchLang({ type: "SWITCH", payload: "en" })}
          >
            EN
          </EnsLenguage>
        </LenguageBtn>
      </ButtonContainer>
    </Header>
  );
};

export default Head;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  align-items: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 3rem;
`;
const LenguageBtn = styled.div`
  display: flex;
  gap: 1rem;
`;
const Heading = styled.h1`
  font-size: 3rem;
  color: #4141ad;
`;
const Switch = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: #f0ebf9;
  border: none;
  border-radius: 20%;
  color: #4608ad;
  font-size: 2rem;
  &:active {
    background-color: #4608ad;
    color: #f0ebf9;
  }
`;
const RusLenguage = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: #4608ad;
  border: none;
  border-radius: 20%;
  color: #f0ebf9;
  font-size: 1rem;
  &:active {
    background-color: #f0ebf9;
    color: #4608ad;
  }
`;

const EnsLenguage = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: #4608ad;
  border: none;
  border-radius: 20%;
  color: #f0ebf9;
  font-size: 1rem;
  &:active {
    background-color: #f0ebf9;
    color: #4608ad;
  }
`;
