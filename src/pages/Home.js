import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [file, setFile] = useState(null);
  const submitFile = async (event) => {
    event.preventDefault();
    try {
      if (!file) {
        throw new Error('Select a file first!');
      }
      const formData = new FormData();
      formData.append('file', file[0]);
      const res = await axios.post(
        `http://localhost:3000/file-upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mt-24 max-w-3xl text-center">
        <form>
          <div className="text-center my-8">
            <input
              className="ml-24"
              type="file"
              onChange={(event) => setFile(event.target.files)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-6 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={submitFile}
            >
              Upload File
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
