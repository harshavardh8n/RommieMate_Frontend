import React from 'react';

const ExpenseTab = () => {
  const roommateNames = ["Shubham", "Pavan", "Kalpesh"];

  return (
    <div className="flex flex-row mt-5">
      <ul className="flex flex-wrap text-sm font-medium text-center text-black border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {roommateNames.map((roomie, index) => (
          <li key={index} className="me-2">
            <a
              href="#"
              aria-current="page"
              className="inline-block p-2 border-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 active:bg-gray-800"
            >
              {roomie}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTab;
