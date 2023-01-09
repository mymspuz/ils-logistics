import React from 'react'
import { Layout } from 'antd'

import { styleHeader } from '../styles'

const HeaderComponent: React.FC = () => {
    const { Header } = Layout
    return (
        <Header style={styleHeader}>
            ILS Logistics
        </Header>
    )
}

export default HeaderComponent