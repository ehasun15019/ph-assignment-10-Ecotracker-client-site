import React from 'react'
import HomeHero from '../../Components/Hero/HomeHero'
import Counter from '../../Components/Counter/Counter'
import About from '../../Components/About/About'
import ActiveChallenges from '../../Components/Challenges/Active-Challenges/ActiveChallenges'

const Home = () => {
  return (
    <div>
      <HomeHero></HomeHero>
      <Counter></Counter>
      <About></About>
      <ActiveChallenges></ActiveChallenges>
    </div>
  )
}

export default Home
