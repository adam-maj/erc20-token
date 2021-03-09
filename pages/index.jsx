import { useState } from 'react'
import { Section, Heading, Button, Flex, Link, Text } from '../styles/Styles'
import About from '../components/About'
import Sale from '../components/Sale'
import MobileAbout from '../components/mobile/About'
import MobileSale from '../components/mobile/Sale'
import styled, { css } from 'styled-components'
import Notification from '../components/Notifications'

const Desktop = styled(Section)`
  flex-direction: column;
  justify-content: flex-start;
  height: auto;

  @media (max-width: 768px) {
    display: none;
  }
`

const Mobile = styled(Section)`
  flex-direction: column;
  justify-content: flex-start;
  height: auto;
  padding: 40px;

  @media (min-width: 769px) {
    display: none;
  }
`

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
    <>
      <Desktop>
        <Notification />
        <Link href="https://www.youtube.com/watch?v=hzt31eJTGxo" target="_blank">
          <Heading 
            fs="4rem" 
            ls="-0.05em"
            className="blue-gradient"
          >
            Von Token
          </Heading>
        </Link>

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
        {!about && <Sale />}
      </Desktop>
      <Mobile>
        <Link href="https://www.youtube.com/watch?v=hzt31eJTGxo" target="_blank">
          <Heading 
            mt="0px"
            fs="3rem" 
            ls="-0.05em"
            className="blue-gradient"
          >
            Von Token
          </Heading>
        </Link>

        <Flex mb="20px">
          <Option
            onClick={() => setAbout(false)}
            br="5px 0px 0px 5px"
            width="130px"
            height="40px"
            fs="14px"
            active={!about}
          >
            Token Sale
          </Option>
          <Option
            onClick={() => setAbout(true)}
            br="0px 5px 5px 0px"
            width="130px"
            height="40px"
            fs="14px"
            active={about}
          >
            About Project
          </Option>
        </Flex>


        <Text color="danger" textAlign="center" fs="14px" width="350px" fw="600" mb="0px" mt="20px">
          Switching to desktop is recommended.
        </Text>
        <Text color="gray.600" textAlign="center" fs="12px" width="350px" mb="40px">
          Unfortunately, blockchain technology currently doesn't work on mobile.
          I've made a (simplified) mobile demo of the project just so you can see what it looks like.
        </Text>


        {about && <MobileAbout />}
        {!about && <MobileSale />}
      </Mobile>
    </>
  )
}

