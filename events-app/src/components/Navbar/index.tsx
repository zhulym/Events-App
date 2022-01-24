// libraries
import React, { FC } from 'react';
import { Layout, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';
// static
import { RouteNames } from 'routes';
import Logo from 'assets/images/logo.png'
// store
import { useTypedSelector } from 'hooks/useTypedSelector';
import { AuthActionCreators } from 'store/reducers/auth/action-creators';
import { useDispatch } from 'react-redux';
// styles
import styles from './Navbar.module.scss';

const Navbar: FC = () => {
  const { Header } = Layout;
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuth, user } = useTypedSelector(state => state.auth);

  return (
    <Layout>
      <Header className="header">
        <Row justify='space-between'>
          <div >
            <img src={Logo} alt="logo" />
          </div>

          <div className={styles.user__container}>
            {isAuth && (
              <>
                <span className={classnames(styles.nav__item, styles.user)}>{user.username}</span>
                <span className={styles.nav__item} onClick={() => dispatch(AuthActionCreators.logout())}>
                  Logout
                </span>
              </>
            )}
            {!isAuth && (
              <span className={styles.nav__item} onClick={() => history.push(RouteNames.LOGIN)}>
                Sign Up
              </span>
            )}
          </div>
        </Row>
      </Header>
    </Layout>
  )
};

export default Navbar;
