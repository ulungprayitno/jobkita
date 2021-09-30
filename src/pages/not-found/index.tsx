import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Typography, Button } from 'antd';
import Layout from '../../components/layout';

const NotFoundPage = () => {
  const history = useHistory();
  return (
    <Layout>
      <Row justify="center" align="middle">
        <Col span={24} className="p-4">
          <Row justify="center">
            <Typography.Text className="text-center">Halaman tidak ditemukan.</Typography.Text>
          </Row>
          <Row className="mv-2" justify="center">
            <Button type="primary" size="large" className="ph-3" onClick={() => history.push('/')}>
              Kembali ke Beranda
            </Button>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default NotFoundPage;
