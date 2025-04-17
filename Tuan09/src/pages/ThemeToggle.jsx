import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../components/theme/themeSlice';

function ThemeTogglePage() {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className="flex items-center justify-center border h-40">
            <div className="p-4 max-w-md flex flex-col gap-4 items-center">
                <h1 className="text-3xl font-bold">🎨 Theme Switcher</h1>
                <p>Chế độ hiện tại: <strong>{theme}</strong></p>
                <button
                    onClick={() => dispatch(toggleTheme())}
                    style={{
                        background: theme === 'light' ? '#111827' : '#f9fafb',
                        color: theme === 'light' ? '#f9fafb' : '#111827'
                    }}
                >
                    {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>
            </div>
        </div>

    );
}

export default ThemeTogglePage;
