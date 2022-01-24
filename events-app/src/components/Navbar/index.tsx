import React, { FC } from 'react';
import { Layout, Menu, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import { RouteNames } from 'routes';
import Logo from 'assets/images/logo.png'
import { useTypedSelector } from 'hooks/useTypedSelector';
import { AuthActionCreators } from 'store/reducers/auth/action-creators';
import { useDispatch } from 'react-redux';

const Navbar: FC = () => {
  const { Header } = Layout;
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuth } = useTypedSelector(state => state.auth);

  return (
    <Layout>
      <Header className="header">
        <Row justify='space-between'>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <Menu theme="dark" mode="horizontal" selectable={false} style={{ marginRight: '5px' }}>
            {isAuth && (
              <>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">News</Menu.Item>
                <Menu.Item key="3" onClick={() => dispatch(AuthActionCreators.logout())}>Logout</Menu.Item>
              </>
            )}
            {!isAuth && (
              <Menu.Item style={{ marginRight: '5px' }} key="4" onClick={() => history.push(RouteNames.LOGIN)}>Login</Menu.Item>
            )}
          </Menu>
        </Row>
      </Header>
    </Layout>
  )
};

export default Navbar;
