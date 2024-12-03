import { lazy, Suspense, useEffect, useRef, useState } from "react"
import { Forms, FormsState } from "./types"
import forms from "./forms"
// import { useMain } from "../context/main"
import { useModals } from "../hooks/use_modals"

export default function FormsComponent() {
  // const { modalsState, closeModal } = useMain()
  const { modalsState, closeModal } = useModals()

  const [currForm, setCurrForm] = useState(forms['form_one'])
  const [formsState, setFormsState] = useState<FormsState>(() => Object.keys(forms).reduce((acc, key) => {
    acc[key as Forms] = {}
    return acc
  }, {} as FormsState))

  let dialogRef = useRef<HTMLDialogElement>(null)

  function gotoForm(form: Forms) {
    setCurrForm(forms[form])
  }

  const LazyForm = lazy(() => currForm);

  useEffect(() => {
    if (modalsState.get('forms')) dialogRef.current?.showModal()
    else dialogRef.current?.close()
  }, [modalsState])

  return (
    <dialog ref={dialogRef}>
      <p>Dialog!</p>
      <button onClick={() => closeModal('forms')}>close dialog</button>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyForm
          formsState={formsState}
          setFormsState={setFormsState}
          gotoForm={gotoForm}
        />
      </Suspense>
    </dialog>
  );
}
