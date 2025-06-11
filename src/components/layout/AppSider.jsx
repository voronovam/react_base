import { Layout, Card, List, Statistic, Typography, Spin, Tag } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { fakeFetchCrypto, fetchAssets } from "../../api.js";
import { capitalize, percentDiff } from "../../utils.js";

const siderStyle = {
    padding: '16px'
};

export default function AppSider() {
    const [loading, setLoading] = useState(false)
    const [crypto, setCrypto] = useState([])
    const [assets, setAssets] = useState([])

    useEffect(()=> {
        async function preload() {
            setLoading(true)

            const {result} = await fakeFetchCrypto()
            const assets = await fetchAssets()

            setAssets(assets.map(asset => {
                const coin = result.find(c => c.id === asset.id)

                return {
                   grow: asset.price < coin.price, // boolean
                    growPercent: percentDiff(asset.price, coin.price),
                    totalAmount: asset.amount * coin.price,
                    totalProfit: asset.amount * coin.price - asset.amount * asset.price,
                    ...asset
                }
            }))
            setCrypto(result)

            setLoading(false)
        }
        preload()
    }, [])

    if(loading) {
        return <Spin fullscreen />
    }

    return (
        <Layout.Sider width="25%" style={siderStyle}>
            {assets.map(asset => (
                <Card key={asset.id} variant="borderless" style={{marginBottom: '16px'}} >
                    <Statistic
                        title={capitalize(asset.id)}
                        value={asset.totalAmount}
                        precision={2}
                        valueStyle={{ color: asset.grow ? '#3f8600' : '#cf1322' }}
                        prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                        suffix="$"
                    />
                    <List
                        bordered
                        dataSource={[
                            { title: 'Total Profit: ', value: asset.totalProfit, isTag: true },
                            { title: 'Asset Amount: ', value: asset.amount, isPlain: true },
                            //{ title: 'Difference: ', value: asset.growPercent },
                        ]}
                        size="small"
                        renderItem={(item) => (
                            <List.Item>
                                <span>{item.title}</span>
                                <span>
                                    { item.isTag && <Tag color={ asset.grow ? "green" : "red"}>{asset.growPercent}%</Tag> }
                                    { item.isPlain && item.value }
                                    { !item.isPlain && <Typography.Text type={asset.grow ? 'success' : 'danger'}>{item.value.toFixed(2)}$</Typography.Text> }
                                </span>
                            </List.Item>
                        )}
                    />
                </Card>

            ))}
        </Layout.Sider>
    )
}