import { Flex, Text } from '../styles/Styles'

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

export function Left({ children }) {
  return (
    <Flex direction="column" align="flex-end" position="absolute" right="40px">
      {children}
    </Flex>
  )
}

export function Right({ children }) {
  return (
    <Flex direction="column" align="flex-start" position="absolute" left="40px">
      {children}
    </Flex>
  )
}