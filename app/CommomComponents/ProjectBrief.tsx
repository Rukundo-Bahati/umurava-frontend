import { Button } from "@/components/ui/button";
import { Mail, Layout, Calendar, DollarSign } from "lucide-react";

export default function ProjectBrief() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid md:grid-cols-3 gap-8 space-x-32">
        {/* Main Content */}
        <div className="md:col-span-2">
          {/* Header Image */}
          <div className="bg-[#2B71F0] p-8 rounded-lg mb-6">
            <div className="w-[612px] h-[296px] flex items-center justify-center text-3xl">
              <img
                src="/images/logo1.png"
                alt="Umurava Logo"
                className="w-[100px] h-[91px]"
              />
              <h2 className="text-white font-bold  ml-4 text-3xl">
                Umurava
              </h2>
            </div>
          </div>

          {/* Project Title */}
          <h2 className="text-xl font-bold mb-4">
            Project Brief: Payroll and HR Management System
          </h2>
          <p className="mb-4">
            A Fintech company developing a digital financial platform designed
            for businesses and their workforce in Africa. They are partnering
            with Umurava to run a skills challenge for product design. This
            challenge focuses on creating a payroll management system for
            employers and financial services for employees and gig workers
            across Africa.
          </p>

          <h3 className="font-bold text-lg mb-2">Tasks:</h3>
          <h2 className="text-xl font-bold mb-4">Project Requirements</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>UX research to understand project requirements</li>
            <li>Understand user needs and business goals</li>
            <li>Determine interactions between users</li>
            <li>Requirements catalog</li>
          </ul>

          <h2 className="text-xl font-bold mb-4">Project Design:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>User Interface Design for each step.</li>
            <li>
              Creating Wireframes to outline the basic structure and layout of
              the web.
            </li>
            <li>
              Designing visually appealing and user-friendly interfaces for the
              web and mobile apps, focusing on usability and user experience.
            </li>
            <li>
              Ensuring the web application works seamlessly across web, mobile,
              and tablet devices.
            </li>
            <li>Provide a feedback session for in-development guidance.</li>
          </ul>

          <h2 className="text-xl font-bold mb-4">Deliverables:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Requirements Catalog and User interaction Diagram.</li>
            <li>User Interface Mockups.</li>
            <li>Payroll and HR System Design Completed.</li>
            <li>
              The Product Designer will provide all documents and deliverables
              to the client before the review meetings.
            </li>
          </ul>

          <h2 className="text-xl font-bold mb-4">NOTE:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Find Product Requirements Summary and Features Description for
              Saway Pay here.
            </li>
          </ul>
        </div>

        {/* Sidebar */}
        <div className="bg-gray-50 p-6 rounded-lg h-fit w-[500px]">
          <h2 className="font-semibold mb-4">Key Instructions:</h2>
          <p className="text-sm text-gray-600 mb-6">
            You are free to schedule a clarification call with the team via this
          </p>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">talent@umurava.africa</p>
                <p className="text-sm text-gray-500">Contact Email</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Layout className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">Web design</p>
                <p className="text-sm text-gray-500">Challenge Category</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">7 Days</p>
                <p className="text-sm text-gray-500">Duration</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <DollarSign className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">$150 - $400</p>
                <p className="text-sm text-gray-500">Money Prize</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button className="w-full mt-6 bg-[#2B71F0] hover:bg-blue-700">
            Submit your work
          </Button>
        </div>
      </div>
    </div>
  );
}
