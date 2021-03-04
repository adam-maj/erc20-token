import { Flex } from '../styles/Styles'

export default function Timeline({ top }) {
  return (
    <>
      {top && (
        <>
          <Flex width="1px" bg={`gray.fade`} height="100px" />
          <Flex 
            br="25px" 
            width="11px"
            height="11px" 
            bg="transparent" 
            border="1px solid #999999" 
          />
        </>
      )}
      
      <Flex 
        width="0px" 
        bg="transparent" 
        height="300px" 
        custom="border-left: 1px dashed #999999" 
      />
      <Flex 
        br="25px" 
        width="11px"
        height="11px" 
        bg="transparent" 
        border="1px solid #999999" 
      />
    </>
  )
}