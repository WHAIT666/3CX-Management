import React, { useEffect, useState } from 'react';
import { fetchExtensions } from '../../services/api';

interface Extension {
  Number: string;
  Type: string;
  IsRegistered: boolean;
  Name: string;
}

const ExtensionManagement: React.FC = () => {
  const [extensions, setExtensions] = useState<Extension[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadExtensions = async () => {
      try {
        const data = await fetchExtensions();
        setExtensions(data.value);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch extensions');
        setLoading(false);
      }
    };

    loadExtensions();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:bg-gray-700 dark:text-gray-400">
              Number
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:bg-gray-700 dark:text-gray-400">
              Type
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:bg-gray-700 dark:text-gray-400">
              Registered
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:bg-gray-700 dark:text-gray-400">
              Name
            </th>
          </tr>
        </thead>
        <tbody>
          {extensions.map((extension) => (
            <tr key={extension.Number}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                {extension.Number}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">
                {extension.Type}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">
                {extension.IsRegistered ? 'Yes' : 'No'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">
                {extension.Name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExtensionManagement;
