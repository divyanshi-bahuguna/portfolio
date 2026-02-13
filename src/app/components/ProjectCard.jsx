import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  tech,
  features,
}) => {
  return (
    <div className="bg-[#111] rounded-xl overflow-hidden border border-gray-800 hover:border-pink-500 transition duration-300">

      {/* Image Section */}
      <div
        className="h-52 md:h-60 relative group bg-cover bg-center"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center gap-4 transition duration-300">

          {gitUrl && (
            <Link
              href={gitUrl}
              target="_blank"
              className="h-12 w-12 border border-gray-400 rounded-full flex items-center justify-center hover:border-white"
            >
              <CodeBracketIcon className="h-6 w-6 text-gray-300 hover:text-white" />
            </Link>
          )}

          {previewUrl && (
            <Link
              href={previewUrl}
              target="_blank"
              className="h-12 w-12 border border-gray-400 rounded-full flex items-center justify-center hover:border-white"
            >
              <EyeIcon className="h-6 w-6 text-gray-300 hover:text-white" />
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 text-white">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>

        <p className="text-[#ADB7BE] text-sm mb-3">
          {description}
        </p>

        {/* Tech Stack */}
        {tech && (
          <p className="text-sm text-pink-400 mb-3">
            {tech}
          </p>
        )}

        {/* Features */}
        {features && (
          <ul className="text-sm text-[#ADB7BE] list-disc ml-5 space-y-1">
            {features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;