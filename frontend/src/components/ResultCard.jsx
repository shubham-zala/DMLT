import React from 'react';
import { BookOpen, AlertTriangle, HelpCircle, Image as ImageIcon, Zap, AlertOctagon, GraduationCap, CheckCircle } from 'lucide-react';

const ResultCard = ({ data }) => {
    if (!data) return null;

    return (
        <div className="result-container fade-in">
            <div className="topic-header">
                <h2 className="topic-title">{data.topic}</h2>
                {data.difficulty_level && (
                    <span className={`badge ${data.difficulty_level.toLowerCase()}`}>
                        {data.difficulty_level}
                    </span>
                )}
            </div>

            {/* Detailed Explanation */}
            <div className="card explanation-card">
                <div className="card-header">
                    <BookOpen className="icon" size={24} />
                    <h3>Detailed Explanation</h3>
                </div>
                <p>{data.detailed_explanation}</p>
            </div>

            {/* Viva Answer Format (Definition/Principle) */}
            {data.viva_answer_format && (
                <div className="card viva-format-card">
                    <div className="card-header">
                        <GraduationCap className="icon" size={24} />
                        <h3>Viva Quick Answer Guide</h3>
                    </div>
                    <div className="viva-grid">
                        <div className="viva-box">
                            <strong>Definition:</strong>
                            <p>{data.viva_answer_format.definition}</p>
                        </div>
                        <div className="viva-box">
                            <strong>Principle:</strong>
                            <p>{data.viva_answer_format.principle}</p>
                        </div>
                        <div className="viva-box">
                            <strong>Normal Values:</strong>
                            <p>{data.viva_answer_format.normal_values}</p>
                        </div>
                        <div className="viva-box">
                            <strong>Clinical Importance:</strong>
                            <p>{data.viva_answer_format.clinical_importance}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Diagram Reference */}
            {data.diagram_reference && (
                <div className="card diagram-card">
                    <div className="card-header">
                        <ImageIcon className="icon" size={24} />
                        <h3>Diagram Reference</h3>
                    </div>
                    <div className="diagram-content">
                        <p><strong>Explain to Draw:</strong> {data.diagram_reference.what_to_draw}</p>

                        <div className="labels-section">
                            <strong>Labels to Include:</strong>
                            <div className="tags">
                                {data.diagram_reference.labels_to_include && data.diagram_reference.labels_to_include.map((label, idx) => (
                                    <span key={idx} className="tag">{label}</span>
                                ))}
                            </div>
                        </div>

                        <div className="tips-section">
                            <strong>Examiner Tips:</strong>
                            <ul>
                                {data.diagram_reference.exam_drawing_tips && data.diagram_reference.exam_drawing_tips.map((tip, idx) => (
                                    <li key={idx}>{tip}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            <div className="grid-layout">
                {/* Viva Questions */}
                <div className="card viva-card">
                    <div className="card-header">
                        <HelpCircle className="icon" size={24} />
                        <h3>Viva Questions</h3>
                    </div>
                    <ul className="list-none space-y-4">
                        {data.viva_questions.map((item, idx) => (
                            <li key={idx} className={`viva-item ${item.importance === 'most_asked' ? 'important' : ''}`}>
                                <div className="q-header">
                                    <span className="q-num">Q{idx + 1}</span>
                                    {item.importance === 'most_asked' && <span className="badge-star">⭐ Most Asked</span>}
                                </div>
                                <p className="font-semibold text-primary">{item.question}</p>
                                <p className="text-gray-600 mt-1"><em>Ans:</em> {item.answer}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="right-column">
                    {/* Quick Revision Points */}
                    {data.quick_revision_points && (
                        <div className="card revision-card">
                            <div className="card-header">
                                <Zap className="icon" size={24} />
                                <h3>Quick Revision</h3>
                            </div>
                            <ul className="check-list">
                                {data.quick_revision_points.map((pt, idx) => (
                                    <li key={idx}><CheckCircle size={16} /> {pt}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Examiner Traps */}
                    {data.examiner_traps && (
                        <div className="card trap-card">
                            <div className="card-header">
                                <AlertOctagon className="icon" size={24} />
                                <h3>Examiner Traps</h3>
                            </div>
                            <ul className="trap-list">
                                {data.examiner_traps.map((trap, idx) => (
                                    <li key={idx}>⚠️ {trap}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Common Mistakes */}
                    <div className="card mistakes-card">
                        <div className="card-header">
                            <AlertTriangle className="icon" size={24} />
                            <h3>Common Mistakes</h3>
                        </div>
                        <ul className="list-warning">
                            {data.common_mistakes.map((m, idx) => (
                                <li key={idx}>{m}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultCard;
