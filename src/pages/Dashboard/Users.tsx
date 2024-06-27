import Sidebar from '../../components/ui/SideBar/SidebarComponent';
import Topbar from '../../components/ui/Topbar/TopbarComponent';
import UsersComponent from '../../components/ui/Dashboard/UsersComponent';

const Users = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-4">
          <UsersComponent />
        </div>
      </div>
    </div>
  );
};

export default Users;
