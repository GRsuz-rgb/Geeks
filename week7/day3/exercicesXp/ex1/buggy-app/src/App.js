import React from 'react';
import BuggyCounter from './Component/BuggyCounter';
import ErrorBoundary from './Component/ErrorBoundary';

function App() {
  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
      
      {/* ---------- SIMULATION 1 ---------- */}
      <h1>Simulation 1: Both counters in ONE ErrorBoundary</h1>
      <p>Click on the numbers to increase the counters. If one reaches 5, BOTH will crash.</p>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <p style={{ fontStyle: 'italic' }}>
        These two counters are wrapped in the same Error Boundary. So if one crashes, both are replaced.
      </p>

      <hr />

      {/* ---------- SIMULATION 2 ---------- */}
      <h1>Simulation 2: Each counter has its OWN ErrorBoundary</h1>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <p style={{ fontStyle: 'italic' }}>
        These counters are each inside their own Error Boundary. If one crashes, the other is not affected.
      </p>

      <hr />

      {/* ---------- SIMULATION 3 ---------- */}
      <h1>Simulation 3: Counter without ErrorBoundary</h1>
      <BuggyCounter />
      <p style={{ fontStyle: 'italic' }}>
        This counter is not inside any Error Boundary. If it crashes, the entire app will crash.
      </p>
    </div>
  );
}

export default App;
