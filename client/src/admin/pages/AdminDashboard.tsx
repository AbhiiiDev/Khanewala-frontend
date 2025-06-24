import React from 'react';

const AdminDashboard: React.FC = () => {
  const pendingRequests = [
    { id: 1, restaurantName: "Taste Haven", city: "Mumbai", status: "Pending", date: "2025-06-23", owner: "Amit Sharma" },
    { id: 2, restaurantName: "Spice Delight", city: "Delhi", status: "Pending", date: "2025-06-22", owner: "Priya Patel" },
    { id: 3, restaurantName: "Ocean Bites", city: "Chennai", status: "Pending", date: "2025-06-21", owner: "Ravi Kumar" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard - Pending Restaurant Requests</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4 flex justify-between items-center">
            <input
              type="text"
              placeholder="Search by restaurant name or owner..."
              className="border p-2 rounded-md w-1/3"
            />
            <select className="border p-2 rounded-md">
              <option value="">All Cities</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="py-2 px-4 border-b">ID</th>
                  <th className="py-2 px-4 border-b">Restaurant Name</th>
                  <th className="py-2 px-4 border-b">City</th>
                  <th className="py-2 px-4 border-b">Status</th>
                  <th className="py-2 px-4 border-b">Date Submitted</th>
                  <th className="py-2 px-4 border-b">Owner</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{request.id}</td>
                    <td className="py-2 px-4 border-b">{request.restaurantName}</td>
                    <td className="py-2 px-4 border-b">{request.city}</td>
                    <td className="py-2 px-4 border-b">
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                        {request.status}
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b">{request.date}</td>
                    <td className="py-2 px-4 border-b">{request.owner}</td>
                    <td className="py-2 px-4 border-b">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-blue-600">
                        Approve
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-right">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Export to CSV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;