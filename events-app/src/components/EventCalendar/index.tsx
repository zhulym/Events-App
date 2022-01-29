import React, { FC } from 'react';
import { Calendar } from 'antd';
import { IEvent } from 'models/IEvent';
import { Moment } from 'moment';
import { formatDate } from 'utils/dates';

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props) => {
  function dateCellRender(value: Moment) { // all components Antd works with Moment library
    const formateDate = formatDate(value);
    const currentDayEvents = props.events.filter(e => e.date === formateDate);

    return (
      <div>
        {currentDayEvents.map((e, i) => (
          <div key={i}>{e.description}</div>
        ))}
      </div>
    );
  }

  return <Calendar dateCellRender={dateCellRender} />
};

export default EventCalendar;
