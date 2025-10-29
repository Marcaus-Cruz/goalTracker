import type { FormEvent } from "react";
import { useRef, useState } from "react";

export type NewGoalFormProps = {
  onAddGoal: (goal: string, summary: string) => void;
};
export default function NewGoalForm({ onAddGoal }: NewGoalFormProps) {
  const goalString: string = "goal";
  const summaryString: string = "summary";

  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  const [formIsValid, setFormIsValid] = useState({
    goal: false,
    summary: false,
  });

  function onFormChange() {
    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;

    setFormIsValid((prevIsValid) => {
      return {
        ...prevIsValid,
        goal: enteredGoal.trim() !== "",
        summary: enteredSummary.trim() !== "",
      };
    });
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (Object.values(formIsValid).some((field) => field === false)) {
      globalThis.alert("Goal is incomplete!");
      return;
    }

    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;
    onAddGoal(enteredGoal, enteredSummary);

    goalRef.current!.value = '';
    summaryRef.current!.value = '';
    onFormChange();
  }

  return (
    <form onSubmit={submit} onChange={onFormChange}>
      <p>
        <label
          htmlFor={goalString}
          className={formIsValid.goal ? "" : "invalid"}
        >
          Your goal:
        </label>
        <input
          id={goalString}
          name={goalString}
          type="text"
          ref={goalRef}
        />
      </p>
      <p>
        <label
          htmlFor={summaryString}
          className={formIsValid.summary ? "" : "invalid"}
        >
          Summary:
        </label>
        <input
          id={summaryString}
          name={summaryString}
          type="text"
          ref={summaryRef}
        />
      </p>
      <p>
        <button>Confirm</button>
      </p>
    </form>
  );
}
