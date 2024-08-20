import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { fetchSystemStatus, login3CX } from '../../../services/api'; // Ensure this is correctly imported
import { FrameIcon } from 'lucide-react';
import CentralFormComponent from '../CentralsForm/CentralFormComponent';

export default function Dashboard() {
  const [systemStatus, setSystemStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    async function getSystemStatus() {
      const accessToken = localStorage.getItem('3cxAccessToken');
      if (!accessToken) {
        setShowPopup(true); // Show the popup if no token is found
        setLoading(false);
        return;
      }

      try {
        const statusData = await fetchSystemStatus();
        setSystemStatus(statusData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getSystemStatus();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fqdn = formData.get('fqdn');
    const identifier = formData.get('identifier');
    const password = formData.get('password');
    
    try {
      const tokenData = await login3CX(fqdn, identifier, password);
      localStorage.setItem('3cxAccessToken', tokenData.access_token);
      setShowPopup(false); // Hide the popup after successful login
      setLoading(true); // Start loading again
      const statusData = await fetchSystemStatus();
      setSystemStatus(statusData); // Fetch system status after obtaining the token
    } catch (error) {
      setError('Failed to authenticate. Please check your credentials.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col w-full min-h-screen">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <CentralFormComponent onSubmit={handleFormSubmit} />
        </div>
      )}
      <div className="p-4 md:p-10">
        <div className="mb-4">
          <div className="text-lg font-semibold">System Information</div>
        </div>
      </div>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {systemStatus && (
            <>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Version</CardTitle>
                  <FrameIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{systemStatus.Version}</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Activated: {systemStatus.Activated ? 'Yes' : 'No'}</p>
                </CardContent>
              </Card>
              {/* Repeat similar Card components for other systemStatus fields */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Extensions</CardTitle>
                  <FrameIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{systemStatus.ExtensionsTotal}</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Registered: {systemStatus.ExtensionsRegistered}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Trunks</CardTitle>
                  <FrameIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{systemStatus.TrunksTotal}</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Registered: {systemStatus.TrunksRegistered}</p>
                </CardContent>
              </Card>
              {/* Add more Cards as needed */}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
