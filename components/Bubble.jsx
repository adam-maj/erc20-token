import { Flex } from '../styles/Styles'

export default function Bubble({ color, children }) {
  return (
    <>
      <Flex width="1px" bg={`${color}.fade`} height="120px" />
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
