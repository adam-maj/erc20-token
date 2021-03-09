import { useState } from 'react'
import { Text, Button, Flex, Input, Span, Link } from '../../styles/Styles'
import Signature from '../Signature'

export default function Sale() {
  const [tokens, setTokens] = useState(0)
  const [balance, setBalance] = useState(Math.floor(Math.random() * 5))
  const [bought, setBought] = useState(0)

  function buyTokens(tokens) {
    if (balance - (tokens * 0.001) >= 0) {
      setBought(bought => bought + tokens)
      setBalance(balance => balance - (tokens * 0.001))
      setTokens(0)
    }
  }

  return (
    <>
      <Flex width="350px" direction="column">
        <Text color="gray" fs="12px" mb="0px" mt="0px">
          <Span color="black" fw="bold">Your Account:</Span> 0xdd69c33aff79c8157b370fa63f922a51dd
        </Text>
        <Text color="gray" fs="12px" mt="8px" mb="0px">
          <Span color="black" fw="bold">Tokens Bought:</Span> {bought}
        </Text>
        <Text color="gray" fs="12px" mt="8px">
          <Span color="black" fw="bold">Ethereum Balance:</Span> {balance} ETH
        </Text>
      </Flex>
      <Flex mb="20px" mt="40px">
        <Input 
          br="5px 0px 0px 5px"
          width="175px"
          height="40px"
          value={tokens}
          onChange={e => setTokens(e.target.value)}
        />
        <Input 
          br="0px 5px 5px 0px" 
          width="175px" 
          height="40px"
          ml="-1px" 
          value={`${0.001 * tokens} ETH`} 
          disabled 
        />
      </Flex>
      <Button
        color="black"
        onClick={() => buyTokens(parseInt(tokens))}
        br="5px" 
        width="175px"
        height="40px"
        primary
      >
        Buy Tokens
      </Button>

      <Flex position="fixed" bottom="0px" direction="column">
        <Signature />
      </Flex>
    </>
  )
}