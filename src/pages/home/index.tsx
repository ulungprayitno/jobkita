/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Col, Row, Typography, List, Avatar, Input, Button, Tag, Select } from 'antd';
import Layout from '../../components/layout';
import { useGetJobs } from '../../hooks/jobs/useGetJobs';

import { SearchOutlined } from '@ant-design/icons';


const { Text } = Typography;
const { Option } = Select

const HomePage = () => {
  const [sorting, setSorting] = useState<string>('postedAt_DESC')
  const jobs = useGetJobs();
  
  const changeOrder = (value: string) => {
    setSorting(value)
  }

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
              <Col xs={24} md={14} lg={18}>
                <Row gutter={[16, 16]} justify='center'>
                  <Col md={12} lg={4} xs={12} > 
                    <Input
                      type="text" 
                      size='large'
                      placeholder='Company'
                    />
                  </Col>
                  <Col md={12} lg={4} xs={12} >
                    <Input
                      type="text" 
                      size='large'
                      placeholder='Position'
                    />
                   </Col>
                   <Col md={12} lg={4} xs={12} >
                    <Input
                      type="text" 
                      size='large'
                      placeholder='Location'
                    />
                   </Col>
                   <Col md={12} lg={4} xs={12} >
                  <Input
                      type="text" 
                      size='large'
                      placeholder='Tags'
                    />
                  </Col>
                  <Col sm={24} lg={4} xs={24} >
                    <Button type="primary" block icon={<SearchOutlined />} size='large' className='ph-1'>
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
              <Col span={12}>
                <Text className="text-center text-var-montserrat text-weight-bold text-size-24 text-height-30">
                  Jobs
                </Text>
              </Col>
              <Col span={12}>
                <Row justify='end'>
                <Select defaultValue={sorting} style={{ width: 200 }} size='large' onChange={changeOrder}>
                    <Option value="postedAt_DESC">Newest to Oldest</Option>
                    <Option value="postedAt_ASC">Oldest to Newest</Option>
                  </Select>
                </Row>
              </Col>
            </Row>
            <List
             itemLayout="vertical"
             pagination={{
              showSizeChanger: false,
               pageSize: 5,
             }}
             dataSource={jobs}
              renderItem={item => (
                <List.Item className='use-pointer' onClick={() => window.location.href = `/${item.company.slug}/${item.slug}` }>
                  <List.Item.Meta
                    avatar={<Avatar src={item.company.logoUrl ? item.company.logoUrl : 'https://i.ibb.co/kVLw4RG/company-logo.png'} size={80}/>}
                    title={<Text className='text-size-18 text-weight-medium'>{item.title}</Text>}
                    description={
                      <Row className='mt-0'>
                        <Col span={24}>
                          <Row className='mt-0'>
                            <Text className='text-center text-var-montserrat text-weight-medium text-size-18 text-height-20'>{item?.company.name}</Text>
                          </Row>
                          <Row className='mb-1'>
                            <Text className='text-center text-var-montserrat text-size-14 text-height-20'>{item?.locationNames ?  item.locationNames : '-'}</Text>
                          </Row>
                          <Row>
                          <Row>
                            {item.tags?.map((tg, idx) => (
                              <Tag key={idx}>{tg.name}</Tag>
                            ))}
                          </Row>
                          </Row>
                        </Col>
                      </Row>
                    }
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
