import {HomeContainer, Hero, HeroFade, HeroContent, HeroHeading, HeroDesc, HeroButton} from '../Home/styles'

const Home = () => {
  return (
    <HomeContainer>
      <Hero>
        <HeroFade></HeroFade>
        <HeroContent>
          <HeroHeading>Welcome to Nordic World</HeroHeading>
          <HeroDesc>Embrace effortless style with Nordic World! Our clothing reflects the beauty of the Scandinavian region: clean lines, cozy knits, and pops of color. Dress for function and comfort, all while looking effortlessly chic. Explore our collection and bring a touch of Nordic magic to your wardrobe!</HeroDesc>
          <HeroButton to="/products">Shop now</HeroButton>
        </HeroContent>
      </Hero>
    </HomeContainer>
  )
}




export default Home