import { FormProps } from "../types";

export default function FormOne(props: FormProps) {
  const { gotoForm } = props

  return <div>
    Form one
    <br />
    <button onClick={() => gotoForm('form_two')}>goto form two</button>
  </div>
}
