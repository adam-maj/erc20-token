import { Heading, Paragraph, Left, Right } from './Layout'
import { Link, Image } from '../styles/Styles'
import Bubble from './Bubble'
import Header from './Header'
import Timeline from './Timeline'

export default function Build() {
  return (
    <>
      <Bubble color="purple" height="180px">2</Bubble>
      <Header color="purple-gradient" section="Build" heading="Building my own token" />

      <Paragraph
        maxWidth="700px"
        textAlign="center"
        mb="80px"
      >
        After learning about the fundamentals of smart contracts and Solidity, 
        I wanted to make something tangible to prove my understanding. 
        I’m a big proponent of project based learning, so I decided to make my own ERC-20 compliant token using 
      </Paragraph>

      <Timeline top>
        <Left>
          <Image src="./Code.jpg" width="385px" br="10px" />
        </Left>

        <Right>
          <Heading>Building Smart Contracts</Heading>
          <Paragraph>
            I used Solidity and the ERC-20 standard to build my own smart contracts. 
            I built two conracts:&nbsp; 
            <Link href="https://github.com/adam-maj/erc20-token/blob/main/contracts/VonToken.sol" target="_blank">
              one that provided the functionality for my token
            </Link>, and&nbsp;
            <Link href="https://github.com/adam-maj/erc20-token/blob/main/contracts/VonTokenSale.sol" target="_blank">
              one that enabled the sale of tokens.
            </Link>.
          </Paragraph>
        </Right>
      </Timeline>

      <Timeline>
        <Left>
          <Image src="./Security.png" width="385px" br="10px" />
        </Left>

        <Right>
          <Heading>Unit Testing</Heading>
          <Paragraph>
            Ensuring that everything is secure works as it was intended is important in building blockchain applications. 
            For this reason, I wrote my own test cases my&nbsp;
            <Link href="https://github.com/adam-maj/erc20-token/blob/main/test/VonToken.test.js" target="_blank">token contract</Link>&nbsp;and&nbsp;
            <Link href="https://github.com/adam-maj/erc20-token/blob/main/test/VonTokenSale.test.js" target="_blank">sale contract</Link>.
          </Paragraph>
        </Right>
      </Timeline>
    </>
  )
}
