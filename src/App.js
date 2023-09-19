import './App.css';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function App() {
    return (
        <div>
            <h1>Steve Drees</h1>
            <nav>
                <MenuIcon/>
                <AccountBoxIcon className={"accountIcon"}/>
            </nav>
            <div>

                <p>
                    <span id="fog">A long</span>
                    <span id="fog2">long time</span>
                    <span id="glow">ago,</span>
                    <span id="light">in a</span>
                    <span id="stars-large">galaxy</span>
                    <span id="stars-large2">far</span>
                    <span id="stars-small">far</span>
                    <span id="stars-small2">away…</span>
                </p>
            </div>
        </div>
    )
}

export default App;
