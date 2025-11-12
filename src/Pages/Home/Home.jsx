import React from 'react'
import HomeHero from '../../Components/Hero/HomeHero'
import Counter from '../../Components/Counter/Counter'
import About from '../../Components/About/About'
import ActiveChallenges from '../../Components/Challenges/Active-Challenges/ActiveChallenges'
import RecentTips from '../../Components/Tips/Recent-Tips/RecentTips'
import UpcomingEvents from '../../Components/Events/UpcomingEvents'

const Home = () => {
  return (
    <div>
      <HomeHero></HomeHero>
      <Counter></Counter>
      <About></About>
      <ActiveChallenges></ActiveChallenges>
      <RecentTips></RecentTips>
      <UpcomingEvents></UpcomingEvents>
    </div>
  )
}

export default Home
