import type { ReactNode } from "react";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

export type CourseGoalType = {
  id: number;
  title: string;
  description: string;
};

export type CourseGoalListProps = {
  goals: CourseGoalType[];
  onGoalDeleted: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onGoalDeleted,
}: CourseGoalListProps) {
  if (!goals.length) {
    return (
      <InfoBox mode="hint">You have no goals yet. Start adding some!</InfoBox>
    );
  }

  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning">
        You have too many goals. Finish some first.
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <form>
        <ul>
          {goals.map(({ id, title, description }) => (
            <li key={id}>
              <CourseGoal
                key={id}
                id={id}
                title={title}
                onDelete={onGoalDeleted}
              >
                <p>{description}</p>
              </CourseGoal>
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}
