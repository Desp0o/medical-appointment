import "./home.css";
import dayjs from 'dayjs';
import { DatePicker, DatePickerProps } from 'antd';
import { useState } from "react";

const range = (start: number, end: number) => Array.from({ length: end - start }, (_, i) => i + start);

type DisabledTimes = {
  [date: string]: {
    hours: number[];
    minutes?: number[];
    seconds?: number[];
  }
};

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const onChange: DatePickerProps['onChange'] = (date, dateStr) => {
    setSelectedDate(date ? dayjs(date) : dayjs());
    console.log('onChange:', dateStr);
  };

  // Custom disabledTime function to disable hours dynamically
  const disabledDateTime = (currentDate: dayjs.Dayjs | null) => {
    if (!currentDate) return { disabledHours: () => [], disabledMinutes: () => [], disabledSeconds: () => [] };

    const currentDateStr = currentDate.format('YYYY-MM-DD');
    
    // Define ranges for disabling times
    const disabledTimes: DisabledTimes = {
      "2024-07-19": { hours: range(3, 5), minutes: range(3, 5) },
      "2024-07-20": { hours: range(4, 13), minutes: range(30, 60) },
      "2024-07-21": { hours: range(15, 17) }
    };

    // Get the disabled hours and minutes based on the current date
    const disabledTime = disabledTimes[currentDateStr as keyof DisabledTimes] || {};

    return {
      disabledHours: () => disabledTime.hours || [],
      disabledMinutes: () => disabledTime.minutes || [],
      disabledSeconds: () => disabledTime.seconds || []
    };
  };

  return (
    <div className="home">
      <DatePicker
        defaultValue={selectedDate}
        showTime={{ format: 'HH:mm', hideDisabledOptions: false }}
        format="YYYY-MM-DD HH:mm"
        onChange={onChange}
        disabledTime={disabledDateTime}
      />
    </div>
  );
}

export default Home;
