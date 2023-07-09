import ReactDOMClient from 'react-dom/client'
import { App } from './view/App.tsx'
import './styles/global.styles.css'

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);
root.render(<App />)