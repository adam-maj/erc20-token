import { Flex, Link, Image, Text } from '../styles/Styles'

export default function Signature() {
  return (
    <>
      <Flex width="200px" justify="center">
        <Link href="https://github.com/adam-maj" target="_blank" mr="6px">
          <Image src="./Github.png" width="30px" cursor="pointer" />
        </Link>
        <Link href="https://twitter.com/MajmudarAdam" target="_blank" ml="6px">
          <Image src="./Twitter.png" width="34px" cursor="pointer" br="4px"/>
        </Link>
      </Flex>
      <Text color="gray" fs="14px" mt="0px" mt="4px">
        Made with 🥶by <Link href="https://adammaj.com" target="_blank">Adam Majmudar</Link>
      </Text>
    </>
  )
}
