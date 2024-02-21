import EventCard from "./EventCard";
import { useState, useEffect, use, Key } from "react";

export default function Events() {
  const [events, setEvents] = useState<any>(null);

  useEffect(() => {
    try {
      fetch(
        "https://www.googleapis.com/calendar/v3/calendars/c_a4b72545aacd2a318972fc1665d92f5b2dc515fd4fe35fe1b2378ead6d19edba%40group.calendar.google.com/events?key=AIzaSyAl-mMCiRKfXONOwLo6dh9HiQOsr6vCps0"
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.items) return;
          const upcomingEvents = data.items.filter(
            (event: { start: { dateTime: string } }) =>
              new Date(event.start.dateTime) > new Date()
          );
          setEvents(upcomingEvents);
        });
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-20 text-center">
        Upcoming Events
      </h1>
      <div className="flex flex-row flex-wrap gap-10 justify-center">
        {events && events.length > 0 ? (
          events.map(
            (event: {
              id: Key | null | undefined;
              summary: string;
              start: { dateTime: string };
              description: string;
              htmlLink: string;
            }) => (
              <EventCard
                key={event.id}
                title={event.summary}
                date={
                  new Date(event.start.dateTime).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }) +
                  " @ " +
                  new Date(event.start.dateTime).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })
                }
                description={
                  event.description
                    ? event.description.slice(0, 250) + "..."
                    : ""
                }
                link={event.htmlLink}
              />
            )
          )
        ) : (
          <p className="text-2xl font-extralight">
            No upcoming events at this time. Please check back later!
          </p>
        )}
      </div>
    </div>
  );
}
