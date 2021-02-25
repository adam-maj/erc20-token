import { Section, Heading, Button, Flex, Text } from '../styles/Styles'

export default function Home() {
  return (
    <Section direction="column" justify="flex-start">
      <Heading 
        fs="4rem" 
        ls="-0.05em"
        className="blue-gradient"
      >
        Von Token
      </Heading>
      
      <Flex>
        <Button 
          color="black" 
          hover="background: white; color: black; border: 1px solid black;" 
          mr="10px"
          primary
        >
          Buy Tokens
        </Button>
        <Button
          color="gray"
          border="1px solid #EAEAEA"
          hover="border-color: black; color: black;"
          ml="20px"
        >
          About Project
        </Button>
      </Flex>

      <Text 
        mt="80px"
        fs="0.75rem" 
        ls="0.2em" 
        color="black" 
        fw="700"
        mb="20px"
      >
        EXPLORE THIS PROJECT
      </Text>

      <Bubble color="blue">1</Bubble>
      <Bubble color="purple">2</Bubble>
      <Bubble color="orange">3</Bubble>
    </Section>
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