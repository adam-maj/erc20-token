import styled, { css } from 'styled-components';

export const theme = {
  'primary': '#FC4C4D',
  'danger': '#FC4C4D',
  'dark': '#0B132A',
  'gray': '#666666',
  'blue': '#3291FF',
  'purple': '#7928CA',
  'orange': '#FF4D4D',
  'gray.200': '#F6F6F6',
  'gray.300': '#F0F0F0',
  'gray.400': '#E8E8E8',
  'gray.500': '#D9D9D9',
  'gray.600': '#BABABA',
  'gray.700': '#919191',
  'gray.800': '#737373',
  'gray.900': '#4A4A4A',
  'gray.1000': '#333333',
  'red.600': '#FF5E5F',
  'red.700': '#FC4C4D',
  'gradient.blue': 'linear-gradient(90deg, #3291FF, #50E3C2)',
  'gradient.purple': 'linear-gradient(90deg, #7928CA, #FF0080)',
  'gradient.orange': 'linear-gradient(90deg, #FF4D4D, #F9CB28)',
  'gray.fade': 'linear-gradient(45deg, #999, white)',
  'blue.fade': 'linear-gradient(45deg, #3291FF,  white)',
  'purple.fade': 'linear-gradient(45deg, #7928CA,  white)',
  'orange.fade': 'linear-gradient(45deg, #FF4D4D,  white)'
}

const margin = css`
  margin: ${props => props.margin || 'default'};
  margin-right: ${props => props.mr || 'default'};
  margin-left: ${props => props.ml || 'default'};
  margin-top: ${props => props.mt || 'default'};
  margin-bottom: ${props => props.mb || 'default'};
`

const padding = css`
  padding: ${props => props.padding || 'default'};
  padding-right: ${props => props.pr || 'default'};
  padding-left: ${props => props.pl || 'default'};
  padding-top: ${props => props.pt || 'default'};
  padding-bottom: ${props => props.pb || 'default'};
`

const shape = css`
  width: ${props => props.width || 'default'};
  height: ${props => props.height || 'default'};
  min-width: ${props => props.minWidth || 'default'};
  min-height: ${props => props.minHeight || 'default'};
  max-width: ${props => props.maxWidth || 'default'};
  max-height: ${props => props.maxHeight || 'default'};
  border-radius: ${props => props.br || 'default'};
  border: ${props => props.border || 'default'};
`

const flex = css`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'default'};
  flex-grow: ${props => props.grow || 'default'};
  flex-shrink: ${props => props.shrink || 'default'};
  flex: ${props => props.flex || 'default'};
`

const color = css`
  background: ${props => props.bg ? 
    Object.keys(theme).includes(props.bg) ? theme[props.bg] : props.bg
  : 'transparent'};
  color: ${props => props.color ? 
    Object.keys(theme).includes(props.color) ? theme[props.color] : props.color
  : 'default'};
  box-shadow: ${props => props.shadow || 'default'};
  filter: ${props => props.filter || 'default'};
`

const text = css`
  font-family: 'Inter', sans-serif;
  font-size: ${props => props.fs || 'default'};
  font-weight: ${props => props.fw || 'default'};
  text-align: ${props => props.textAlign || 'default'};
  line-height: ${props => props.lh || 'default'};
  text-decoration: ${props => props.td || 'default'};
  letter-spacing: ${props => props.ls || 'default'};
  
  @media (max-width: 800px){
    font-size: ${props => props.fs && `calc(${props.fs}*0.714)`};
  }
`

const position = css`
  position: ${props => props.position || 'auto'};
  top: ${props => props.top || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  left: ${props => props.left || 'auto'};
  z-index: ${props => props.z || 'auto'};
`

const control = css`
  cursor: ${props => props.cursor || 'auto'};
  &:hover {
    ${props => props.hover || ''}
  }
`

const custom = css`
  ${props => props.custom || ''}
`

export const Section = styled.div`
  height: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 100px 20px 20px 20px;
  ${flex}
  ${padding}
  ${margin}
  ${color}
`

export const Flex = styled.div`
  overflow: ${props => props.overflow || 'default'};
  ${color}
  ${flex}
  ${shape}
  ${margin}
  ${padding}
  ${position}
  ${control}
  ${text}
  ${custom}
`

export const Input = styled.input`
  font-family: 'Rubik', sans-serif;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 18px;
  border: ${props => props.danger ? `2px solid ${theme.danger}` : '1px solid hsl(0,0%,80%)'};
  border-radius: 8px;
  height: 48px;
  width: 100%;
  outline: none;
  ${shape}
  ${margin}
  ${text}
  ${padding}
`

export const Select = styled.select`
  font-family: 'Rubik', sans-serif;
  padding-left: 16px !important;
  font-size: 18px;
  border: ${props => props.danger ? `2px solid ${theme.danger}` : '1px solid hsl(0,0%,80%)'};
  border-radius: 8px;
  height: 48px;
  width: 100%;
  padding-left: 10px;
  padding-right: 5px;
  margin-right: 5px;
  outline: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  ${shape}
  ${margin}
`

export const Heading = styled.h1`
  font-size: ${props => props.fs || '30px'};
  font-weight: ${props => props.fw || 700};
  ${margin}
  ${text}
  ${color}
  ${position}
  ${shape}
  ${custom}
`

export const SubHeading = styled.h2`
  font-size: ${props => props.fs || '24px'};
  font-weight: ${props => props.fw || 500};
  color: ${props => props.color || theme.dark};
  ${margin}
  ${text}
  ${color}
  ${position}
`

export const Text = styled.p`
  color: ${props => props.color || 'white'};
  ${margin}
  ${text}
  ${shape}
  ${position}
  ${color}
  ${control}

  ${props => props.danger && css`
    color: ${theme.primary};
  `}

  ${props => props.small && css`
    font-size: 12px;
  `}
`

export const Span = styled.span`
  ${color}
  ${margin}
  ${position}
  ${shape}
  ${text}
  ${control}
`

export const Link = styled.a`
  color: ${theme.blue};
  ${color}

  &:hover {
    color: black;
  }

  ${text}
  ${margin}
  ${control}

  cursor: pointer;
`

export const Button = styled.button`
  height: 50px;
  width: 200px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  outline: none !important;
  ${shape}
  ${control}
  ${margin}
  ${text}
  ${position}

  ${props => props.primary ? css`
    background: ${props => props.color ? Object.keys(theme).includes(props.color) ? theme[props.color] : props.color : theme.primary};
    color: white;
  `: css`
    background: white;
    color: ${props => props.color ? Object.keys(theme).includes(props.color) ? theme[props.color] : props.color : theme.primary};
  `}
  ${props => props.disabled ? css`
    cursor: default;
    opacity: 0.8;
  `: css`
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }

    &:active {
      opacity: 1;
    }
  `}
`

export const Image = styled.img`
  opacity: ${props => props.opacity || '1'};
  filter: ${props => props.filter || 'default'};
  ${shape}
  ${position}
  ${control}
`

export function Background({ children }) {
  return (
    <Flex 
      position="fixed" 
      top="0" 
      left="0"
      width="100vw" 
      height="100vh" 
      bg="rgba(0, 0, 0, 0.3)" 
      align="center" 
      justify="center"
      z="100"
    >
      {children}
    </Flex>
  )
}

const ExitButton = styled(Span)`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`

export function Exit({ closeModal }) {
  return (
    <ExitButton onClick={closeModal} dark>&#10005;</ExitButton>
  )
}