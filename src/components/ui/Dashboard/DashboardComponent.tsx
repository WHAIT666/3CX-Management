import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { fetchSystemStatus } from '../../../services/api'; // Adjust the import based on your file structure
import { FrameIcon } from 'lucide-react';

export default function Component() {
  const [systemStatus, setSystemStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getSystemStatus() {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="p-4 md:p-10">
        <div className="mb-4">
          <div className="text-lg font-semibold">System Information</div>
        </div>
      </div>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">FQDN</CardTitle>
              <FrameIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStatus.FQDN}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">WebMeeting: {systemStatus.WebMeetingFQDN}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">IP Address</CardTitle>
              <FrameIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStatus.Ip}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Local IP: {systemStatus.CurrentLocalIp}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Memory Usage</CardTitle>
              <FrameIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStatus.PhysicalMemoryUsage}%</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Virtual Memory: {systemStatus.VirtualMemoryUsage}%</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Disk Usage</CardTitle>
              <FrameIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStatus.DiskUsage}%</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Free Space: {systemStatus.FreeDiskSpace} bytes</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Calls</CardTitle>
              <FrameIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStatus.CallsActive}</div>
            </CardContent>
          </Card>
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
        </div>
      </main>
    </div>
  );
}


