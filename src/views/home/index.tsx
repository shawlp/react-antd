import React, { FC } from 'react'
import { PageContainer } from '@ant-design/pro-layout'
import QueryTable from './QueryTable'
import styles from './index.less'

const Home: FC = () => {
  return (
    <PageContainer>
      <div className={styles.home}>
        <QueryTable />
      </div>
    </PageContainer>
  )
}

export default Home
