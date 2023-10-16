import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { KintoneRestAPIClient } from 'test-rest-api-client';

const client = new KintoneRestAPIClient({
    baseUrl: "https://example.cybozu.com",
    auth: {
        username: import.meta.env.VITE_KINTONE_USERNAME,
        password: import.meta.env.VITE_KINTONE_PASSWORD,
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
console.log(client);