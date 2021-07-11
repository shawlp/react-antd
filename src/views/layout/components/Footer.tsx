import React, { FC } from 'react'
import { DefaultFooter } from '@ant-design/pro-layout'

type IProps = {
  title: string
}

const Footer: FC<IProps> = ({ title }) => {
  return <DefaultFooter links={false} copyright={title} />
}

export default Footer
