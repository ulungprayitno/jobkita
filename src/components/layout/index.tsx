import React, { useState } from 'react';
import { Layout, Row, Col } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { Header } from 'antd/lib/layout/layout';
import Menu from './menu';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { MenuOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const { Content } = Layout;

interface IProps {
  children: React.ReactNode;
  header?: {
    left?: React.ReactNode;
    right?: React.ReactNode;
  };
}

const LayoutComponent = (props: IProps) => {
  const mq = useBreakpoint();
  const { children, header } = props;
  const [collapsed, setCollapsed] = useState<boolean>(true);
  return (
    <Layout>
      {mq.lg ? (
        <></>
      ) : (
        <Sider
          breakpoint="lg"
          width={230}
          collapsedWidth={0}
          theme="light"
          collapsed={collapsed}
          onCollapse={(collapse) => {
            setCollapsed(collapse);
          }}
          trigger={collapsed ? <MenuOutlined /> : <ArrowLeftOutlined />}
        >
          {header?.left ? header.left : <Menu />}
        </Sider>
      )}
      <Layout>
        <Header>
          <Row>
            <Col xs={0} lg={16}>
              {header?.left ? header.left :  <Menu />}
            </Col>
          </Row>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
