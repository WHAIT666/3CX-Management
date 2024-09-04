import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LockIcon } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function NoAccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-4">
      {/* Icon animation with a bounce and rotate effect on hover */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }} // Continuous bounce
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        whileHover={{
          rotate: [0, -15, 15, -15, 0], // Rotation effect
          y: [0, -20, 20, -20, 0], // Enhanced bounce on hover
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        className="mb-8"
      >
        <LockIcon className="w-24 h-24 text-red-500" />
      </motion.div>

      <motion.h1
        className="text-4xl font-bold text-gray-900 mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Access Denied
      </motion.h1>

      <motion.p
        className="text-xl text-gray-600 mb-8 text-center max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Sorry, you don't have permission to access this page. Please check your profile to ensure you have the necessary permissions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex gap-4"
      >
        {/* Button with black styling */}
        <Link to="/dashboard/profile">
          <Button className="bg-black text-white hover:bg-gray-800">
            Go to Profile
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
