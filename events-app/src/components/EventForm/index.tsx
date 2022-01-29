import React, { ChangeEvent, FC, useState } from 'react';
import { Button, DatePicker, Form, Input, Select } from 'antd';
import { rules } from 'utils/rules';
import { IUser } from 'models/IUser';
import { IEvent } from 'models/IEvent';
import { Moment } from 'moment';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { formatDate } from 'utils/dates';

interface EventFormProps {
  guests: IUser[],
  submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = (props) => {
  const { Option } = Select;
  const { user } = useTypedSelector(state => state.auth)
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: ''
  } as IEvent)

  const handleSelectChange = (guest: string) => {
    setEvent({ ...event, guest });
  }
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEvent({ ...event, description: e.target.value })
  }
  const handleDateChange = (date: Moment | null) => {
    setEvent({ ...event, date: formatDate(date) })
  }

  const submitForm = () => {
    props.submit({ ...event, author: user.username });
  }

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        name="description"
        label="Event Description"
        rules={[rules.required()]}
      >
        <Input
          placeholder='Description'
          value={event.description}
          onChange={handleInputChange}
        />
      </Form.Item>
      <Form.Item
        name="date"
        label="Event Date"
        rules={[rules.required()]}
      >
        <DatePicker
          style={{ width: "100%" }}
          onChange={handleDateChange}
        />
      </Form.Item>

      <Form.Item
        name="guest"
        label="Choose guest"
        rules={[rules.required()]}
      >
        <Select style={{ width: "100%" }} onChange={handleSelectChange}>
          {props.guests.map(guest =>
            <Option key={guest.username} value={guest.username}>{guest.username}</Option>
          )}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EventForm;
