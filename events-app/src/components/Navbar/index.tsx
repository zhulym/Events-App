import React, { FC } from 'react';
import { Layout, Menu, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import { RouteNames } from 'routes';
import Logo from 'assets/images/logo.png'
import { useTypedSelector } from 'hooks/useTypedSelector';

const Navbar: FC = () => {
  const { Header } = Layout;
  const history = useHistory();
  const { isAuth } = useTypedSelector(state => state.auth);

  return (
    <Layout>
      <Header className="header">
        <Row justify='space-between'>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <Menu theme="dark" mode="horizontal" selectable={false}>
            {isAuth && (
              <>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">News</Menu.Item>
                <Menu.Item key="3" onClick={() => console.log('Выйти')}>Logout</Menu.Item>
              </>
            )}
            {!isAuth && (
              <Menu.Item key="4" onClick={() => history.push(RouteNames.LOGIN)}>Login</Menu.Item>
            )}
          </Menu>
        </Row>
      </Header>
    </Layout>
  )
};

export default Navbar;
