import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Typography, Avatar, List, Button } from 'antd';
import Layout from '../../components/layout';
import { useGetDetailJob } from '../../hooks/jobs/useGetDetailJob';
import moment from 'moment';

const { Text } = Typography

const JobDetail = () => {
  const { companySlug, jobSlug } = useParams<{ companySlug: string, jobSlug: string }>();

  const job = useGetDetailJob({ variables: { input: { companySlug: companySlug.toString(), jobSlug: jobSlug.toString()} } });

  return (
    <Layout>
      <Row justify="center" align="middle">
      <Col xs={24} lg={12} md={12} className="p-4">
          <Row className="mb-2" justify="start">
            <Col span={24}>
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={job?.company.logoUrl ? job?.company.logoUrl : 'https://i.ibb.co/kVLw4RG/company-logo.png'} size={80}/>}
                title={<Text className='text-center text-var-montserrat text-weight-bold text-size-24 text-height-30'>{job?.title}</Text>}
                description={
                  <Row>
                    <Col span={24}>
                      <Row>
                        <Text className='text-center text-var-montserrat text-size-14 text-height-20'>{job?.company.name}</Text>
                      </Row>
                      <Row className='mb-1'>
                        <Text className='text-center text-var-montserrat text-size-14 text-height-20'>{moment(new Date(job?.postedAt!)).format('DD MMM YYYY hh:mm')}</Text>
                      </Row>
                      <Row>
                      <Col xs={24} md={12} lg={8}>
                      <Button type='primary' size='large' block>Apply Job</Button>
                      </Col> 
                      </Row>
                    </Col>
                  </Row>
                }
              />
            </List.Item>
            </Col>
          </Row>
          <Row className="mb-2" justify="start">
            <Text className="text-center text-var-montserrat text-weight-bold text-size-24 text-height-30">
              Description
            </Text>
          </Row>
          <Row className="mb-2" justify="start">
            <Text className="text-size-14 text-height-21">
              {job?.description}
            </Text>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default JobDetail;
