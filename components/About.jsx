import { Text, Flex } from '../styles/Styles'
import Signature from '../components/Signature'
import Learn from '../components/Learn'
import Build from '../components/Build'
import Deploy from '../components/Deploy'

export default function Home() {
  return (
    <>
      <Text 
        mt="60px"
        fs="0.75rem" 
        ls="0.2em" 
        color="black" 
        fw="700"
        mb="60px"
      >
        EXPLORE THIS PROJECT
      </Text>
      
      <Learn />
      <Build />
      <Deploy />

      <Flex direction="column" mt="250px" mb="-10px">
        <Signature />
      </Flex>
    </>
  )
}