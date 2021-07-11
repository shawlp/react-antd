import React, { FC } from 'react'
import { Avatar } from 'antd'
import style from './RightTopContent.less'

const RightTopContent: FC = () => {
  return (
    <div className={style.rightTop}>
      <div className="user">Hi, guest</div>
      <Avatar src="https://avatars1.githubusercontent.com/u/8186664?s=460&v=4" />
    </div>
  )
}

export default RightTopContent
