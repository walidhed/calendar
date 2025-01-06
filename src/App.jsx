import React, { useState } from 'react';
    import dayjs from 'dayjs';

    function App() {
      const [currentDate, setCurrentDate] = useState(dayjs());

      const handlePrevMonth = () => {
        setCurrentDate(currentDate.subtract(1, 'month'));
      };

      const handleNextMonth = () => {
        setCurrentDate(currentDate.add(1, 'month'));
      };

      const renderCalendar = () => {
        const startOfMonth = currentDate.startOf('month');
        const endOfMonth = currentDate.endOf('month');
        const days = [];

        for (let day = startOfMonth; day.isBefore(endOfMonth); day = day.add(1, 'day')) {
          days.push(day.format('D'));
        }

        return days.map((day, index) => (
          <div key={index} className="calendar-day">
            {day}
          </div>
        ));
      };

      return (
        <div className="calendar">
          <header>
            <button onClick={handlePrevMonth}>Previous</button>
            <h1>{currentDate.format('MMMM YYYY')}</h1>
            <button onClick={handleNextMonth}>Next</button>
          </header>
          <div className="calendar-grid">{renderCalendar()}</div>
        </div>
      );
    }

    export default App;
