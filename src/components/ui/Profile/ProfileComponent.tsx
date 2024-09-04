import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserIcon, ClockIcon, SettingsIcon } from "lucide-react";
import { useAuthStore } from "@/Store/AuthStore"; // Ensure your zustand store is imported
import { formatDate } from "@/Utils/date"; // Assuming you have a formatDate utility

export default function InteractiveProfilePage() {
  const { user, updateUser } = useAuthStore(); // Fetch and update user information from Zustand store
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    role: "", // Add role to profile data
    language: "",
    theme: "Dark",
    notifications: "Enabled",
  });

  const [editStates, setEditStates] = useState({
    profile: false,
    personal: false,
    preferences: false,
  });

  const [emailError, setEmailError] = useState("");

  // Populate initial user data
  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name || "",
        email: user.email || "",
        role: user.role || "User", // Populate role from user
        language: user.language || "English",
        theme: user.theme || "Dark",
        notifications: user.notifications || "Enabled",
      });
    }
  }, [user]);

  const toggleEdit = (section: keyof typeof editStates) => {
    setEditStates((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(emailRegex.test(value) ? "" : "Please enter a valid email address");
    }
  };

  const handleSave = async (section: keyof typeof editStates) => {
    if (section === "profile" && emailError) {
      alert("Please correct the email before saving.");
      return;
    }

    try {
      await updateUser(profileData); // Call the updateUser method from Zustand store
      toggleEdit(section); // Close the edit section after saving
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  const renderEditableField = (label: string, name: keyof typeof profileData, type: string = "text") => (
    <div className="space-y-1">
      <label htmlFor={name} className="text-sm font-medium">
        {label}:
      </label>
      <Input
        type={type}
        id={name}
        name={name}
        value={profileData[name]}
        onChange={handleInputChange}
        className="max-w-sm"
      />
      {name === "email" && emailError && <p className="text-red-500 text-xs">{emailError}</p>}
    </div>
  );

  const renderSelectField = (label: string, name: keyof typeof profileData, options: string[]) => (
    <div className="space-y-1">
      <label htmlFor={name} className="text-sm font-medium">
        {label}:
      </label>
      <select
        id={name}
        name={name}
        value={profileData[name]}
        onChange={handleInputChange}
        className="w-full max-w-sm px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Information */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              <UserIcon className="inline mr-2" />
              Profile Information
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={() => toggleEdit("profile")}>
              {editStates.profile ? "Cancel" : "Edit"}
            </Button>
          </CardHeader>
          <CardContent>
            {editStates.profile ? (
              <div className="space-y-4">
                {renderEditableField("Name", "name")}
                {renderEditableField("Email", "email")}
                <Button onClick={() => handleSave("profile")} className="mr-2">
                  Save
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Name:</span> {profileData.name}
                </p>
                <p>
                  <span className="font-semibold">Email:</span> {profileData.email}
                </p>
                <p>
                  <span className="font-semibold">Role:</span> {profileData.role} {/* Role displayed here */}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Account Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ClockIcon className="mr-2" />
              Account Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Joined:</span> {formatDate(user?.createdAt)}
              </p>
              <p>
                <span className="font-semibold">Last Login:</span> {formatDate(user?.lastLogin)}
              </p>
              <p>
                <span className="font-semibold">Total Logins:</span> {user?.loginCount || 0}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              <SettingsIcon className="inline mr-2" />
              Preferences
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={() => toggleEdit("preferences")}>
              {editStates.preferences ? "Cancel" : "Edit"}
            </Button>
          </CardHeader>
          <CardContent>
            {editStates.preferences ? (
              <div className="space-y-4">
                {renderSelectField("Language", "language", ["English"])}
                {renderSelectField("Theme", "theme", ["Dark", "Light"])}
                {renderSelectField("Notifications", "notifications", ["Enabled", "Disabled"])}
                <Button onClick={() => handleSave("preferences")} className="mr-2">
                  Save
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Language:</span> {profileData.language}
                </p>
                <p>
                  <span className="font-semibold">Theme:</span> {profileData.theme}
                </p>
                <p>
                  <span className="font-semibold">Notifications:</span> {profileData.notifications}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
