import React from "react";
import { ThumbsUp, Tag } from "lucide-react"; // for icons

const TipsCardDesign = ({title, content, category, author, authorName, upvotes,}) => {
  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden w-70 md:w-80 lg:w-96">
      <div className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
        <Tag size={14} /> {category}
      </div>

      <div className="p-6 flex flex-col justify-between h-full pt-15">
        <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-700 transition-colors duration-200">
          {title}
        </h2>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{content}</p>

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
          <div>
            <p className="text-sm font-semibold text-gray-800">{authorName}</p>
            <p className="text-xs text-gray-500">{author}</p>
          </div>

          <div className="flex items-center gap-1 text-green-700 font-medium">
            <ThumbsUp size={16} />
            <span>{upvotes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsCardDesign;
