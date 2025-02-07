import { Heading, Paragraph, Left, Right } from './Layout'
import { Link, Image } from '../styles/Styles'
import Bubble from './Bubble'
import Header from './Header'
import Timeline from './Timeline'

export default function Learn() {
  return (
    <>
      <Bubble color="blue" height="100px">1</Bubble>
      <Header color="blue-gradient" section="Learn" heading="Learning about smart contracts" />

      <Paragraph
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
      </Paragraph>

      <Timeline top>
        <Left>
          <Image src="./Crypto.jpg" width="400px" />
        </Left>

        <Right>
          <Heading>Blockchain Algorithms</Heading>
          <Paragraph>
            I looked into blockchains at an algorithmic level to ensure that 
            I had a strong understanding of the fundamentals.
          </Paragraph>
        </Right>
      </Timeline>

      <Timeline>
        <Left right="50px">
          <Image src="./Contract.png" width="390px" br="10px" />
        </Left>

        <Right>
          <Heading>Smart Contracts</Heading>
          <Paragraph>
            Next, I learned the Turing complete blockchain language&nbsp;
            <Link href="https://soliditylang.org/" target="blank_">Solidity</Link>
            &nbsp;and how its used to make&nbsp;
            <Link href="https://blockgeeks.com/guides/smart-contracts/" target="_blank">smart contracts</Link>
            &nbsp;with Ethereum.
          </Paragraph>
        </Right>
      </Timeline>

      <Timeline>
        <Left right="90px">
          <Image src="./ERC20.jpg" width="350px" br="10px" />
        </Left>
        <Right>
          <Heading mb="0px">ERC-20 Tokens</Heading>
          <Paragraph>
            I also looked into&nbsp;
            <Link href="https://ethereum.org/en/developers/docs/standards/tokens/erc-20/" target="blank_">ERC-20</Link>,
            the most popular standard for building tokens on the Ethereum that enables compatibility with most Ethereum based&nbsp;
            <Link href="https://ethereum.org/en/dapps/" target="_blank">DApps</Link>.
          </Paragraph>
        </Right>
      </Timeline>
    </>
  )
}