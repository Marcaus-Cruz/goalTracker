import CourseGoal from "./CourseGoal";

export type CourseGoalType = {
  id: number;
  title: string;
  description: string;
};

export type CourseGoalListProps = {
  goals: CourseGoalType[];
};

export default function CourseGoalList({ goals }: CourseGoalListProps) {
  return (
    <form>
      <ul>
        {goals.map(({ id, title, description }) => (
          <li key={id}>
            <CourseGoal key={id} title={title}>
              <p>{description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </form>
  );
}
