'use client';

export default function Summary({
  data,
  onSubmit,
  
}: {
  data: any;
  onSubmit: () => void;
 
}) {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-sky-600 text-center">
          Step 4: Review & Submit
        </h2>

        <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
          <h3 className="font-semibold text-gray-700 mb-2">Personal Info:</h3>
          <p><span className="font-medium text-gray-600">Full Name:</span> {data.fullName}</p>
          <p><span className="font-medium text-gray-600">Email:</span> {data.email}</p>
          <p><span className="font-medium text-gray-600">Phone:</span> {data.phone}</p>

          <h3 className="font-semibold text-gray-700 mt-4 mb-2">Address Info:</h3>
          <p><span className="font-medium text-gray-600">Street:</span> {data.street}</p>
          <p><span className="font-medium text-gray-600">City:</span> {data.city}</p>
          <p><span className="font-medium text-gray-600">Zip:</span> {data.zip}</p>

          <h3 className="font-semibold text-gray-700 mt-4 mb-2">Account Info:</h3>
          <p><span className="font-medium text-gray-600">Username:</span> {data.username}</p>
          <p><span className="font-medium text-gray-600">Password:</span> ******</p>
        </div>

        <div className="flex justify-center items-center pt-4">
         
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition w-full"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
