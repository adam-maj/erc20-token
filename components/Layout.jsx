import { Flex, Text } from '../styles/Styles'
import styled from 'styled-components'

export const Heading = styled(Text)`
  font-size: 1.6rem;
  font-weight: bold;
  color: black;
  width: 400px;
  margin-bottom: 0px;
`

export function Paragraph({ children, ...props }) {
  return (
    <Text 
      color="gray"
      fw="400"
      fs="1rem"
      lh="1.6rem"
      ls="-0.02rem"
      {...props}
    >
      {children}
    </Text>
  )
}

export function Left({ children, ...props }) {
  return (
    <Flex direction="column" align="flex-end" position="absolute" right="40px" {...props}>
      {children}
    </Flex>
  )
}

export function Right({ children, ...props }) {
  return (
    <Flex direction="column" align="flex-start" position="absolute" left="40px" {...props}>
      {children}
    </Flex>
  )
}