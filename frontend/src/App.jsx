import React, { useState } from 'react';
import Header from './components/Header';
import TopicInput from './components/TopicInput';
import ResultCard from './components/ResultCard';
import { explainTopic } from './services/api';
import './index.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (topic) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const result = await explainTopic(topic);
      setData(result);
    } catch (err) {
      setError(err.error || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Header />
      <TopicInput onSearch={handleSearch} isLoading={loading} />

      {error && (
        <div className="card" style={{ background: '#fef2f2', borderColor: '#fecaca', color: '#dc2626' }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      <ResultCard data={data} />
    </div>
  );
}

export default App;
