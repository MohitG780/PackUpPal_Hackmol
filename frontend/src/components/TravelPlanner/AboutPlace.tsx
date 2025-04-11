import React, { useState } from "react";
import { Info, Edit, Trash2, Save, X } from "lucide-react";

interface AboutPlaceProps {
  isDarkMode: boolean;
}

const defaultContent = `Manali, a picturesque hill station nestled in the mountains of Himachal Pradesh, India, is renowned for its
stunning natural beauty, lush green valleys, and snow-capped peaks. It serves as a gateway to adventure and
tranquility alike. Visitors can indulge in various activities such as trekking, skiing, and paragliding, or
simply relax by the Beas River. The rich cultural heritage is evident in the local temples and traditional
architecture, while the vibrant markets offer a taste of local handicrafts and cuisine. Whether you are an
adventure enthusiast or seeking peace, Manali has something for everyone, making it a perfect destination for
a memorable getaway.`;

const AboutPlace: React.FC<AboutPlaceProps> = ({ isDarkMode }) => {
  const [content, setContent] = useState<string>(defaultContent);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [tempContent, setTempContent] = useState<string>(content);

  const handleSave = () => {
    setContent(tempContent.trim());
    setEditMode(false);
  };

  const handleDelete = () => {
    setContent("");
    setTempContent("");
  };

  const handleCancel = () => {
    setTempContent(content);
    setEditMode(false);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Info className={`h-6 w-6 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
          <h1 className="text-2xl font-bold text-gray-500">About the Place</h1>
        </div>

        <div className="flex items-center gap-2">
          {editMode ? (
            <>
              <button
                onClick={handleSave}
                className={`p-2 rounded-full ${isDarkMode ? "hover:bg-green-600 bg-green-500" : "hover:bg-green-100 bg-green-50"} text-green-900`}
                title="Save"
              >
                <Save className="h-5 w-5" />
              </button>
              <button
                onClick={handleCancel}
                className={`p-2 rounded-full ${isDarkMode ? "hover:bg-red-600 bg-red-500" : "hover:bg-red-100 bg-red-50"} text-red-900`}
                title="Cancel"
              >
                <X className="h-5 w-5" />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setEditMode(true)}
                className={`p-2 rounded-full ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
                title="Edit"
              >
                <Edit className={`h-5 w-5 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`} />
              </button>
              <button
                onClick={handleDelete}
                className={`p-2 rounded-full ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
                title="Delete"
              >
                <Trash2 className={`h-5 w-5 ${isDarkMode ? "text-red-400" : "text-red-600"}`} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Editable Content Box */}
      <div
        className={`p-6 rounded-xl transition-all duration-300 ${
          isDarkMode ? "bg-gray-800/80 border border-gray-600" : "bg-white shadow-sm"
        }`}
      >
        {editMode ? (
          <textarea
            className={`w-full h-64 p-4 rounded-lg resize-none outline-none text-base leading-relaxed ${
              isDarkMode
                ? "bg-gray-900 text-gray-200 placeholder-gray-500"
                : "bg-gray-50 text-gray-700 placeholder-gray-400"
            }`}
            placeholder="Write about this place..."
            value={tempContent}
            onChange={(e) => setTempContent(e.target.value)}
          />
        ) : content ? (
          <p className={`text-lg leading-relaxed whitespace-pre-wrap ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
            {content}
          </p>
        ) : (
          <p className={`italic text-gray-400`}>No information provided. Click edit to add content.</p>
        )}
      </div>
    </div>
  );
};

export default AboutPlace;
