import React from 'react';

export function About({ userName, authState, onAuthChange }) {
  return (
    <main>
      <div>
      <img src="https://images.unsplash.com/photo-1687102618656-907b757ad5d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBpY2tsZWJhbGx8ZW58MHx8MHx8fDA%3D" alt="Pickleball"/>
      <p>
        Picklr is an application to connect pickleball players based on their rankings. After playing with a picklr user in person, you will be able to rank them on a scale from 1-5. Enjoy pickling!
      </p>
    </div>
    </main>
  );
}
