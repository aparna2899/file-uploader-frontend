import React from 'react';

export default function Login() {
  const handleClick = async () => {
    window.open(`http://localhost:3000/auth/google`, '_self');
  };
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mt-24 max-w-md text-center shadow py-10">
        <h1 className="text-3xl font-bold text-center mb-12">Sign In</h1>
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-black  px-6 py-3 text-base font-medium text-black shadow-sm bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={handleClick}
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}
