import { Layout, Select, Space, Button, Modal, Drawer } from 'antd';
import TheHeader from "../TheHeader.jsx";
import { useCrypto } from "../../context/crypto-context.jsx";
import { useEffect, useState } from "react";
import CoinInfoModal from "../CoinInfoModal.jsx";
import AddAssetForm from "../AddAssetForm.jsx";

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: '100%',
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3d237e',
    gridGap: '24px'
};

export default function AppHeader() {
    const [select, setSelect] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [coin, setCoin] = useState(null)
    const [drawer, setDrawer] = useState(false);

    const {crypto} = useCrypto()

    useEffect(()=> {
        const keypress = event => {
            if(event.key === '/') {
                setSelect((prev) => !prev)
            }
        }
        document.addEventListener('keypress', keypress)
        return () => document.removeEventListener('keypress', keypress)
    }, [])



    function handleSelect(value) {
        setCoin(crypto.find(c => c.id === value))
        setIsModalOpen(true)
    }

    return (
    <Layout.Header style={headerStyle}>
        <div style={{display: 'flex', gridGap: '16px' }}>
            <Select
                style={{ width: 300}}
                open={select}
                onSelect={handleSelect}
                onClick={() => setSelect((prev) => !prev)}
                value='press / to open'
                options={crypto.map(coin => ({
                    label: coin.name,
                    value: coin.id,
                    icon: coin.icon,
                }))}
                optionRender={option => (
                    <Space>
                        <img src={option.data.icon} alt={option.data.label} />
                        <span>{option.data.label}</span>
                    </Space>
                )}
            />

            <Button type="primary" onClick={() => setDrawer(true)}>Add Asset</Button>

            <Modal
                open={isModalOpen}
                onCancel={() => setIsModalOpen((prev) => !prev)}
                footer={null}
            >
                <CoinInfoModal coin={coin} />
            </Modal>

            <Drawer
                title="Add Asset"
                width={600}
                onClose={() => setDrawer(false)}
                open={drawer}
                destroyOnHidden
            >
                <AddAssetForm onClose={() => setDrawer(false)} />
            </Drawer>
        </div>


        <TheHeader />
    </Layout.Header>
    )
}