import { Heading, Flex, Text, Link } from '../styles/Styles'

export default function Home() {
  return (
    <>
      <Text 
        mt="80px"
        fs="0.75rem" 
        ls="0.2em" 
        color="black" 
        fw="700"
        mb="60px"
      >
        EXPLORE THIS PROJECT
      </Text>

      <Bubble color="blue">1</Bubble>
      <Text 
        className="blue-gradient" 
        fs="2rem" 
        ls="-0.05rem" 
        fw="700"
        mt="20px"
        mb="0px"
      >
        Learn
      </Text>
      <Heading 
        fs="4rem" 
        ls="-0.05rem"
        mt="20px"
        mb="30px"
      >
        Learning about smart contracts
      </Heading>
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

      <Bubble color="purple">2</Bubble>
      <Bubble color="orange">3</Bubble>
    </>
  )
}

function Bubble({ color, children }) {
  return (
    <>
      <Flex width="1px" bg={`${color}.fade`} height="100px" />
      <Flex 
        br="25px" 
        fs="0.9rem"
        fw="700"
        color="white" 
        bg={`gradient.${color}`}
        height="40px" 
        width="40px"
        justify="center"
      >
        {children}
      </Flex>
    </>
  )
}

function Timeline({ top }) {
  return (
    <>
      {top && (
        <>
          <Flex width="1px" bg={`gray.fade`} height="100px" />
          <Flex 
            br="25px" 
            width="11px"
            height="11px" 
            bg="transparent" 
            border="1px solid #999999" 
          />
        </>
      )}
      
      <Flex 
        width="0px" 
        bg="transparent" 
        height="300px" 
        custom="border-left: 1px dashed #999999" 
      />
      <Flex 
        br="25px" 
        width="11px"
        height="11px" 
        bg="transparent" 
        border="1px solid #999999" 
      />
    </>
  )
}