import React from 'react';

function NavBar({ handlePageChange }) {
    return (
        <div classname = "nav-bar">
        <div className = "nav-buttons">
            <button type="button" onclick={() => handlePageChange('Home')}>Home</button>
            <button type="button" onclick={() => handlePageChange('Work')}>Work</button>
            <button type="button" onclick={() => handlePageChange('Contact')}>Contact</button>
        </div>
        </div>
    )
};
    
module.exports = NavBar;