// src/app/customers/page.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Boxes, ShoppingCart, Send, TrendingUp, Users, Settings, Factory, Phone, Mail, ChevronRight, ChevronLeft } from 'lucide-react';

// Data Interface (local to this page)
interface Customer {
  id: string;
  name: string;
  company?: string; // Optional field
  email: string;
  phone: string;
  totalOrders: number;
  lastOrderDate: string;
}

const CustomersPage: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>('customers');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  // Dummy data for demonstration (local to this page)
  const customerList: Customer[] = [
    { id: 'CUST001', name: 'Michael Scott', company: 'Dunder Mifflin', email: 'michael@dm.com', phone: '555-1111', totalOrders: 15, lastOrderDate: '2025-06-25' },
    { id: 'CUST002', name: 'Leslie Knope', company: 'Pawnee Parks Dept', email: 'leslie@pawneeparks.gov', phone: '555-2222', totalOrders: 10, lastOrderDate: '2025-07-01' },
    { id: 'CUST003', name: 'Walter White', company: 'Mesa Verde', email: 'walter@mv.com', phone: '555-3333', totalOrders: 3, lastOrderDate: '2025-05-10' },
    { id: 'CUST004', name: 'Sarah Connor', email: 'sarah@resistance.com', phone: '555-4444', totalOrders: 7, lastOrderDate: '2025-06-15' },
    { id: 'CUST005', name: 'Sheldon Cooper', company: 'Caltech', email: 'sheldon@caltech.edu', phone: '555-5555', totalOrders: 20, lastOrderDate: '2025-07-05' },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar - Duplicated for each page as per request */}
      <aside className={`bg-gray-800 text-white flex flex-col p-4 shadow-lg rounded-r-xl transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? 'w-20 items-center' : 'w-64'
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
            isSidebarCollapsed ? 'hidden' : 'block'
          }`}
        >
          {/* Updated Link path */}
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
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Customer Relations
          </h1>
          <p className="text-gray-600 text-lg mt-2">
            Manage your customer base and view their order history.
          </p>
        </header>

        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Users className="mr-3 h-6 w-6 text-blue-500" /> Customer List
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Orders</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">Last Order</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {customerList.map((customer) => (
                  <tr key={customer.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{customer.company || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-gray-500" />{customer.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-gray-500" />{customer.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{customer.totalOrders}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{customer.lastOrderDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Users className="mr-3 h-6 w-6 text-gray-500" /> Add New Customer
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">Customer Name</label>
              <input type="text" id="customerName" name="customerName" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" />
            </div>
            <div>
              <label htmlFor="customerCompany" className="block text-sm font-medium text-gray-700">Company (Optional)</label>
              <input type="text" id="customerCompany" name="customerCompany" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="customerEmail" name="customerEmail" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" />
              </div>
              <div>
                <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" id="customerPhone" name="customerPhone" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Users className="mr-2 h-5 w-5" /> Add Customer
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default CustomersPage;