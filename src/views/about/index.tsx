import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}
const About: FC<IProps> = () => {
  return <p>About</p>
}

export default memo(About)
