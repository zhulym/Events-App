import React, { FC, useEffect, useState } from 'react';
import { Button, Layout, Modal, Row } from 'antd';
import EventCalendar from 'components/EventCalendar';
import EventForm from 'components/EventForm';
import styles from './pages.module.scss';
import { EventActionCreators } from 'store/reducers/event/action-creators';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { IEvent } from 'models/IEvent';


const Event: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const { guests, events } = useTypedSelector(state => state.event);
  const { user } = useTypedSelector(state => state.auth);

  useEffect(() => {
    dispatch(EventActionCreators.fetchGuests())
    dispatch(EventActionCreators.fetchEvents(user.username))
  }, [dispatch, user]);

  const createNewEvent = (event: IEvent) => {
    setIsModalVisible(false);
    dispatch(EventActionCreators.createEvent(event));
  };

  return (
    <Layout className={styles.container}>
      <EventCalendar events={events} />
      <Row justify='center'>
        <Button className={styles.add__button} onClick={() => setIsModalVisible(true)}>Add Event</Button>
      </Row>
      <Modal
        title="Add New Event!"
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
      >
        <EventForm guests={guests} submit={createNewEvent} />
      </Modal>
    </Layout>
  )
};

export default Event;
