import Sidebar from '../../components/ui/SideBar/SidebarComponent';
import Topbar from '../../components/ui/Topbar/TopbarComponent';
import GroupsComponent from '../../components/ui/Dashboard/GroupsComponent';

const Groups = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-4">
          <GroupsComponent />
        </div>
      </div>
    </div>
  );
};

export default Groups;
