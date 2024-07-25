import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./BookingCalendar.css"

const bookedDates = [
  {
    day: 19, // Day of the month
    hours: [
      {
        start: 'Fri Jul 19 2024 00:00:00 GMT+0400 (Georgia Standard Time)',
        end: 'Fri Jul 19 2024 00:10:00 GMT+0400 (Georgia Standard Time)'
      },
      {
        start: 'Fri Jul 19 2024 17:10:00 GMT+0400 (Georgia Standard Time)',
        end: 'Fri Jul 19 2024 18:10:00 GMT+0400 (Georgia Standard Time)'
      }
    ]
  },

  {
    day: 21, // Day of the month
    hours: [
      {
        start: 'Fri Jul 21 2024 00:00:00 GMT+0400 (Georgia Standard Time)',
        end: 'Fri Jul 21 2024 00:10:00 GMT+0400 (Georgia Standard Time)'
      },
      {
        start: 'Fri Jul 21 2024 17:10:00 GMT+0400 (Georgia Standard Time)',
        end: 'Fri Jul 21 2024 18:10:00 GMT+0400 (Georgia Standard Time)'
      }
    ]
  },
];

const BookingCalendar = () => {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleChange = (date: any) => {
    setStartDate(date);
    console.log(date);
  };

  const handleChangeEndDate = (date: any) => {
    setEndDate(date);
    console.log(date);
  };

  // Helper function to parse date strings
  const parseDateString = (dateString: string) => new Date(dateString);

  // Custom function to disable specific times based on bookedDates array
  const filterTime = (time: Date) => {
    const date = new Date(time);
    const day = date.getDate();
    const bookedDay = bookedDates.find(booked => booked.day === day);

    if (bookedDay) {
      return bookedDay.hours.every(hourRange => {
        const start = parseDateString(hourRange.start);
        const end = parseDateString(hourRange.end);
        return date < start || date >= end;
      });
    }

    return true;
  };


  return (
    <div className='calendars'>
    <DatePicker
      id="datePicker"
      selected={startDate}
      placeholderText='Choose Date'
      onChange={handleChange}
      className="custom-date-picker"
      showTimeSelect
      timeIntervals={5}
      timeCaption="საათი"
      timeFormat="HH:mm"
      dateFormat="MMMM d, yyyy, h:mm"
      minDate={new Date()}
      isClearable
      filterTime={filterTime} // Apply custom time filter
    />
<DatePicker
      id="datePicker"
      selected={endDate}
      placeholderText='Choose Date'
      onChange={handleChangeEndDate}
      className="custom-date-picker"
      showTimeSelect
      timeIntervals={5}
      timeCaption="საათი"
      timeFormat="HH:mm"
      dateFormat="MMMM d, yyyy, h:mm"
      minDate={new Date()}
      isClearable
      filterTime={filterTime} // Apply custom time filter
    />
    </div>
  )
}

export default BookingCalendar
