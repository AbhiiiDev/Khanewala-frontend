import React from 'react';

const RestaurantStatus: React.FC = () => {
  const requestDetails = {
    restaurantName: "Taste Haven",
    city: "Mumbai",
    submissionDate: "2025-06-24",
    status: "Pending",
    lastUpdated: "04:34 PM IST, June 24, 2025",
    owner: "Amit Sharma",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Restaurant Request Status</h1>
        <div className="space-y-4">
          <p className="text-gray-600">Thank you for submitting your restaurant request. Your application is currently being reviewed. Below are the details of your submission:</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Restaurant Name</p>
              <p className="font-semibold">{requestDetails.restaurantName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">City</p>
              <p className="font-semibold">{requestDetails.city}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Submission Date</p>
              <p className="font-semibold">{requestDetails.submissionDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Owner</p>
              <p className="font-semibold">{requestDetails.owner}</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-500">Current Status</p>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              {requestDetails.status}
            </span>
            <p className="text-sm text-gray-600 mt-2">Last updated: {requestDetails.lastUpdated}</p>
          </div>
          <p className="text-gray-600 mt-4">You will receive an email notification once your request is approved or if further information is required. Please allow 3-5 business days for processing.</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantStatus;