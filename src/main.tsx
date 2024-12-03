import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { MainProvider } from './context/main.tsx'

createRoot(document.getElementById('root')!).render(
  <MainProvider>
    <App />
  </MainProvider>,
)
