import type { PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{
  title: string;
}>;

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>DELETE</button>
    </article>
  );
}
