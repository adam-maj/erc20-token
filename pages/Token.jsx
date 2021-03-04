import { useState } from 'react'
import { Text, Button, Flex, Input, Span } from '../styles/Styles'
import useBlockchain from '../utils/useBlockchain'

export default function Token() {
  const [tokens, setTokens] = useState(0)
  // Using my own custom hook to interact with the blockchain
  const { account, tokenPrice, tokensSold, tokensAvailable, tokensBought, buyTokens } = useBlockchain()

  const total = tokensSold + tokensAvailable

  return (
    <Flex direction="column" mt="20px" width="700px">
      <Flex justify="space-between">
        <Text color="#666666" fs="14px" width="100%">
          <Span color="black" fw="500">Connected Account:</Span> {account}
        </Text>

        <Text color="#666666" width="220px" fs="14px" textAlign="right">
          You have <Span color="blue">{tokensBought || 0}</Span> tokens
        </Text>
      </Flex>

      <Flex mb="20px">
        <Input 
          br="5px 0px 0px 5px"
          width="260px" 
          value={tokens}
          onChange={e => setTokens(e.target.value)}
        />
        <Input br="0px" width="260px" ml="-1px" value={`${tokenPrice * tokens} ETH`} disabled />
        <Button 
          color="black" 
          onClick={() => buyTokens(tokens)}
          br="0px 5px 5px 0px" 
          width="180px"
          primary
        >
          Buy Tokens
        </Button>
      </Flex>

      <Progress percent={tokensSold / total} />

      <Text fs="14px" color="#666666"><Span color="black">Tokens Sold:</Span> {tokensSold}/{total}</Text>
    </Flex>
  )
}

function Progress({ percent }) {
  return (
    <Flex 
      width="500px" 
      height="20px"
      bg="#EAEAEA" 
      br="20px" 
      mt="20px" 
      position="relative"
    >
      <Flex 
        position="absolute" 
        left="0px" 
        bg="#4FE0C5" 
        width={`${percent * 500}px`} 
        height="20px"
        br="20px 0px 0px 20px"
      />
    </Flex>
  )
}