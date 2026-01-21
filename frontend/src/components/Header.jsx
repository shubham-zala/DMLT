import React from 'react';
import { Microscope } from 'lucide-react';

const Header = () => {
    return (
        <header className="app-header">
            <div className="logo-container">
                <Microscope size={32} className="logo-icon" />
                <h1>DMLT Viva Prep</h1>
            </div>
            <p className="subtitle">Master Lab Concepts & Ace Your Exams</p>
        </header>
    );
};

export default Header;
