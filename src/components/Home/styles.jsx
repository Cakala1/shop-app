import { Link } from "react-router-dom"
import styled from "styled-components"

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
`

export const Hero = styled.main`
  background-image: url("/hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeroFade = styled.main`
  background-color: rgba(0, 0, 0, 0.625);
  width: 100%;
  height: 100%;
  position: absolute;
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 75rem;
  margin-bottom: 4rem;
  text-align: center;
  color: #fff;
  position: relative;
  z-index:  3;
`

export const HeroHeading = styled.h2`
  font-size: 6rem;
  letter-spacing: 2px;
  font-family: "Caesar Dressing", system-ui;
  margin-bottom: 2rem;
`

export const HeroDesc = styled.p`
  font-size: 1.8rem;
  font-style: italic;
`

export const HeroButton = styled(Link)`
  margin-top: 1.5rem;
  background-color: #fafafa;
  color: #232323;
  text-decoration: none;
  font-size: 2.2rem;
  padding: .5rem 2.5rem;
  border-radius: 2rem;
  transition: .4s;
  &:hover{
    background-color: rgba(211, 211, 211);
    color: #000;
  }
`

