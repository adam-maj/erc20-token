import { useState } from 'react'
import { Section, Heading, Button, Flex } from '../styles/Styles'
import About from './About'
import Token from './Token'

export default function index() {
  const [about, setAbout] = useState(false)

  return (
    <Section direction="column" justify="flex-start" height="auto">
      <Heading 
        fs="4rem" 
        ls="-0.05em"
        className="blue-gradient"
      >
        Von Token
      </Heading>
      
      <Flex>
        <Button 
          onClick={() => setAbout(false)}
          color="black" 
          hover="background: white; color: black; border: 1px solid black;" 
          mr="10px"
          primary
        >
          Buy Tokens
        </Button>
        <Button
          onClick={() => setAbout(true)}
          color="gray"
          border="1px solid #EAEAEA"
          hover="border-color: black; color: black;"
          ml="20px"
        >
          About Project
        </Button>
      </Flex>

      <Flex>
      <Button 
          onClick={() => setAbout(false)}
          color="black" 
          hover="background: white; color: black; border: 1px solid black;" 
          mr="10px"
          primary
        >
          Buy Tokens
        </Button>
        <Button
          onClick={() => setAbout(true)}
          color="gray"
          border="1px solid #EAEAEA"
          hover="border-color: black; color: black;"
          ml="20px"
        >
          About Project
        </Button>
      </Flex>

      {about && <About />}
      {!about && <Token />}
    </Section>
  )
}

