import { Text, Link } from '../styles/Styles'
import Bubble from './Bubble'
import Header from './Header'
import Timeline from './Timeline'

export default function Deploy() {
  return (
    <>
      <Bubble color="orange">3</Bubble>
      <Header color="orange-gradient" section="Deploy" heading="Creating a decentralized app" />

      <Text
        color="gray"
        fw="400"
        fs="1rem"
        lh="1.6rem"
        maxWidth="700px"
        textAlign="center"
        mb="80px"
      >
        Finally, I wanted to make my own&nbsp;
        <Link href="https://www.freecodecamp.org/news/what-is-a-dapp-a-guide-to-ethereum-dapps/" target="_blank">
          Decentralized Application
        </Link>
        &nbsp;(DApp) to interact with my smart contracts. 
        I decided to make an ICO application that allows users to purchase Von Token 
        in exchange for Ether. After building out thsi application, I deployed it 
        to an Ethereum test network and deployed this website along with it!
      </Text>

      <Timeline top/>
      <Timeline />
    </>
  )
}
