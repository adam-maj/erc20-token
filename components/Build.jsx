import { Text, Link } from '../styles/Styles'
import Bubble from './Bubble'
import Header from './Header'
import Timeline from './Timeline'

export default function Build() {
  return (
    <>
      <Bubble color="purple">2</Bubble>
      <Header color="purple-gradient" section="Build" heading="Building my own token" />

      <Text
        color="gray"
        fw="400"
        fs="1rem"
        lh="1.6rem"
        maxWidth="700px"
        textAlign="center"
        mb="80px"
      >
        After learning about the fundamentals of smart contracts and Solidity, 
        I wanted to make something tangible to prove my understanding. 
        I’m a big proponent of project based learning, so I decided to make my own ERC-20 compliant token using 
      </Text>

      <Timeline top />
      <Timeline />
    </>
  )
}
