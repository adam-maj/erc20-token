import { Text, Link } from '../styles/Styles'
import Learn from '../components/Learn'
import Deploy from '../components/Deploy'
import Build from '../components/Build'

export default function Home() {
  return (
    <>
      <Text 
        mt="80px"
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

      <Text mt="250px" mb="-10px" color="gray" fs="14px">
        Made with 🥶by <Link href="https://adammaj.com" target="_blank">Adam Majmudar</Link>
      </Text>
    </>
  )
}