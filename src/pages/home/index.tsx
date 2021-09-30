/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Col, Row, Typography } from 'antd';
import Layout from '../../components/layout';


const { Text } = Typography;

const HomePage = () => {

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
          </Col>
        </Row>
      </section>
     
    </Layout>
  );
};


export default HomePage;
