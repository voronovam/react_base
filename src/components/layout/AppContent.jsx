import { Layout } from 'antd';
const { Content } = Layout;

const contentStyle = {
    minHeight: 120,
    lineHeight: '120px',
    padding: '16px'
};

export default function AppContent({children}) {
    return (
        <Content style={contentStyle}>{children}</Content>
    )
}