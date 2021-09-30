import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Typography } from 'antd';
import Layout from '../../components/layout';
import { useGetDetailJob } from '../../hooks/jobs/useGetDetailJob';

const JobDetail = () => {
  const { companySlug, jobSlug } = useParams<{ companySlug: string, jobSlug: string }>();

  useGetDetailJob(companySlug, jobSlug)
  
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
