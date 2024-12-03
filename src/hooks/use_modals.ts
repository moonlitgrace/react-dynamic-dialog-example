import { useState } from "react"

const modals = ['forms'] as const
type IModals = (typeof modals)[number]

let modalsStateSingleton = new Map<IModals, boolean>(modals.map(item => [item, false]))

export function useModals() {
  const [modalsState, setModalsState] = useState(modalsStateSingleton)

  function openModal(modal: IModals) {
    const newModalsState = new Map(modalsState);
    for (const key of newModalsState.keys()) {
      newModalsState.set(key, false);
    }
    newModalsState.set(modal, true);
    // update with singleton
    modalsStateSingleton = newModalsState;
    setModalsState(newModalsState);
  }

  function closeModal(modal: IModals) {
    const newModalsState = new Map(modalsState);
    newModalsState.set(modal, false);
    // update with singleton
    modalsStateSingleton = newModalsState;
    setModalsState(newModalsState);
  }

  return { modalsState, openModal, closeModal };
}
