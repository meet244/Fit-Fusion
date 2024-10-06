import React from "react";

const Trends = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-md max-w-3xl space-y-4">
      <div className="text-2xl font-semibold text-gray-800 dark:text-white">
        Trending Searches
      </div>
      <div className="flex flex-wrap gap-2    ">
        {[
          "home exercise",
          "exercise at home",
          "workout",
          "exercise song",
          "belly exercise",
          "body exercise",
          "dance exercise",
          "weight loss exercise",
          "belly fat exercise",
          "exercises",
          "exercise kids",
          "best exercise",
          "back exercise",
          "exercise video",
          "face exercise",
          "height exercise",
          "exercise to lose weight",
          "fat loss exercise",
          "yoga exercise",
          "yoga",
          "exercise music",
          "gym exercise",
          "breast exercise",
          "exercise morning",
          "chest exercise",
        ].map((item, index) => {
          return (
            <span class="cursor-pointer bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Trends;
