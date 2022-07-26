import React, { memo } from 'react'

const Message =  () => {
    console.log("message is renderring")
  return (
    <div>message</div>
  )
}

export default memo(Message)