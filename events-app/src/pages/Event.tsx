import React, { FC, useEffect, useState } from 'react';
import { Button, Layout, Modal, Row } from 'antd';
import EventCalendar from 'components/EventCalendar';
import EventForm from 'components/EventForm';
import styles from './pages.module.scss';
import { EventActionCreators } from './../store/reducers/event/action-creators';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'hooks/useTypedSelector';


const Event: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const { guests } = useTypedSelector(state => state.event); //

  useEffect(() => {
    dispatch(EventActionCreators.fetchGuests())
  }, [dispatch]);

  return (
    <Layout className={styles.container}>
      <EventCalendar events={{ // TODO: put right event into props
        author: 'string',
        guest: 'string',
        date: 'string',
        description: 'string',
      }} />
      <Row justify='center'>
        <Button className={styles.add__button} onClick={() => setIsModalVisible(true)}>Add Event</Button>
      </Row>
      <Modal
        title="Add New Event!"
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
      >
        <EventForm guests={guests} />
      </Modal>
    </Layout>
  )
};

export default Event;
