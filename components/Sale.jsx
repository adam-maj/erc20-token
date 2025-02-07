import { useState } from 'react'
import { Text, Button, Flex, Input, Span, Link } from '../styles/Styles'
import useBlockchain from '../utils/useBlockchain'
import Signature from './Signature'

export default function Sale() {
  const [tokens, setTokens] = useState(0)
  
  // Using my own custom hook to interact with the blockchain
  const { 
    loading, 
    network,
    web3, 
    account, 
    tokenPrice, 
    tokensSold, 
    tokensAvailable, 
    tokensBought, 
    buyTokens, 
    connectAccount 
  } = useBlockchain()

  const total = tokensSold + tokensAvailable

  if (loading) {
    return null
  }

  return (
    <Flex direction="column" mt="20px" width="700px">
      {!web3.currentProvider ? (
        <Text color="danger" fs="12px">
          You need to install&nbsp;
          <Link 
            href="https://metamask.io/" 
            target="_blank" 
            color="danger" 
            fw="bold" 
            hover="cursor: pointer; color: #FC4C4D; text-decoration: underline;"
          >
            MetaMask
          </Link>&nbsp;to use this application.
        </Text>
      ) : network !== 'ropsten' ? (
        <Text color="danger" fs="12px">
          Please&nbsp;
          <Link 
            href="/Ropsten.mp4" 
            target="_blank" 
            color="danger" 
            fw="bold" 
            hover="cursor: pointer; color: #FC4C4D; text-decoration: underline;"
          >
            connect MetaMask to the Ropsten network
          </Link>
          &nbsp;to use this application.
        </Text>
      ): !account ? (
        <Text color="danger" fs="12px">
          You need to&nbsp;
          <Span 
            onClick={connectAccount} 
            hover="cursor: pointer; color: #FC4C4D; text-decoration: underline;" 
            fw="bold"
          >
            connect your MetaMask account
          </Span>
          &nbsp;to use this application.
        </Text>
      ) : (
        <>
          <Text color="#999999" fs="12px" mb="24px">
            Don't have any test ETH? Get some from the&nbsp;
            <Link 
              href="https://faucet.ropsten.be/" 
              target="_blank" 
              color="#999999" 
              fw="bold" 
              hover="cursor: pointer; color: #999999; text-decoration: underline;"
            >
              Ropsten faucet
            </Link>&nbsp;by&nbsp;
            <Link 
              href="/Faucet.mp4" 
              target="_blank" 
              color="#999999" 
              fw="bold" 
              hover="cursor: pointer; color: #999999; text-decoration: underline;"
            >
              following this
            </Link>.
          </Text>
          <Flex justify="space-between">
            <Text color="#666666" fs="14px" width="100%">
              <Span color="black" fw="500">Connected Account:</Span> {account}
            </Text>

            <Text color="#666666" width="220px" fs="14px" textAlign="right">
              You have <Span color="blue">{tokensBought || 0}</Span> tokens
            </Text>
          </Flex>
        </>
      )}

      <Flex mb="20px">
        <Input 
          br="5px 0px 0px 5px"
          width="260px" 
          value={tokens}
          onChange={e => setTokens(e.target.value)}
        />
        <Input br="0px" width="260px" ml="-1px" value={`${tokenPrice * tokens || 0.001 * tokens} ETH`} disabled />
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

      <Text fs="14px" color="#666666">
        <Span color="black">Tokens Sold:</Span>&nbsp;
        {account ? `${tokensSold}/${total}` : "?/750000"}
      </Text>

      <Flex position="fixed" bottom="0px" direction="column">
        <Signature />
      </Flex>
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
        minWidth="15px"
        height="20px"
        br="20px 0px 0px 20px"
      />
    </Flex>
  )
}