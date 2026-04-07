import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Contact, Mail, Pen } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";

const skills = [
  "HTML","CSS","JAVASCRIPT","REACTJS","NODEJS",
  "MONGODB","TAILWINDCSS","NESTJS","NEXT.JS",
  "PRISMA","DOCKER",
];

const Profile = () => {
  const isResume = true;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto mt-10 space-y-6 px-4">

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-md border p-6 relative">

          {/* Edit Button */}
          <Button
            size="icon"
            variant="outline"
            className="absolute top-6 right-6 rounded-full hover:bg-gray-100"
          >
            <Pen className="w-4 h-4" />
          </Button>

          {/* Top Section */}
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">

            {/* Avatar */}
            <Avatar className="h-24 w-24 border shadow-sm">
              <AvatarImage src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." />
            </Avatar>

            {/* Info */}
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-semibold text-gray-800">
                Full Name
              </h1>
              <p className="text-gray-500 mt-2 max-w-xl text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias repellat doloribus laudantium.
              </p>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-indigo-500" />
                  <span>furkan@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Contact className="w-4 h-4 text-indigo-500" />
                  <span>8999939</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-2xl shadow-md border p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Skills
          </h2>

          <div className="flex flex-wrap gap-2">
            {skills.length !== 0 ? (
              skills.map((item, index) => (
                <Badge
                  key={index}
                  className="px-3 py-1 text-xs bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition"
                >
                  {item}
                </Badge>
              ))
            ) : (
              <span className="text-gray-400">NA</span>
            )}
          </div>
        </div>

        {/* Resume */}
        <div className="bg-white rounded-2xl shadow-md border p-6">
          <Label className="text-gray-700 font-medium">Resume</Label>

          <div className="mt-2">
            {isResume ? (
              <a
                href="http://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline text-sm"
              >
                Download Resume
              </a>
            ) : (
              <span className="text-gray-400">NA</span>
            )}
          </div>
        </div>

        {/* Applied Jobs */}
        <div className="bg-white rounded-2xl shadow-md border p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Applied Jobs
          </h2>

          <AppliedJobTable />
        </div>

      </div>
    </div>
  );
};

export default Profile;