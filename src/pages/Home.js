import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { async } from 'q';

export default function Home() {
  const [file, setFile] = useState(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        fetch(`http://localhost:3000/file-list`)
          .then((res) => res.json())
          .then((res) => setList(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, []);
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
  const handleDownload = (name) => {
    fetch(`http://localhost:3000/download/${name.substring(13)}`)
      .then((res) => res.json())
      .then((res) => console.log(res.data));
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
      <table className="w-2/3 divide-y divide-gray-300 mt-24 mx-auto">
        <tbody className="divide-y divide-gray-200 bg-white">
          {list.map((name) => (
            <tr key={name} className="bg-gray-50">
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                {name.substring(13)}
              </td>
              <td
                className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 cursor-pointer hover:text-blue-500"
                onClick={() => handleDownload(name)}
              >
                Download
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
