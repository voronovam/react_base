import { Table } from 'antd';
import { useCrypto } from "../context/crypto-context.jsx";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        showSorterTooltip: { target: 'full-header' },
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'Jim',
                value: 'Jim',
            },
            {
                text: 'Submenu',
                value: 'Submenu',
                children: [
                    {
                        text: 'Green',
                        value: 'Green',
                    },
                    {
                        text: 'Black',
                        value: 'Black',
                    },
                ],
            },
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
    },
    {
        title: 'Price, $',
        dataIndex: 'price',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.price - b.price,
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.amount - b.amount,
    },
]

export default function AssetsTable() {
    const {assets} = useCrypto()

    const data = assets.map((asset) => ({
        key: asset.id,
        name: asset.name,
        price: asset.price,
        amount: asset.amount,
    }))

    return (
        <div style={{marginTop: 24, marginBottom: 24}}>
            <Table
                columns={columns}
                dataSource={data}
                showSorterTooltip={{ target: 'sorter-icon' }}
                pagination={false}
            />
        </div>
    )
}