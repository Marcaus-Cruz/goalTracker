import { useState } from "react";

import headerImage from "./assets/react.svg";
import type { CourseGoalType } from "./components/CourseGoalList";
import CourseGoalList from "./components/CourseGoalList";
import Header from "./components/Header";

export default function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);

  function handleAddGoal() {
    // Use use state's function when new state depends on previous state
    setGoals((prevGoals) => {
      const newGoal: CourseGoalType = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn from the ground up!",
      };

      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: headerImage, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} />
    </main>
  );
}
