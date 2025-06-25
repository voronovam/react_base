import { Flex, Typography } from "antd";

export default function CoinInfo({coin, wSymbol}) {
    return (
        <Flex align='center'>
            <img src={coin.icon} alt={coin.name} style={{width: 40, marginRight: 8}} />
            <Typography.Title level={2} style={{margin: 0}}>
                {wSymbol && <span>({coin.symbol})</span> } {coin.name}
            </Typography.Title>
        </Flex>
    )
}