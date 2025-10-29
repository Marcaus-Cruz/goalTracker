import { useState } from "react";

import headerImage from "./assets/react.svg";
import type { CourseGoalType } from "./components/CourseGoalList";
import CourseGoalList from "./components/CourseGoalList";
import Header from "./components/Header";
import NewGoalForm from "./components/NewGoalForm";

export default function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);

  function handleAddGoal(title: string, description: string): void {
    // Use use state's function when new state depends on previous state
    setGoals((prevGoals) => {
      const newGoal: CourseGoalType = {
        id: Math.random(),
        title,
        description,
      };

      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(idToDelete: number): void {
    setGoals((prevGoals) => prevGoals.filter(({ id }) => id !== idToDelete));
  }

  return (
    <main>
      <Header image={{ src: headerImage, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoalForm onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onGoalDeleted={handleDeleteGoal} />
    </main>
  );
}
