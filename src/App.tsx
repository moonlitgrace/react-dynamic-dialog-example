import FormsComponent from "./components"
import { useMain } from "./context/main"

function App() {
  const { openModal } = useMain()

  return <div>
    <button onClick={() => openModal('forms')}>show form dialog</button>
    <FormsComponent />
  </div>
}

export default App
