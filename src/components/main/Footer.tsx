import React from 'react'
import { Layout } from 'antd'

import { styleFooter } from '../styles'

const FooterComponent: React.FC = () => {
    const { Footer } = Layout

    return (
        <Footer style={styleFooter}>
            @mspuz 2023
        </Footer>
    )
}

export default FooterComponent