import { FormProps } from "../types";

export default function FormTwo(props: FormProps) {
  const { gotoForm } = props

  return <div>
    Form two
    <br />
    <button onClick={() => gotoForm('form_one')}>goto form one</button>
  </div>
}

