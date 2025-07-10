// src/app/orders/page.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Boxes, ShoppingCart, Send, TrendingUp, Users, Settings, Factory, ChevronRight, ChevronLeft } from 'lucide-react'; // Added ChevronRight, ChevronLeft

// Data Interface (local to this page)
interface Order {
  id: string;
  customer: string;
  items: number;
  status: 'Pending' | 'Shipped' | 'Delivered';
  date: string;
}

const OrdersPage: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>('orders');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false); // Added state for sidebar collapse

  // Dummy data for demonstration (local to this page)
  const recentOrders: Order[] = [
    { id: 'ORD001', customer: 'Acme Corp', items: 5, status: 'Pending', date: '2025-06-18' },
    { id: 'ORD002', customer: 'Globex Inc', items: 3, status: 'Shipped', date: '2025-06-17' },
    { id: 'ORD003', customer: 'Cyberdyne', items: 8, status: 'Delivered', date: '2025-06-16' },
    { id: 'ORD004', customer: 'Omni Consumer Products', items: 2, status: 'Pending', date: '2025-06-19' },
    { id: 'ORD005', customer: 'Tyrell Corp', items: 10, status: 'Shipped', date: '2025-06-15' },
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
            Order Management
          </h1>
          <p className="text-gray-600 text-lg mt-2">
            Track and manage all customer orders.
          </p>
        </header>

        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <ShoppingCart className="mr-3 h-6 w-6 text-green-500" /> All Orders
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.items}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          order.status === 'Delivered' ? 'bg-blue-100 text-blue-800' :
                          order.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                          'bg-red-100 text-red-800'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.date}</td>
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

export default OrdersPage;