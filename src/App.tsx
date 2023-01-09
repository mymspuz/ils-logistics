import React  from 'react'
import { Layout, ConfigProvider, Col, Row } from 'antd'

import 'leaflet/dist/leaflet.css'
import 'antd/dist/reset.css'

import {
    HeaderComponent,
    FooterComponent,
    TableComponent,
    MapComponent,
    styleContent,
    styleMap
} from './components'

function App() {

    const { Content } = Layout

    return (
        <ConfigProvider
            theme={{
                token: {},
                components: {}
            }}
        >
            <Layout>
                <HeaderComponent />
                <Content style={styleContent}>
                    <Row>
                        <Col span={24}>
                            <TableComponent />
                        </Col>
                        <Col span={24} style={styleMap}>
                            <MapComponent />
                        </Col>
                    </Row>
                </Content>
                <FooterComponent />
            </Layout>
        </ConfigProvider>
    )
}

export default App