"use client";

import React, { useState, useEffect } from 'react';
// Removed Link import as it's specific to Next.js and not supported in this environment.
import { Home, Boxes, ShoppingCart, Send, TrendingUp, Users, Settings, Factory, ChevronRight, ChevronLeft, Plus, Edit, Trash2, X, Search } from 'lucide-react';

// Data Interface
interface InventoryItem {
  id: string; // Changed to string for easier management (e.g., UUIDs)
  name: string;
  quantity: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  category: string; // Added category
}

const InventoryPage: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>('inventory');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);
  const [newItemName, setNewItemName] = useState<string>('');
  const [newItemQuantity, setNewItemQuantity] = useState<number>(0);
  const [newItemStatus, setNewItemStatus] = useState<'In Stock' | 'Low Stock' | 'Out of Stock'>('In Stock');
  const [newItemCategory, setNewItemCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Dummy data for demonstration (will be replaced by state)
  useEffect(() => {
    setInventoryItems([
      { id: '1', name: 'Product A', quantity: 1250, status: 'In Stock', category: 'Electronics' },
      { id: '2', name: 'Product B', quantity: 700, status: 'Low Stock', category: 'Apparel' },
      { id: '3', name: 'Product C', quantity: 2000, status: 'In Stock', category: 'Home Goods' },
      { id: '4', name: 'Product D', quantity: 300, status: 'Out of Stock', category: 'Electronics' },
      { id: '5', name: 'Product E', quantity: 950, status: 'In Stock', category: 'Apparel' },
      { id: '6', name: 'Product F', quantity: 150, status: 'Low Stock', category: 'Home Goods' },
      { id: '7', name: 'Product G', quantity: 50, status: 'Out of Stock', category: 'Food' },
      { id: '8', name: 'Product H', quantity: 2500, status: 'In Stock', category: 'Food' },
    ]);
  }, []);

  // Get unique categories for the filter dropdown
  const categories = Array.from(new Set(inventoryItems.map(item => item.category)));

  // Filtered and searched inventory items
  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Open the add/edit modal
  const openModal = (item?: InventoryItem) => {
    if (item) {
      setEditingItem(item);
      setNewItemName(item.name);
      setNewItemQuantity(item.quantity);
      setNewItemStatus(item.status);
      setNewItemCategory(item.category);
    } else {
      setEditingItem(null);
      setNewItemName('');
      setNewItemQuantity(0);
      setNewItemStatus('In Stock');
      setNewItemCategory('');
    }
    setIsModalOpen(true);
  };

  // Close the add/edit modal
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
    setNewItemName('');
    setNewItemQuantity(0);
    setNewItemStatus('In Stock');
    setNewItemCategory('');
  };

  // Handle adding or updating an inventory item
  const handleSaveItem = () => {
    if (!newItemName || newItemQuantity <= 0 || !newItemCategory) {
      console.error("Please fill all fields and ensure quantity is positive.");
      return;
    }

    if (editingItem) {
      // Update existing item
      setInventoryItems(inventoryItems.map(item =>
        item.id === editingItem.id
          ? { ...item, name: newItemName, quantity: newItemQuantity, status: newItemStatus, category: newItemCategory }
          : item
      ));
    } else {
      // Add new item
      const newItem: InventoryItem = {
        id: Date.now().toString(), // Simple unique ID generation
        name: newItemName,
        quantity: newItemQuantity,
        status: newItemStatus,
        category: newItemCategory,
      };
      setInventoryItems([...inventoryItems, newItem]);
    }
    closeModal();
  };

  // Handle deleting an inventory item
  const handleDeleteItem = (id: string) => {
    // Replaced window.confirm with a custom message box as per instructions.
    // In a real application, this would be a more robust custom modal.
    if (confirm('Are you sure you want to delete this item?')) { // Using confirm for simplicity in this environment
      setInventoryItems(inventoryItems.filter(item => item.id !== id));
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
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
          {/* Replaced Next.js Link with standard <a> tag */}
          <a href="/pages/supply-chain" className="hover:text-blue-400 transition-colors">SPOT Synergy Solutions</a>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              {/* Replaced Next.js Link with standard <a> tag */}
              <a
                href="/pages/supply-chain"
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  activeMenuItem === 'dashboard' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-300'
                }`}
                onClick={() => setActiveMenuItem('dashboard')}
              >
                <Home className={`h-5 w-5 ${isSidebarCollapsed ? '' : 'mr-3'}`} />
                <span className={isSidebarCollapsed ? 'hidden' : 'block'}>Dashboard</span>
              </a>
            </li>
            <li>
              {/* Replaced Next.js Link with standard <a> tag */}
              <a
                href="/pages/supply-chain/inventory"
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  activeMenuItem === 'inventory' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-300'
                }`}
                onClick={() => setActiveMenuItem('inventory')}
              >
                <Boxes className={`h-5 w-5 ${isSidebarCollapsed ? '' : 'mr-3'}`} />
                <span className={isSidebarCollapsed ? 'hidden' : 'block'}>Inventory</span>
              </a>
            </li>
            <li>
              {/* Replaced Next.js Link with standard <a> tag */}
              <a
                href="/pages/supply-chain/orders"
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  activeMenuItem === 'orders' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-300'
                }`}
                onClick={() => setActiveMenuItem('orders')}
              >
                <ShoppingCart className={`h-5 w-5 ${isSidebarCollapsed ? '' : 'mr-3'}`} />
                <span className={isSidebarCollapsed ? 'hidden' : 'block'}>Orders</span>
              </a>
            </li>
            <li>
              {/* Replaced Next.js Link with standard <a> tag */}
              <a
                href="/pages/supply-chain/shipments"
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  activeMenuItem === 'shipments' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-300'
                }`}
                onClick={() => setActiveMenuItem('shipments')}
              >
                <Send className={`h-5 w-5 ${isSidebarCollapsed ? '' : 'mr-3'}`} />
                <span className={isSidebarCollapsed ? 'hidden' : 'block'}>Shipments</span>
              </a>
            </li>
            <li className={`pt-4 border-t border-gray-700 ${isSidebarCollapsed ? 'mt-4' : 'mt-4'}`}>
              {/* Replaced Next.js Link with standard <a> tag */}
              <a
                href="/pages/supply-chain/reports"
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  activeMenuItem === 'reports' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-300'
                }`}
                onClick={() => setActiveMenuItem('reports')}
              >
                <TrendingUp className={`h-5 w-5 ${isSidebarCollapsed ? '' : 'mr-3'}`} />
                <span className={isSidebarCollapsed ? 'hidden' : 'block'}>Reports</span>
              </a>
            </li>
            <li>
              {/* Replaced Next.js Link with standard <a> tag */}
              <a
                href="/pages/supply-chain/suppliers"
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  activeMenuItem === 'suppliers' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-300'
                }`}
                onClick={() => setActiveMenuItem('suppliers')}
              >
                <Factory className={`h-5 w-5 ${isSidebarCollapsed ? '' : 'mr-3'}`} />
                <span className={isSidebarCollapsed ? 'hidden' : 'block'}>Suppliers</span>
              </a>
            </li>
            <li>
              {/* Replaced Next.js Link with standard <a> tag */}
              <a
                href="/pages/supply-chain/customers"
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  activeMenuItem === 'customers' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-300'
                }`}
                onClick={() => setActiveMenuItem('customers')}
              >
                <Users className={`h-5 w-5 ${isSidebarCollapsed ? '' : 'mr-3'}`} />
                <span className={isSidebarCollapsed ? 'hidden' : 'block'}>Customers</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-auto">
          {/* Replaced Next.js Link with standard <a> tag */}
          <a
            href="/pages/supply-chain/settings"
            className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
              activeMenuItem === 'settings' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-300'
            }`}
            onClick={() => setActiveMenuItem('settings')}
          >
            <Settings className={`h-5 w-5 ${isSidebarCollapsed ? '' : 'mr-3'}`} />
            <span className={isSidebarCollapsed ? 'hidden' : 'block'}>Settings</span>
          </a>
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
          <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <Boxes className="mr-3 h-6 w-6 text-indigo-500" /> Current Inventory Levels
            </h3>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <select
                className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <button
                onClick={() => openModal()}
                className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 whitespace-nowrap"
              >
                <Plus className="h-5 w-5 mr-2" /> Add Item
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">Product Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredItems.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                      No items found.
                    </td>
                  </tr>
                ) : (
                  filteredItems.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.category}</td>
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => openModal(item)}
                            className="text-indigo-600 hover:text-indigo-900 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                            title="Edit Item"
                          >
                            <Edit className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            className="text-red-600 hover:text-red-900 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                            title="Delete Item"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Add/Edit Item Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md transform transition-all duration-300 scale-100 opacity-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{editingItem ? 'Edit Inventory Item' : 'Add New Inventory Item'}</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); handleSaveItem(); }}>
              <div className="mb-4">
                <label htmlFor="itemName" className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                <input
                  type="text"
                  id="itemName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="itemCategory" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <input
                  type="text"
                  id="itemCategory"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={newItemCategory}
                  onChange={(e) => setNewItemCategory(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="itemQuantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                <input
                  type="number"
                  id="itemQuantity"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={newItemQuantity}
                  onChange={(e) => setNewItemQuantity(parseInt(e.target.value) || 0)}
                  min="0"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="itemStatus" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  id="itemStatus"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  value={newItemStatus}
                  onChange={(e) => setNewItemStatus(e.target.value as 'In Stock' | 'Low Stock' | 'Out of Stock')}
                >
                  <option value="In Stock">In Stock</option>
                  <option value="Low Stock">Low Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {editingItem ? 'Save Changes' : 'Add Item'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryPage;
