import React from 'react';

const Header = () => {
    return (
        <header>
            <div class="header-contents">
                <div class="header-child title">
                    Caleb's Camera Store
                </div>
                <div class="header-child right-child">
                    <div class="menu-item">
                        <a href="/home" class="menu-item">Home</a>
                    </div>
                    <div class="menu-item">
                        <a href="/cameras" class="menu-item">Cameras</a>
                    </div>
                    <div class="menu-item">
                        <a href="/repair" class="menu-item">Repair</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
