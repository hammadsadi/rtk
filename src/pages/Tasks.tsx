import { AddTaskModal } from "@/components/customComponents/TaskCard/task/AddTaskModal";
import TaskCard from "@/components/customComponents/TaskCard/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";

const Tasks = () => {
  const { data, isLoading, isError } = useGetTasksQuery(undefined);
  if (isLoading) {
    return <p>Loading...........</p>;
  }
  const tasks = data.tasks;
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-3xl">Task</h2>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="High">High</TabsTrigger>
            <TabsTrigger value="Medium">Medium</TabsTrigger>
            <TabsTrigger value="Low">Low</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
