/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Col, Row, Typography, List, Avatar, Input, Button } from 'antd';
import Layout from '../../components/layout';
import { useGetJobs } from '../../hooks/jobs/useGetJobs';

import { SearchOutlined } from '@ant-design/icons';


const { Text } = Typography;

const HomePage = () => {
  const jobs = useGetJobs();
  
  return (
    <Layout>
      <section id="home">
        <Row justify="center" align='middle' className="pv-4">
          <Col span={24}>
            <Row justify="center">
              <Text className="text-var-montserrat text-weight-bold text-size-72 text-color-white text-height-72">
                JobKita
                <sup>
                  <Text className="text-color-white text-size-18">by</Text>
                  <Text className="text-weight-bold text-size-18 text-color-second-blue ml--5">
                    Rukita
                  </Text>
                </sup>
              </Text>
            </Row>
            <Row justify="center" className='mt-2'>
              <Text className="text-color-white text-size-16">Finding your perfect job now easily and quickly</Text>
            </Row>
            <Row justify="center" className='mt-2 ph-2'>
              <Col xs={24} md={12} lg={12}>
                <Row gutter={[16, 16]} justify='center'>
                  <Col md={5} lg={5} xs={12} > 
                    <Input
                      type="text" 
                      size='large'
                      placeholder='Company'
                    />
                  </Col>
                  <Col md={5} lg={5} xs={12} >
                    <Input
                      type="text" 
                      size='large'
                      placeholder='Position'
                    />
                   </Col>
                   <Col md={5} lg={5} xs={12} >
                    <Input
                      type="text" 
                      size='large'
                      placeholder='Location'
                    />
                   </Col>
                   <Col md={5} lg={5} xs={12} >
                  <Input
                      type="text" 
                      size='large'
                      placeholder='Tags'
                    />
                  </Col>
                  <Col md={4} lg={4} xs={24} >
                    <Button type="primary" block icon={<SearchOutlined />} size='large'>
                      Search
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      <section id="job">
        <Row justify='center'>
          <Col xs={24} md={10} lg={10} className="p-2">
            <Row className="mb-2" justify="start">
              <Text className="text-center text-var-montserrat text-weight-bold text-size-24 text-height-30">
                Jobs
              </Text>
            </Row>
            <List
             itemLayout="vertical"
             pagination={{
              showSizeChanger: false,
               pageSize: 5,
             }}
             dataSource={jobs}
              renderItem={item => (
                <List.Item className='use-pointer' onClick={() => window.location.href = `/${item.id}` }>
                  <List.Item.Meta
                    avatar={<Avatar src={item.company.logoUrl ? item.company.logoUrl : 'https://i.ibb.co/kVLw4RG/company-logo.png'} size={80}/>}
                    title={<Text className='text-size-18 text-weight-medium'>{item.title}</Text>}
                    description={item.locationNames ? item.locationNames : '-'}
                  />
                  
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </section>
    </Layout>
  );
};


export default HomePage;
