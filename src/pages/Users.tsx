import { UserAddModal } from "@/components/customComponents/user/UserAddModal";
import { UserCard } from "@/components/customComponents/user/UserCard";

const Users = () => {
 
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2>User List</h2>
        <UserAddModal />
      </div>
      {/* User */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
        <UserCard />
      </div>
    </div>
  );
};

export default Users;
