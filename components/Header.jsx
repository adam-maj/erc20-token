import { Text, Heading } from '../styles/Styles'

export default function Header({ color, section, heading }) {
  return (
    <>
      <Text 
        className={color}
        fs="2rem" 
        ls="-0.05rem" 
        fw="700"
        mt="20px"
        mb="0px"
      >
        {section}
      </Text>
      <Heading 
        textAlign="center"
        fs="4rem" 
        ls="-0.05rem"
        mt="20px"
        mb="30px"
      >
        {heading}
      </Heading>
    </>
  )
}
