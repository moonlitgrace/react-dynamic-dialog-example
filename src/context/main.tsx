import { createContext, useContext, useState } from "react";

const modals = ['forms'] as const
type IModals = (typeof modals)[number]

const MainContext = createContext({
  modalsState: new Map<IModals, boolean>,
  openModal: (_: IModals) => {},
  closeModal: (_: IModals) => {}
})

export function MainProvider({ children }: { children: JSX.Element }) {
  const [modalsState, setModalsState] = useState(new Map<IModals, boolean>(modals.map(item => [item, false])))

  function openModal(modal: IModals) {
    const newModalsState = new Map(modalsState)
    for (const key of newModalsState.keys()) {
      newModalsState.set(key, false)
    }
    newModalsState.set(modal, true)
    setModalsState(newModalsState)
  }

  function closeModal(modal: IModals) {
    const newModalsState = new Map(modalsState)
    newModalsState.set(modal, false)
    setModalsState(newModalsState)
  }

  return <MainContext.Provider value={{
    modalsState: modalsState,
    openModal: openModal,
    closeModal: closeModal
  }}>{children}</MainContext.Provider>
}

export function useMain() {
  return useContext(MainContext)
}
