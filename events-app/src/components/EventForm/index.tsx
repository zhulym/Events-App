import React, { FC } from 'react';
import { Button, DatePicker, Form, Input, Select } from 'antd';
import { rules } from '../../utils/rules';
import { IUser } from './../../models/IUser';

interface EventFormProps {
  guests: IUser[]
}

const EventForm: FC<EventFormProps> = (props) => {
  const { Option } = Select;

  return (
    <Form>
      <Form.Item
        name="description"
        label="Event Description"
        rules={[rules.required()]}
      >
        <Input placeholder='Description' />
      </Form.Item>
      <Form.Item
        name="date"
        label="Event Date"
        rules={[rules.required()]}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item>
        <Select style={{ width: "100%" }}>
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
