import { Layout, Typography } from 'antd';
import { useCrypto } from "../../context/crypto-context.jsx";
import AssetsChart from "../AssetsChart.jsx";
import AssetsTable from "../AssetsTable.jsx";

const contentStyle = {
    minHeight: 120,
    padding: '16px'
};

export default function AppContent({children}) {
    const { assets, crypto } = useCrypto()

    const cryptoPriceMap = crypto.reduce((acc, c) => {
        acc[c.id] = c.price
        return acc
    }, {})

    return (
        <Layout.Content style={contentStyle}>
            <Typography.Title level={3}>
                Portfolio: {assets
                .map((asset) => asset.amount * cryptoPriceMap[asset.id])
                .reduce((acc, v) => (acc += v), 0)
                .toFixed(2)}$
            </Typography.Title>

            <AssetsChart />
            <AssetsTable />
            {children}
        </Layout.Content>
    )
}