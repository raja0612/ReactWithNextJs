import React from "react";

interface TaskListProps {
  initialTasks: Task[];
}
interface Task {
  title: string;
}

interface TaskListState {
  tasks: Task[];
}
class TasksList extends React.Component<TaskListProps, TaskListState> {
  constructor(props: TaskListProps) {
    super(props);
    this.state = {
      tasks: props.initialTasks
    };
  }

  onAddTaskBtnClick = () => {
    this.setState({
      tasks: [...this.state.tasks, {title: "New Task"}]
    });
  };

  render() {
    const { tasks } = this.state;
    return (
      <ul>
        {tasks.map((task, index) => {
          return <li key={index}>{task.title}</li>
        })}
        <button onClick={this.onAddTaskBtnClick}>Add Task</button>
      </ul>
    );
  }
}

export default () => (
  <div>
    <TasksList initialTasks={tasks} />
  </div>
);

const tasks = [{ title: "One" }, { title: "Two" }, { title: "Three" }];
