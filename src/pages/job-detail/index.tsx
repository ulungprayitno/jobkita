import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Typography } from 'antd';
import Layout from '../../components/layout';

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id)
  
  return (
    <Layout>
      <Row justify="center" align="middle">
        <Col span={24} className="p-4">
          <Row justify="center">
            <Typography.Text className="text-center">Halaman tidak ditemukan.</Typography.Text>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default JobDetail;
