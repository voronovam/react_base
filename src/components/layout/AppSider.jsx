import { Layout, Card, List, Statistic, Typography, Tag } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

import { capitalize } from "../../utils.js";
import { useContext } from "react";
import CryptoContext from "../../context/crypto-context.jsx";

const siderStyle = {
    padding: '16px'
};

export default function AppSider() {
    const { assets } = useContext(CryptoContext)

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