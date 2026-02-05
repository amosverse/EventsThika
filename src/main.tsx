import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import maintenanceImage from './assets/maintainance.jpg'

function MaintenancePage() {
  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center p-6">
      <img
        src={maintenanceImage}
        alt="We are on maintenance"
        className="max-h-[80vh] w-auto max-w-full object-contain"
      />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MaintenancePage />
  </StrictMode>,
)
