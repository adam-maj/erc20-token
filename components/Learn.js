import { Text, Link } from '../styles/Styles'
import Bubble from './Bubble'
import Header from './Header'
import Timeline from './Timeline'

export default function Learn() {
  return (
    <>
      <Bubble color="blue">1</Bubble>
      <Header color="blue-gradient" section="Learn" heading="Learning about smart contracts" />

      <Text
        color="gray"
        fw="400"
        fs="1rem"
        lh="1.6rem"
        maxWidth="700px"
        textAlign="center"
        mb="80px"
      >
        Given the increasing popularity and widespread interest in cryptocurrency, 
        especially relating to the growth in&nbsp;
        <Link href="https://defipulse.com/" target="_blank">DeFi</Link> 
        &nbsp;and&nbsp;
        <Link href="https://www.coindesk.com/what-are-nfts" target="_blank">NFTs</Link> 
        &nbsp;over the past few months, 
        I wanted to dive deep into these technologies and understand how they work 
        at a fundamental level.
      </Text>

      <Timeline top />
      <Timeline />
    </>
  )
}