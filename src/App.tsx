import FormsComponent from "./components"
// import { useMain } from "./context/main"
import { useModals } from "./hooks/use_modals"

function App() {
  // const { openModal } = useMain()
  const { openModal } = useModals()

  return <div>
    <button onClick={() => openModal('forms')}>show form dialog</button>
    <FormsComponent />
  </div>
}

export default App
