// libraries
import React, { useState } from 'react';
import { Button, Form, Input, Spin } from 'antd';
// store
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { AuthActionCreators } from 'store/reducers/auth/action-creators';
// utils
import { rules } from 'utils/rules';
// styles
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { error, isLoading } = useTypedSelector(state => state.auth);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    dispatch(AuthActionCreators.login(username, password));
  }

  if (isLoading) {
    return <Spin size="large" />
  }

  return (
    <Form
      name="basic"
      layout="vertical"
      autoComplete="off"
      onFinish={onSubmit}
      className={styles.container}
      initialValues={{ remember: true }}
    >
      <h2>LOGIN</h2>
      <Form.Item
        name="username"
        label="Username"
        rules={[rules.required('Please input your username!')]}
      >
        <Input value={username} onChange={e => setUserName(e.target.value)} size="large" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[rules.required('Please input your password!')]}
      >
        <Input.Password value={password} onChange={e => setPassword(e.target.value)} size="large" />
      </Form.Item>

      <Form.Item>

        {error && <div className={styles.error}>{error}</div>}

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
