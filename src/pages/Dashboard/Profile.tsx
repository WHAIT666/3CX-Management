import Sidebar from '../../components/ui/SideBar/SidebarComponent';
import Topbar from '../../components/ui/Topbar/TopbarComponent';
import ProfileComponent from '../../components/ui/Profile/ProfileComponent';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-4">
          <ProfileComponent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
