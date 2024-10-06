import React from "react";

const Table = () => {
  return (
    <div class="relative  overflow-x-auto shadow-md sm:rounded-lg max-w-6xl mx-6">
      <div class="flex items-center justify-between flex-column flex-wrap md:flex-row md:space-y-0  bg-white dark:bg-gray-900">
        <div className="flex items-center p-4 text-2xl">
          Top Yogashastra of the Previous Week
        </div>
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">Rank</div>
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Position
            </th>
            <th scope="col" class="px-6 py-3">
              Day 1
            </th>
            <th scope="col" class="px-6 py-3">
              Day 2
            </th>
            <th scope="col" class="px-6 py-3">
              Day 3
            </th>
            <th scope="col" class="px-6 py-3">
              Day 4
            </th>
            <th scope="col" class="px-6 py-3">
              Day 5
            </th>
            <th scope="col" class="px-6 py-3">
              Day 6
            </th>
            <th scope="col" class="px-6 py-3">
              Final Day
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex text-3xl mx-auto items-center">1</div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                class="w-10 h-10 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7dMVjJKUXJJFqzOtapyKZT4pbz7YFJw4Hrg8Ny3ZUhcjKpPD5OBQSwOe-_F6zKHZQ94&usqp=CAU"
                alt="Jese image"
              />
              <div class="ps-3">
                <div class="text-base font-semibold">Pranay Mistry</div>
              </div>
            </th>
            <td class="px-6 py-4">Calisthenics</td>
            <td class="px-6 py-4">87%</td>
            <td class="px-6 py-4">77%</td>
            <td class="px-6 py-4">87%</td>
            <td class="px-6 py-4">77%</td>
            <td class="px-6 py-4">87%</td>
            <td class="px-6 py-4">77%</td>
            <td class="px-6 py-4">77%</td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                Master
              </div>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex text-3xl mx-auto items-center">1</div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                class="w-10 h-10 rounded-full"
                src="https://pics.craiyon.com/2023-10-25/e9f360d0d21a46d58c66804f0c38b7d7.webp"
                alt="Jese image"
              />
              <div class="ps-3">
                <div class="text-base font-semibold">Harshil Damania</div>
              </div>
            </th>
            <td class="px-6 py-4">Physique</td>
            <td class="px-6 py-4">87%</td>
            <td class="px-6 py-4">77%</td>
            <td class="px-6 py-4">87%</td>
            <td class="px-6 py-4">77%</td>
            <td class="px-6 py-4">87%</td>
            <td class="px-6 py-4">77%</td>
            <td class="px-6 py-4">75%</td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full bg-orange-500 me-2"></div>{" "}
                Intermediate
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
