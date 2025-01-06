import { FaTrashAlt } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";

const TaskCard = ({ task }) => {
  return (
    <div className="border p-3 rounded">
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2>{task.title}</h2>
        </div>
        {/* Status */}
        <div className="flex items-center gap-1">
          <FaTrashAlt className="text-rose-700 cursor-pointer" />
          <Checkbox />
        </div>
      </div>
      <p>jghjgyg</p>
    </div>
  );
};

export default TaskCard;
