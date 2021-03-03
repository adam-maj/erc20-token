import { Text, Button } from '../styles/Styles'
import useBlockchain from '../utils/useBlockchain'

export default function Token() {
  const { account, price, tokensSold, tokensAvailable, tokensBought, refreshTokensBought, buyTokens } = useBlockchain()

  return (
    <div>
      <Text color="dark" mt="24px">{account}</Text>
      <Text color="dark" mt="24px">{price} ETH</Text>
      <Text color="dark" mt="24px">{tokensSold}/{tokensAvailable}</Text>
      <Text color="dark" mt="24px">{tokensSold / tokensAvailable}%</Text>
      <Text color="dark" mt="24px">You currently have {tokensBought} tokens</Text>
      <Button onClick={() => buyTokens(10000)} primary>Buy Tokens</Button>
      <Button onClick={refreshTokensBought} primary>Refresh Tokens</Button>
    </div>
  )
}
