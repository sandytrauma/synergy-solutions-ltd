// src/app/suppliers/page.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Boxes, ShoppingCart, Send, TrendingUp, Users, Settings, Factory, Phone, Mail, Globe } from 'lucide-react';

// Data Interface (local to this page)
interface Supplier {
  id: string;
  name: string;
  contactPerson: string;
  phone: string;
  email: string;
  address: string;
  status: 'Active' | 'Inactive' | 'On Hold';
}

const SuppliersPage: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>('suppliers');

  // Dummy data for demonstration (local to this page)
  const supplierList: Supplier[] = [
    { id: 'SUP001', name: 'Global Components Inc.', contactPerson: 'Jane Doe', phone: '555-1234', email: 'jane@globalcomponents.com', address: '123 Tech Way, Anytown', status: 'Active' },
    { id: 'SUP002', name: 'Industrial Parts Ltd.', contactPerson: 'John Smith', phone: '555-5678', email: 'john@industrialparts.com', address: '456 Gear St, Somecity', status: 'Active' },
    { id: 'SUP003', name: 'Material Innovations', contactPerson: 'Alice Brown', phone: '555-9012', email: 'alice@materialinnov.com', address: '789 Prime Rd, Otherville', status: 'On Hold' },
    { id: 'SUP004', name: 'Rapid Logistics', contactPerson: 'Bob White', phone: '555-3456', email: 'bob@rapidlogistics.com', address: '101 Quick Ave, Speedyburg', status: 'Active' },
    { id: 'SUP005', name: 'Precision Manufacturing', contactPerson: 'Carol Green', phone: '555-7890', email: 'carol@precisionmfg.com', address: '202 Fine Ln, Detail City', status: 'Inactive' },
  ];

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
            Supplier Management
          </h1>
          <p className="text-gray-600 text-lg mt-2">
            Manage your relationships with suppliers.
          </p>
        </header>

        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Factory className="mr-3 h-6 w-6 text-orange-500" /> Supplier List
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">Supplier Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Person</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {supplierList.map((supplier) => (
                  <tr key={supplier.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{supplier.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{supplier.contactPerson}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-gray-500" />{supplier.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-gray-500" />{supplier.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          supplier.status === 'Active' ? 'bg-green-100 text-green-800' :
                          supplier.status === 'On Hold' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}
                      >
                        {supplier.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Users className="mr-3 h-6 w-6 text-gray-500" /> Add New Supplier
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="supplierName" className="block text-sm font-medium text-gray-700">Supplier Name</label>
              <input type="text" id="supplierName" name="supplierName" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" />
            </div>
            <div>
              <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">Contact Person</label>
              <input type="text" id="contactPerson" name="contactPerson" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="supplierPhone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" id="supplierPhone" name="supplierPhone" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" />
              </div>
              <div>
                <label htmlFor="supplierEmail" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="supplierEmail" name="supplierEmail" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" />
              </div>
            </div>
            <div>
              <label htmlFor="supplierAddress" className="block text-sm font-medium text-gray-700">Address</label>
              <textarea id="supplierAddress" name="supplierAddress" rows={2} className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Factory className="mr-2 h-5 w-5" /> Add Supplier
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default SuppliersPage;