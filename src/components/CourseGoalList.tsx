import CourseGoal from "./CourseGoal";

export type CourseGoalType = {
  id: number;
  title: string;
  description: string;
};

export type CourseGoalListProps = {
  goals: CourseGoalType[];
  onGoalDeleted: (id: number) => void; 
};

export default function CourseGoalList({ goals, onGoalDeleted }: CourseGoalListProps) {
  return (
    <form>
      <ul>
        {goals.map(({ id, title, description }) => (
          <li key={id}>
            <CourseGoal key={id} id={id} title={title} onDelete={onGoalDeleted}>
              <p>{description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </form>
  );
}
