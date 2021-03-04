import { useState } from 'react'
import { Section, Heading, Button, Flex } from '../styles/Styles'
import About from './About'
import Token from './Token'
import styled, { css } from 'styled-components'

const Option = styled(Button)`
  ${props => props.active ? css`
    background: black;
    color: white;
  ` : css`
    color: #666666;
    border: 1px solid #EAEAEA;

    &:hover {
      background: white; 
      color: black; 
      border: 1px solid black;
    }
  `}
`

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

      <Flex mb="20px">
        <Option
          onClick={() => setAbout(false)}
          br="5px 0px 0px 5px"
          active={!about}
        >
          Token Sale
        </Option>
        <Option
          onClick={() => setAbout(true)}
          br="0px 5px 5px 0px"
          active={about}
        >
          About Project
        </Option>
      </Flex>

      {about && <About />}
      {!about && <Token />}
    </Section>
  )
}

