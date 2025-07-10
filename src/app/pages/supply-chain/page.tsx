// src/app/supply-chain/page.tsx
"use client";

import React, { useState } from 'react';
import { Package, Truck, ClipboardList, TrendingUp, Users, Settings, Home, Factory, Boxes, ShoppingCart, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Main App Component
const SupplyChainDashboard: React.FC = () => {
  // State for active menu item (for future navigation functionality)
  const [activeMenuItem, setActiveMenuItem] = useState<string>('dashboard');
  // State for sidebar collapse
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  // Dummy data for demonstration
  const inventoryData = [
    { id: 1, name: 'Product A', quantity: 1250, status: 'In Stock' },
    { id: 2, name: 'Product B', quantity: 700, status: 'Low Stock' },
    { id: 3, name: 'Product C', quantity: 2000, status: 'In Stock' },
    { id: 4, name: 'Product D', quantity: 300, status: 'Out of Stock' },
  ];

  const recentOrders = [
    { id: 'ORD001', customer: 'Acme Corp', items: 5, status: 'Pending', date: '2025-06-18' },
    { id: 'ORD002', customer: 'Globex Inc', items: 3, status: 'Shipped', date: '2025-06-17' },
    { id: 'ORD003', customer: 'Cyberdyne', items: 8, status: 'Delivered', date: '2025-06-16' },
  ];

  const shipmentStatus = [
    { id: 'SHP001', origin: 'Warehouse A', destination: 'Store X', status: 'In Transit', eta: '2 days' },
    { id: 'SHP002', origin: 'Supplier Y', destination: 'Warehouse B', status: 'Delayed', eta: 'Unknown' },
    { id: 'SHP003', origin: 'Warehouse C', destination: 'Customer Z', status: 'Delivered', eta: 'N/A' },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white flex flex-col p-4 shadow-lg rounded-r-xl transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? 'w-20 items-center' : 'w-64'
        }`}
      >
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
            isSidebarCollapsed ? 'hidden' : 'block'
          }`}
        >
          <Link href="/pages/supply-chain" className="hover:text-blue-400 transition-colors">SPOT Synergy Solutions</Link>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Link
                href="/pages/supply-chain"
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  activeMenuItem === 'dashboard' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-300'
                }`}
                onClick={() => setActiveMenuItem('dashboard')}
              >
                <Home className={`h-5 w-5 ${isSidebarCollapsed ? '' : 'mr-3'}`} />
                <span className={isSidebarCollapsed ? 'hidden' : 'block'}>Dashboard</span>
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
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Supply Chain Dashboard
          </h1>
          <p className="text-gray-600 text-lg mt-2">
            Overview of your supply chain operations
          </p>
        </header>

        {/* Dashboard Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Total Products */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Products</p>
              <h2 className="text-3xl font-bold text-gray-900 mt-1">2150</h2>
            </div>
            <Package className="h-12 w-12 text-indigo-500 opacity-75" />
          </div>

          {/* Card 2: Pending Orders */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Pending Orders</p>
              <h2 className="text-3xl font-bold text-gray-900 mt-1">12</h2>
            </div>
            <ClipboardList className="h-12 w-12 text-yellow-500 opacity-75" />
          </div>

          {/* Card 3: Shipments in Transit */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Shipments in Transit</p>
              <h2 className="text-3xl font-bold text-gray-900 mt-1">5</h2>
            </div>
            <Truck className="h-12 w-12 text-green-500 opacity-75" />
          </div>
        </section>

        {/* Inventory Levels Section */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Boxes className="mr-3 h-6 w-6 text-indigo-500" /> Inventory Levels
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

        {/* Recent Orders Section */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <ShoppingCart className="mr-3 h-6 w-6 text-green-500" /> Recent Orders
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

        {/* Shipment Status Section */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Send className="mr-3 h-6 w-6 text-purple-500" /> Shipment Status
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">Shipment ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Origin</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">ETA</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {shipmentStatus.map((shipment) => (
                  <tr key={shipment.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{shipment.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{shipment.origin}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{shipment.destination}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          shipment.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                          shipment.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}
                      >
                        {shipment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{shipment.eta}</td>
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

export default SupplyChainDashboard;