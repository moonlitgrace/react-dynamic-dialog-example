import forms from './forms'

export type FormSubmitData = Record<string, string | number | undefined>;

export type Forms = keyof typeof forms;

export type FormsState = { [K in Forms]: object };

export type FormProps = {
	formsState: FormsState;
	setFormsState: React.Dispatch<React.SetStateAction<FormsState>>;
	gotoForm: (form: Forms) => void;
};
