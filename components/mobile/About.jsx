import { Flex, Text, Link } from '../../styles/Styles'
import Bubble from '../Bubble'
import styled from 'styled-components'
import Signature from '../components/Signature'

const Image = styled.img`
  width: 100%;
  margin-top: ${props => props.mt || '48px'};
  border-radius: ${props => props.br || '0px'}
`

const Paragraph = styled(Text)`
  color: #919191;
  font-size: 14px;
  text-align: center;
  margin-top: 16px;
`

const Heading = styled(Text)`
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 0px;
  letter-spacing: -0.05rem;
  text-align: center;
`

export default function About() {
  return (
    <>
      <Bubble color="blue" height="100px">1</Bubble>
      <Text className="blue-gradient" fs="24px" mt="16px" ls="-0.05rem" fw="bold" mb="0px">
        Learn
      </Text>
      <Text fs="32px" color="black" fw="bold" mt="12px" mb="0px" textAlign="center">
        Learning about smart contracts
      </Text>

      <Flex direction="column" width="375px" mb="40px">
        <Text color="gray.700" fs="14px" textAlign="center" mt="16px">
          Given the increasing popularity and widespread interest in cryptocurrency, 
          especially relating to the growth in&nbsp;
          <Link href="https://defipulse.com/" target="_blank">DeFi</Link> 
          &nbsp;and&nbsp;
          <Link href="https://www.coindesk.com/what-are-nfts" target="_blank">NFTs</Link> 
          &nbsp;over the past few months, 
          I wanted to dive deep into these technologies and understand how they work 
          at a fundamental level.
        </Text>

        <Image src="./Crypto.jpg" />
        <Heading>Blockchain Algorithms</Heading>
        <Paragraph>
          I looked into blockchains at an algorithmic level to ensure that 
          I had a strong understanding of the fundamentals.
        </Paragraph>

        <Image src="./Contract.png" br="10px" />
        <Heading>Smart Contracts</Heading>
        <Paragraph>
          Next, I learned the Turing complete blockchain language&nbsp;
          <Link href="https://soliditylang.org/" target="blank_">Solidity</Link>
          &nbsp;and how its used to make&nbsp;
          <Link href="https://blockgeeks.com/guides/smart-contracts/" target="_blank">smart contracts</Link>
          &nbsp;with Ethereum.
        </Paragraph>

        <Image src="./ERC20.jpg" br="10px" mt="0px"/>
        <Heading>ERC-20 Tokens</Heading>
        <Paragraph>
          I also looked into&nbsp;
          <Link href="https://ethereum.org/en/developers/docs/standards/tokens/erc-20/" target="blank_">ERC-20</Link>,
          the most popular standard for building tokens on the Ethereum that enables compatibility with most Ethereum based&nbsp;
          <Link href="https://ethereum.org/en/dapps/" target="_blank">DApps</Link>.
        </Paragraph>
      </Flex>

      <Bubble color="purple" height="100px">2</Bubble>
      <Text className="purple-gradient" fs="24px" mt="16px" ls="-0.05rem" fw="bold" mb="0px">
        Build
      </Text>
      <Text fs="32px" color="black" fw="bold" mt="12px" mb="0px" textAlign="center">
        Building my own token
      </Text>

      <Flex direction="column" width="375px" mb="40px">
        <Text color="gray.700" fs="14px" textAlign="center" mt="16px">
          After learning about the fundamentals of smart contracts and Solidity, 
          I wanted to make something tangible to prove my understanding. 
          I’m a big proponent of project based learning, so I decided to make my own ERC-20 compliant token.
        </Text>

        <Image src="./Code.jpg" width="385px" br="10px" />
        <Heading>Building Smart Contracts</Heading>
        <Paragraph>
          I used Solidity and the ERC-20 standard to build my own smart contracts. 
          I built two contracts:&nbsp; 
          <Link href="https://github.com/adam-maj/erc20-token/blob/main/contracts/VonToken.sol" target="_blank">
            one that provides the functionality for my token
          </Link>, and&nbsp;
          <Link href="https://github.com/adam-maj/erc20-token/blob/main/contracts/VonTokenSale.sol" target="_blank">
            one that enables the sale of tokens.
          </Link>.
        </Paragraph>

        <Image src="./Security.png" width="385px" br="10px" />
        <Heading>Unit Testing</Heading>
        <Paragraph>
          Ensuring that everything is secure and works as intended is important in building blockchain applications. 
          For this reason, I wrote my own test cases for the&nbsp;
          <Link href="https://github.com/adam-maj/erc20-token/blob/main/test/VonToken.test.js" target="_blank">token contract</Link>&nbsp;and&nbsp;
          <Link href="https://github.com/adam-maj/erc20-token/blob/main/test/VonTokenSale.test.js" target="_blank">sale contract</Link>.
        </Paragraph>
      </Flex>

      <Bubble color="orange" height="100px">2</Bubble>
      <Text className="orange-gradient" fs="24px" mt="16px" ls="-0.05rem" fw="bold" mb="0px">
        Deploy
      </Text>
      <Text fs="32px" color="black" fw="bold" mt="12px" mb="0px" textAlign="center">
        Creating a DApp
      </Text>

      <Flex direction="column" width="375px" mb="40px">
        <Text color="gray.700" fs="14px" textAlign="center" mt="16px">
          Finally, I wanted to make my own&nbsp;
          <Link href="https://www.freecodecamp.org/news/what-is-a-dapp-a-guide-to-ethereum-dapps/" target="_blank">
            Decentralized Application
          </Link>
          &nbsp;(DApp) to interact with my smart contracts. 
          I decided to make an ICO application that allows users to purchase Von Token 
          in exchange for Ether. After building out this application, I deployed it 
          to an Ethereum test network and deployed this website along with it!
        </Text>

        <Image src="./Stack.png" br="10px" />
        <Heading>Learning Blockchain Technologies</Heading>
        <Paragraph>
          In order to build the frontend of my application, 
          I had to learn some of the most popular technologies used for blockchain development today including&nbsp;
          <Link href="https://www.trufflesuite.com/truffle" target="_blank">Truffle</Link>,&nbsp;
          <Link href="https://github.com/ChainSafe/web3.js" target="_blank">Web3</Link>, and&nbsp;
          <Link href="https://www.trufflesuite.com/ganache" target="_blank">Ganache</Link>.
        </Paragraph>

        <Image src="./DApp.jpg" br="10px" />
        <Heading>Building the DApp</Heading>
        <Paragraph>
          Using these new technologies, I made my own&nbsp;
          <Link href="https://github.com/adam-maj/erc20-token/blob/main/utils/useBlockchain.jsx" target="_blank">custom React hook</Link>
          &nbsp;to integrate with&nbsp;
          <Link href="https://metamask.io/" target="_blank">MetaMask</Link>
          &nbsp;and communicate directly with the blockchain. This was the most difficult part of
          project since it involved many different moving parts, but I learned a lot from it.
        </Paragraph>

        <Image src="./Live.jpg" br="10px" />
        <Heading>Going Live</Heading>
        <Paragraph>
          Finally, I deployed my smart contracts to the live&nbsp;
          <Link href="https://ropsten.etherscan.io/" target="_blank">Ropsten</Link>
          &nbsp;test network using&nbsp;
          <Link href="https://infura.io/">Infura</Link>
          &nbsp;and I deployed this web application (the site you're on right now).
        </Paragraph>
      </Flex>
    </>
  )
}