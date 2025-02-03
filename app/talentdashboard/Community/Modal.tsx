import React from "react";
import { Send } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white rounded-2xl shadow-xl sm:max-w-md w-full px-8 py-12 flex flex-col items-center">
        <div className="flex items-center justify-center h-24 w-24 rounded-full bg-blue-100">
          <Send className="text-blue-600 h-12 w-12" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 text-center">
          Join our WhatsApp community
        </h3>
        <p className="text-gray-500 mt-2 text-center text-sm leading-relaxed">
          Get notified on the latest projects <br /> and hackathons
        </p>
        <button
          type="button"
          className="mt-6 w-32 rounded-lg px-5 py-3 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
          onClick={onClose}
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default Modal;
