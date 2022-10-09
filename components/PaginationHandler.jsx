import React from "react";

export default function PaginationHandler({maxRows}) {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <button className="hover:bg-purple-full-light/20 transition border w-24 border-r-0 px-3 py-1 rounded-l border-[#EAE4FC] text-purple-dark">Previous</button>
        <p className="px-4 py-2 bg-blue-semi-dark text-white">1</p>
        <button className="hover:bg-purple-full-light/20 transition border w-24 border-l-0 px-3 py-1 rounded-r border-[#EAE4FC] text-purple-dark">Next</button>
      </div>
      <p className="text-purple-dark">Showing 1 to {maxRows} entries</p>
    </div>
  );
}
