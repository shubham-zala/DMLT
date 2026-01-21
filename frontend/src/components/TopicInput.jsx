import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';

const TopicInput = ({ onSearch, isLoading }) => {
    const [topic, setTopic] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (topic.trim()) {
            onSearch(topic);
        }
    };

    return (
        <div className="input-section">
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter topic (e.g., ESR, Hemoglobin)..."
                    disabled={isLoading}
                    className="topic-input"
                />
                <button type="submit" disabled={isLoading || !topic.trim()} className="search-button">
                    {isLoading ? (
                        <Loader2 className="animate-spin" size={20} />
                    ) : (
                        <Search size={20} />
                    )}
                    <span>Explain</span>
                </button>
            </form>
        </div>
    );
};

export default TopicInput;
