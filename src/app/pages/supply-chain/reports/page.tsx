// src/app/reports/page.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Boxes, ShoppingCart, Send, TrendingUp, Users, Settings, Factory, BarChart, FileText, PieChart, ChevronRight, ChevronLeft } from 'lucide-react'; // Added ChevronRight, ChevronLeft

// Data Interface (local to this page)
interface Report {
  id: string;
  name: string;
  type: 'Inventory' | 'Sales' | 'Shipment' | 'Financial';
  dateGenerated: string;
}

const ReportsPage: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>('reports');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false); // Added state for sidebar collapse

  // Dummy data for demonstration (local to this page)
  const availableReports: Report[] = [
    { id: 'RPT001', name: 'Monthly Inventory Summary', type: 'Inventory', dateGenerated: '2025-06-30' },
    { id: 'RPT002', name: 'Quarterly Sales Performance', type: 'Sales', dateGenerated: '2025-06-30' },
    { id: 'RPT003', name: 'Daily Shipment Log', type: 'Shipment', dateGenerated: '2025-07-09' },
    { id: 'RPT004', name: 'Annual Financial Overview', type: 'Financial', dateGenerated: '2025-01-01' },
    { id: 'RPT005', name: 'Low Stock Alerts', type: 'Inventory', dateGenerated: '2025-07-09' },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar - Duplicated for each page as per request */}
      <aside className={`bg-gray-800 text-white flex flex-col p-4 shadow-lg rounded-r-xl transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? 'w-20 items-center' : 'w-64' // Conditional width and alignment
        }`}>
        <div className="flex justify-end w-full mb-4">
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="p-2 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isSidebarCollapsed ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
          </button>
        </div>

        <div
          className={`text-2xl font-bold mb-8 text-indigo-300 ${
            isSidebarCollapsed ? 'hidden' : 'block' // Hide text when collapsed
          }`}
        >
          <Link href="/pages/supply-chain" className="hover:text-blue-400 transition-colors">SPOT Synergy Solutions</Link>
        </div>
        <nav className="flex-1"> {/* Added flex-1 to push settings to bottom */}
          <ul className="space-y-2">
            <li>
              <Link
                href="/pages/supply-chain"
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  activeMenuItem === 'dashboard' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-300'
                }`}
                onClick={() => setActiveMenuItem('dashboard')}
              >
                <Home className={`h-5 w-5 ${isSidebarCollapsed ? '' : 'mr-3'}`} /> {/* Adjusted icon margin */}
                <span className={isSidebarCollapsed ? 'hidden' : 'block'}>Dashboard</span> {/* Hide text when collapsed */}
              </Link>
            </li>
            <li>
              <Link
                href="/pages/supply-chain/inventory"
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  activeMenuItem === 'inventory' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-300'
                }`}
                onClick={() => setActiveMenuItem('inventory')}
              >
                <Boxes className={`h-5 w-5 ${isSidebarCollapsed ? '' : 'mr-3'}`} />
                <span className={isSidebarCollapsed ? 'hidden' : 'block'}>Inventory</span>
              </Link>
            </li>
            <li>
              <Link
                href="/pages/supply-chain/orders"
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  activeMenuItem === 'orders' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-300'
                }`}
                onClick={() => setActiveMenuItem('orders')}
              >
                <ShoppingCart className={`h-5 w-5 ${isSidebarCollapsed ? '' : 'mr-3'}`} />
                <span className={isSidebarCollapsed ? 'hidden' : 'block'}>Orders</span>
              </Link>
            </li>
            <li>
              <Link
                href="/pages/supply-chain/shipments"
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  activeMenuItem === 'shipments' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-300'
                }`}
                onClick={() => setActiveMenuItem('shipments')}
              >
                <Send className={`h-5 w-5 ${isSidebarCollapsed ? '' : 'mr-3'}`} />
                <span className={isSidebarCollapsed ? 'hidden' : 'block'}>Shipments</span>
              </Link>
            </li>
            <li className={`pt-4 border-t border-gray-700 ${isSidebarCollapsed ? 'mt-4' : 'mt-4'}`}>
              <Link
                href="/pages/supply-chain/reports"
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  activeMenuItem === 'reports' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-300'
                }`}
                onClick={() => setActiveMenuItem('reports')}
              >
                <TrendingUp className={`h-5 w-5 ${isSidebarCollapsed ? '' : 'mr-3'}`} />
                <span className={isSidebarCollapsed ? 'hidden' : 'block'}>Reports</span>
              </Link>
            </li>
            <li>
              <Link
                href="/pages/supply-chain/suppliers"
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  activeMenuItem === 'suppliers' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-300'
                }`}
                onClick={() => setActiveMenuItem('suppliers')}
              >
                <Factory className={`h-5 w-5 ${isSidebarCollapsed ? '' : 'mr-3'}`} />
                <span className={isSidebarCollapsed ? 'hidden' : 'block'}>Suppliers</span>
              </Link>
            </li>
            <li>
              <Link
                href="/pages/supply-chain/customers"
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  activeMenuItem === 'customers' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-300'
                }`}
                onClick={() => setActiveMenuItem('customers')}
              >
                <Users className={`h-5 w-5 ${isSidebarCollapsed ? '' : 'mr-3'}`} />
                <span className={isSidebarCollapsed ? 'hidden' : 'block'}>Customers</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-auto">
          <Link
            href="/pages/supply-chain/settings"
            className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
              activeMenuItem === 'settings' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-300'
            }`}
            onClick={() => setActiveMenuItem('settings')}
          >
            <Settings className={`h-5 w-5 ${isSidebarCollapsed ? '' : 'mr-3'}`} />
            <span className={isSidebarCollapsed ? 'hidden' : 'block'}>Settings</span>
          </Link>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-8 overflow-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Analytics & Reports
          </h1>
          <p className="text-gray-600 text-lg mt-2">
            Generate and view essential business reports.
          </p>
        </header>

        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <BarChart className="mr-3 h-6 w-6 text-indigo-500" /> Available Reports
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">Report Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Generated</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {availableReports.map((report) => (
                  <tr key={report.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{report.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          report.type === 'Inventory' ? 'bg-blue-100 text-blue-800' :
                          report.type === 'Sales' ? 'bg-green-100 text-green-800' :
                          report.type === 'Shipment' ? 'bg-purple-100 text-purple-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {report.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{report.dateGenerated}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-4">View</button>
                      <button className="text-red-600 hover:text-red-900">Download</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <FileText className="mr-3 h-6 w-6 text-blue-500" /> Generate New Report
          </h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="reportType" className="block text-sm font-medium text-gray-700">Report Type</label>
              <select
                id="reportType"
                name="reportType"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option>Select a report type</option>
                <option>Inventory Overview</option>
                <option>Order History</option>
                <option>Shipment Performance</option>
                <option>Supplier Performance</option>
                <option>Customer Sales</option>
              </select>
            </div>
            <div>
              <label htmlFor="dateRange" className="block text-sm font-medium text-gray-700">Date Range</label>
              <input
                type="text"
                id="dateRange"
                name="dateRange"
                placeholder="e.g., Last 30 days, Q2 2025"
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PieChart className="mr-2 h-5 w-5" /> Generate Report
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ReportsPage;