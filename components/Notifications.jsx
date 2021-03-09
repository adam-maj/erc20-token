import React, { useContext } from 'react'
import { Text } from '../styles/Styles'
import { NotificationContext } from './contexts/NotificationContext'
import styled, { keyframes, css } from 'styled-components'

const slide = keyframes`
  0% {
    transform: translateX(100%)
  }
  40% {
    transform: translateX(-10%)
  }
  80% {
    transform: translateX(0%)
  }
`

export const Notification = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
  height: 50px;
  background: #50E3C2;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  border-left: 8px solid #2dc5a4;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.2);
  animation: ${slide} 1s ease forwards;

  ${props =>
    props.error ? css`
      background: #EF4444; 
      border-left: 8px solid #D92E17;
    ` : null
  }
`

export default function Notifications() {
  const { notification, deleteNotification } = useContext(NotificationContext);
  const error = notification.includes('Error: ');

  if (!notification) {
    return null;
  }

  return (
    <Notification error={error} onClick={deleteNotification}>
      <Text fs="14px" color="white">
        {notification.replace('Error: ', '')}
      </Text>
    </Notification>  
  )
}
