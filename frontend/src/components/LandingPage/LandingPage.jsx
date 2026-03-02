import React from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';

export default function LandingPage({ onEnter }) {
    return (
        <div className="landing-page">
            <div className="landing-content">
                <motion.div
                    className="landing-hero"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="landing-logo">
                        <span className="logo-icon">📚</span>
                        <h1>ClassbookAI</h1>
                    </div>
                    <h2 className="landing-tagline">
                        Your Personal AI Tutor for Perfect Grades
                    </h2>
                    <p className="landing-description">
                        Upload your textbooks, practice with interactive quizzes, and talk to your personal tutor. Master any subject with AI-powered study sessions.
                    </p>

                    <div className="landing-features">
                        <div className="feature">
                            <div className="feature-image">
                                <img src="/assets/voice_tutor.png" alt="Voice Tutor Interface" />
                            </div>
                            <div className="feature-text">
                                <span className="feature-icon">🗣️</span>
                                <h3>Live Voice Tutor</h3>
                                <p>Practice with real-time conversations in English, Spanish, German, Hindi, Urdu, and Arabic. The AI tutor listens, understands context, and guides you through complex topics.</p>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="feature-image">
                                <img src="/assets/visuals.png" alt="Visual Explanations" />
                            </div>
                            <div className="feature-text">
                                <span className="feature-icon">🎨</span>
                                <h3>Automatic Visuals</h3>
                                <p>The tutor automatically generates diagrams, charts, and image references while explaining math or science concepts to help you visualize difficult material.</p>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="feature-image">
                                <img src="/assets/assessment.png" alt="Assessment Center" />
                            </div>
                            <div className="feature-text">
                                <span className="feature-icon">📝</span>
                                <h3>Smart Assessments</h3>
                                <p>Test your knowledge with AI-generated quizzes and flashcards based exactly on the textbook pages you are currently reading.</p>
                            </div>
                        </div>
                    </div>

                    <motion.button
                        className="landing-cta"
                        onClick={onEnter}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Learning Now
                    </motion.button>
                </motion.div>
            </div>

            <div className="landing-background-elements">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
            </div>
        </div>
    );
}
