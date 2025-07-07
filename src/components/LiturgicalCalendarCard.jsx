// LiturgicalCalendarCard.jsx
import React from 'react';

export default function LiturgicalCalendarCard({ events }) {
  const todayStr = new Date().toDateString();

  return (
    <section className="calendar-section">
      <h3>📅 Tetiandro Litorjika</h3>
      <div className="horizontal-event-list">
        {events?.length > 0 ? (
          events.map((event, i) => {
            const date = new Date(event.date);
            const isToday = date.toDateString() === todayStr;
            return (
              <div
                key={i}
                className={`event-card ${isToday ? 'highlight' : ''}`}
              >
                {isToday && <span className="today-badge">Anio</span>}
                <div className="event-header">{event.title}</div>
                <div className="event-date">{event.date}</div>
                <div className="event-description">{event.description}</div>
              </div>
            );
          })
        ) : (
          <p>Tsy misy hetsika</p>
        )}
      </div>
    </section>
  );
}
