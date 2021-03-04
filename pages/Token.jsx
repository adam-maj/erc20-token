import { useState } from 'react'
import { Text, Button, Flex, Input, Span } from '../styles/Styles'
import useBlockchain from '../utils/useBlockchain'

export default function Token() {
  const [tokens, setTokens] = useState(0)
  const { account, price, tokensSold, tokensAvailable, tokensBought, refreshTokensBought, buyTokens } = useBlockchain()

  return (
    <Flex direction="column" mt="20px">
      <Flex justify="space-between">
        <Text color="#666666" fs="14px" width="100%">
          <Span color="black" fw="500">Connected Account:</Span> {account}
        </Text>

        <Text color="#666666" width="200px" fs="14px">
          You have <Span color="blue">{tokensBought}</Span> tokens
        </Text>
      </Flex>

      <Flex>
        <Input 
          br="5px 0px 0px 5px"
          width="260px" 
          value={tokens}
          onChange={e => setTokens(e.target.value)}
        />
        <Input br="0px" width="260px" ml="-1px" value={`${price * tokens} ETH`} disabled />
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
    </Flex>
  )
}
