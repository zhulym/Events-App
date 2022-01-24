import { Layout, Row } from 'antd';
import React, { FC } from 'react';
import LoginForm from './../components/LoginForm/index';

const Login: FC = () => {
  return (
    <Layout>
      <Row justify='center' align='middle' className='h100'>
        <LoginForm />
      </Row>
    </Layout>
  )
};

export default Login;
