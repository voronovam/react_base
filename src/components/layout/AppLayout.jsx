import AppHeader from "./AppHeader.jsx";
import { Layout, Spin } from "antd";
import AppSider from "./AppSider.jsx";
import AppContent from "./AppContent.jsx";
import TabsSection from "../TabsSection.jsx";
import DataList from "../DataList.jsx";
import TabList from "../TabList.jsx";
import About from "../About.jsx";
import EffectSection from "../EffectSection.jsx";
import AppFooter from "./AppFooter.jsx";
import { useContext, useState } from "react";
import CryptoContext from "../../context/crypto-context.jsx";

export default function AppLayout() {
    const {loading} = useContext(CryptoContext)

    if(loading) {
        return <Spin fullscreen />
    }


    const [tab, setTab] = useState('effect')


    return (
        <Layout style={{ minHeight: '100vh' }}>
            <AppHeader />
            <Layout>
                <AppSider />
                <AppContent>
                    <TabsSection active={tab} onChange={ (current) => setTab(current)} />

                    {tab === 'home' && (
                        <>

                            <DataList />
                            <TabList/>
                        </>
                    )}

                    {tab === 'about' && (
                        <>
                            <About />
                        </>
                    )}

                    {tab === 'effect' && (
                        <>
                            <EffectSection />
                        </>
                    )}
                </AppContent>
            </Layout>
            <AppFooter />
        </Layout>
    )
}