import React, { useState, useEffect } from 'react';
import './AdventCalendar.css';
import { useUserIdentification } from '../hooks/useUserIdentification';
import { UserProgress } from '../models/UserProgress';

const AdventCalendar: React.FC = () => {
  const userId = useUserIdentification();
  const [openedDoors, setOpenedDoors] = useState<number[]>([]);

  useEffect(() => {
    if (userId) {
      const savedProgress = localStorage.getItem(`advent_calendar_${userId}`);
      if (savedProgress) {
        try {
          const parsedProgress: UserProgress = JSON.parse(savedProgress);
          setOpenedDoors(parsedProgress.openedDoors);
        } catch (e) {
          console.error("Failed to parse user progress", e);
        }
      }
    }
  }, [userId]);

  const toggleDoor = (day: number) => {
    if (!userId) return;

    let newOpenedDoors = openedDoors;
    if (openedDoors.includes(day)) {
      // Optional: allow closing? For now, let's just keep it open or toggle
      // newOpenedDoors = openedDoors.filter(d => d !== day);
    } else {
      newOpenedDoors = [...openedDoors, day];
      setOpenedDoors(newOpenedDoors);
    }

    localStorage.setItem(`advent_calendar_${userId}`, JSON.stringify({ openedDoors: newOpenedDoors }));
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
      <div className="reset-container">
        <button className="reset-button" onClick={() => {
          if (userId) {
            localStorage.removeItem(`advent_calendar_${userId}`);
            setOpenedDoors([]);
          }
        }}>
          Reset Progress
        </button>
      </div>
    </div>
  );
};

export default AdventCalendar;
