// src/app/settings/page.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Boxes, ShoppingCart, Send, TrendingUp, Users, Settings, Factory, Shield, Bell, Database } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>('settings');
  const [notificationEnabled, setNotificationEnabled] = useState<boolean>(true);
  const [dataBackupSchedule, setDataBackupSchedule] = useState<string>('weekly');

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar - Duplicated for each page as per request */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-4 shadow-lg rounded-r-xl">
        <div className="text-2xl font-bold mb-8 text-indigo-300">
          <Link href="/pages/supply-chain" className="hover:text-blue-400 transition-colors">SPOT Synergy Solutions</Link>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                href="/pages/supply-chain"
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  activeMenuItem === 'dashboard' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-300'
                }`}
                onClick={() => setActiveMenuItem('dashboard')}
              >
                <Home className="mr-3 h-5 w-5" />
                Dashboard
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
                <Boxes className="mr-3 h-5 w-5" />
                Inventory
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
                <ShoppingCart className="mr-3 h-5 w-5" />
                Orders
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
                <Send className="mr-3 h-5 w-5" />
                Shipments
              </Link>
            </li>
            <li className="pt-4 border-t border-gray-700 mt-4">
              <Link
                href="/pages/supply-chain/reports"
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  activeMenuItem === 'reports' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-300'
                }`}
                onClick={() => setActiveMenuItem('reports')}
              >
                <TrendingUp className="mr-3 h-5 w-5" />
                Reports
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
                <Factory className="mr-3 h-5 w-5" />
                Suppliers
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
                <Users className="mr-3 h-5 w-5" />
                Customers
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
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Link>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-8 overflow-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            System Settings
          </h1>
          <p className="text-gray-600 text-lg mt-2">
            Configure application preferences and system options.
          </p>
        </header>

        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Settings className="mr-3 h-6 w-6 text-gray-600" /> General Settings
          </h3>
          <div className="space-y-6">
            {/* User Interface Preferences */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">User Interface</h4>
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <label htmlFor="darkModeToggle" className="text-gray-700 flex items-center">
                  <span className="mr-2">Dark Mode</span>
                  <span className="text-sm text-gray-500">(Not yet implemented)</span>
                </label>
                <input
                  type="checkbox"
                  id="darkModeToggle"
                  name="darkModeToggle"
                  className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-not-allowed opacity-50"
                  disabled
                />
              </div>
              <div className="flex items-center justify-between py-2">
                <label htmlFor="languageSelect" className="text-gray-700">Language</label>
                <select
                  id="languageSelect"
                  name="languageSelect"
                  className="mt-1 block w-1/3 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
            </div>

            {/* Notification Settings */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <Bell className="h-5 w-5 mr-2 text-yellow-500" /> Notification Preferences
              </h4>
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <label htmlFor="notificationToggle" className="text-gray-700">Enable Email Notifications</label>
                <input
                  type="checkbox"
                  id="notificationToggle"
                  name="notificationToggle"
                  checked={notificationEnabled}
                  onChange={() => setNotificationEnabled(!notificationEnabled)}
                  className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center justify-between py-2">
                <label htmlFor="lowStockAlerts" className="text-gray-700">Low Stock Alerts</label>
                <input
                  type="checkbox"
                  id="lowStockAlerts"
                  name="lowStockAlerts"
                  className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  defaultChecked={true}
                />
              </div>
            </div>

            {/* Data Management */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <Database className="h-5 w-5 mr-2 text-green-500" /> Data Management
              </h4>
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <label htmlFor="dataBackup" className="text-gray-700">Automated Data Backup</label>
                <select
                  id="dataBackup"
                  name="dataBackup"
                  value={dataBackupSchedule}
                  onChange={(e) => setDataBackupSchedule(e.target.value)}
                  className="mt-1 block w-1/3 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="disabled">Disabled</option>
                </select>
              </div>
              <div className="flex items-center justify-between py-2">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Database className="mr-2 h-5 w-5" /> Perform Manual Backup
                </button>
              </div>
            </div>

            {/* Security */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-red-500" /> Security
              </h4>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Change Password
              </button>
            </div>
          </div>
        </section>

        <div className="mt-8 pt-6 border-t border-gray-200 text-right">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;