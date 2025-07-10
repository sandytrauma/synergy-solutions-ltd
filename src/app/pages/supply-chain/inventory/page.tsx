// src/app/inventory/page.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Boxes, ShoppingCart, Send, TrendingUp, Users, Settings, Factory, ChevronRight, ChevronLeft } from 'lucide-react'; // Added ChevronRight, ChevronLeft

// Data Interface (local to this page)
interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

const InventoryPage: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>('inventory');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false); // Added state for sidebar collapse

  // Dummy data for demonstration (local to this page)
  const inventoryData: InventoryItem[] = [
    { id: 1, name: 'Product A', quantity: 1250, status: 'In Stock' },
    { id: 2, name: 'Product B', quantity: 700, status: 'Low Stock' },
    { id: 3, name: 'Product C', quantity: 2000, status: 'In Stock' },
    { id: 4, name: 'Product D', quantity: 300, status: 'Out of Stock' },
    { id: 5, name: 'Product E', quantity: 950, status: 'In Stock' },
    { id: 6, name: 'Product F', quantity: 150, status: 'Low Stock' },
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
            Inventory Management
          </h1>
          <p className="text-gray-600 text-lg mt-2">
            Detailed view of all products in your inventory.
          </p>
        </header>

        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Boxes className="mr-3 h-6 w-6 text-indigo-500" /> Current Inventory Levels
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">Product Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {inventoryData.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          item.status === 'In Stock' ? 'bg-green-100 text-green-800' :
                          item.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InventoryPage;