import React from 'react';
import { Row, Col, Typography, Form, Button, Input, notification } from 'antd';
import Layout from '../../components/layout';
import { useCreateJob } from '../../hooks/jobs/useCreateJob';

const {Text} = Typography

const AddJob = () => {
  const createJob = useCreateJob();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    createJob({ variables: { input: { title: values.position, commitmentId: 'cjtu8esth000z0824x00wtp1i', companyName: values.companyName, locationNames: values.companyAddress, userEmail: '-', description: values.description, applyUrl: '-'  } } });
    
    notification['success']({
      message: 'Create Data Success',
      description:
        'Data has been created.',
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout>
      <Row justify="center" align="middle">
        <Col xs={24} lg={12} md={12} className="p-4">
          <Row className="mb-2" justify="start">
            <Text className="text-center text-var-montserrat text-weight-bold text-size-24 text-height-30">
              Post Your Job
            </Text>
          </Row>

          <Row>
            <Col span={24}>
            <Form
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="companyName"
                rules={[{ required: true, message: 'Please input Company Name' }]}
              >
                <Input size='large' placeholder='Input Company Name' />
              </Form.Item>

              <Form.Item
                name="companyAddress"
                rules={[{ required: true, message: 'Please input Company Address' }]}
              >
                <Input.TextArea size='large' placeholder='Input Company Address'  autoSize={{ minRows: 3 }}/>
              </Form.Item>

              <Form.Item
                name="position"
                rules={[{ required: true, message: 'Please input Position' }]}
              >
                <Input size='large' placeholder='Input Position' />
              </Form.Item>

              <Form.Item
                name="description"
                rules={[{ required: true, message: 'Please input Description' }]}
              >
                <Input.TextArea size='large' placeholder='Input Description' autoSize={{ minRows: 3 }} />
              </Form.Item>

              <Form.Item>
              <Row justify='end'>
                <Col xs={24} md={8} lg={8}>
                <Button block type="primary" htmlType="submit"size='large'>
                  Submit
                </Button>
                </Col>
              </Row>
              </Form.Item>
            </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default AddJob;
