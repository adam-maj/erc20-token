import { Paragraph, Heading, Left, Right } from './Layout'
import { Link, Image } from '../styles/Styles'
import Bubble from './Bubble'
import Header from './Header'
import Timeline from './Timeline'

export default function Deploy() {
  return (
    <>
      <Bubble color="orange" height="160px">3</Bubble>
      <Header color="orange-gradient" section="Deploy" heading="Creating a decentralized app" />

      <Paragraph
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
        in exchange for Ether. After building out this application, I deployed it 
        to an Ethereum test network and deployed this website along with it!
      </Paragraph>

      <Timeline top>
        <Left right="50px">
          <Image src="./Stack.png" width="390px" br="10px" />
        </Left>

        <Right>
          <Heading>Learning Blockchain Technologies</Heading>
          <Paragraph>
            In order to build the frontend of my application, 
            I had to learn some of the most popular technologies used for blockchain development today including&nbsp;
            <Link href="https://www.trufflesuite.com/truffle" target="_blank">Truffle</Link>,&nbsp;
            <Link href="https://github.com/ChainSafe/web3.js" target="_blank">Web3</Link>, and&nbsp;
            <Link href="https://www.trufflesuite.com/ganache" target="_blank">Ganache</Link>.
          </Paragraph>
        </Right>
      </Timeline>

      <Timeline>
        <Left right="50px">
          <Image src="./DApp.jpg" width="390px" br="10px" />
        </Left>

        <Right>
          <Heading>Building the DApp</Heading>
          <Paragraph>
            Using these new technologies, I&nbsp;
            <Link href="https://github.com/adam-maj/erc20-token/">built my application</Link>
            &nbsp;to integrate with&nbsp;
            <Link href="https://metamask.io/" target="_blank">MetaMask</Link>
            &nbsp;and communicate directly with the blockchain. This was the most difficult part of
            project since it involved many different moving parts, but I learned a lot from it.
          </Paragraph>
        </Right>
      </Timeline>

      <Timeline>
        <Left right="45px">
          <Image src="./Live.jpg" width="400px" br="10px" />
        </Left>

        <Right>
          <Heading>Going Live</Heading>
          <Paragraph>
            Finally, I deployed my smart contracts to the live&nbsp;
            <Link href="https://ropsten.etherscan.io/" target="_blank">Ropsten</Link>
            &nbsp;test network using&nbsp;
            <Link href="https://infura.io/">Infura</Link>
            &nbsp;and I deployed this web application (the site you're on right now).
          </Paragraph>
        </Right>
      </Timeline>
    </>
  )
}
