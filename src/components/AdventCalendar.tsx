import React, { useState } from 'react';
import './AdventCalendar.css';

const AdventCalendar: React.FC = () => {
  const [openedDoors, setOpenedDoors] = useState<number[]>([]);

  const toggleDoor = (day: number) => {
    if (openedDoors.includes(day)) {
      // Optional: allow closing? For now, let's just keep it open or toggle
      // setOpenedDoors(openedDoors.filter(d => d !== day));
    } else {
      setOpenedDoors([...openedDoors, day]);
    }
  };

  // Generate 24 days
  const days = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <div className="advent-calendar">
      {days.map(day => (
        <div key={day} className="door-container" onClick={() => toggleDoor(day)}>
          <div className={`door ${openedDoors.includes(day) ? 'open' : ''}`}>
            <div className="door-front">
              {day}
            </div>
            <div className="door-back">
              <img 
                src={`https://picsum.photos/seed/${day}/300/300`} 
                alt={`Day ${day} surprise`} 
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdventCalendar;
