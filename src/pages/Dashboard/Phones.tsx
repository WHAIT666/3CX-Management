import Sidebar from '../../components/ui/SideBar/SidebarComponent';
import Topbar from '../../components/ui/Topbar/TopbarComponent';
import PhonesComponent from '../../components/ui/Dashboard/PhonesComponent';

const Phones = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-4">
          <PhonesComponent />
        </div>
      </div>
    </div>
  );
};

export default Phones;
