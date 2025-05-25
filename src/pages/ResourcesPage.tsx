import React from "react";
import Hero from "../components/ui/Hero";
import SectionHeading from "../components/ui/SectionHeading";
import { Link } from "react-router-dom";
import {
  Scissors,
  Palette,
  ShoppingBag,
  Book,
  Wand2,
  Camera,
  Swatch,
  HeartHandshake,
} from "lucide-react";

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      id: 1,
      title: "Beginner's Guide",
      description:
        "Everything you need to know to start your cosplay journey, from basic materials to simple techniques.",
      icon: <Book className="w-8 h-8" />,
      color:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      link: "/resources/beginners-guide",
    },
    {
      id: 2,
      title: "Materials Guide",
      description:
        "Comprehensive information about different materials used in cosplay, their properties, and where to find them.",
      // icon: <Swatch className="w-8 h-8" />,
      color: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
      link: "/resources/materials",
    },
    {
      id: 3,
      title: "Costume Techniques",
      description:
        "Learn sewing, pattern-making, and fabric manipulation techniques to create stunning costumes.",
      icon: <Scissors className="w-8 h-8" />,
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      link: "/resources/costume-techniques",
    },
    {
      id: 4,
      title: "Prop Making",
      description:
        "Tutorials for creating weapons, accessories, and props using foam, 3D printing, and more.",
      icon: <Wand2 className="w-8 h-8" />,
      color:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
      link: "/resources/prop-making",
    },
    {
      id: 5,
      title: "Makeup Techniques",
      description:
        "Transform your face with character makeup, special effects, and prosthetics tutorials.",
      icon: <Palette className="w-8 h-8" />,
      color:
        "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      link: "/resources/makeup",
    },
    {
      id: 6,
      title: "Shopping Guide",
      description:
        "Where to find the best materials, tools, and pre-made items for your cosplays.",
      icon: <ShoppingBag className="w-8 h-8" />,
      color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
      link: "/resources/shopping-guide",
    },
    {
      id: 7,
      title: "Photography Tips",
      description:
        "Capture your cosplay with professional-looking photos using these photography and posing tips.",
      icon: <Camera className="w-8 h-8" />,
      color:
        "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
      link: "/resources/photography",
    },
    {
      id: 8,
      title: "Community Guidelines",
      description:
        "Etiquette, inclusivity, and how to be a positive member of the cosplay community.",
      icon: <HeartHandshake className="w-8 h-8" />,
      color: "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400",
      link: "/resources/community",
    },
  ];

  return (
    <div>
      <Hero
        title="Cosplay Resources"
        subtitle="Guides, tutorials, and materials to help you create amazing cosplays"
        imageUrl="https://images.pexels.com/photos/6195663/pexels-photo-6195663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeading
            title="Resource Library"
            subtitle="Everything you need to create incredible cosplays, all in one place"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <Link
                key={resource.id}
                to={resource.link}
                className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col h-full"
              >
                <div
                  className={`${resource.color} p-4 rounded-lg inline-flex mb-4`}
                >
                  {resource.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {resource.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {resource.description}
                </p>

                <div className="mt-auto">
                  <span className="inline-flex items-center font-medium text-purple-600 group-hover:text-purple-700 dark:text-purple-400 dark:group-hover:text-purple-300 transition-colors">
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutorial */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Featured Tutorial: Foam Armor Basics
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Learn how to create lightweight, durable armor pieces using EVA
                foam. This step-by-step tutorial covers everything from pattern
                creation to painting and weathering techniques.
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mt-1 mr-3">
                    <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">
                      1
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Learn how to create and transfer patterns from digital
                    templates
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mt-1 mr-3">
                    <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">
                      2
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Master cutting, shaping, and heat-forming EVA foam
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mt-1 mr-3">
                    <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">
                      3
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Discover professional sealing, painting, and weathering
                    techniques
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mt-1 mr-3">
                    <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">
                      4
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Create comfortable strapping systems for wearable armor
                  </p>
                </li>
              </ul>

              <a
                href="/resources/tutorials/foam-armor-basics"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                View Full Tutorial
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/5586526/pexels-photo-5586526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="EVA foam armor piece"
                className="rounded-lg shadow-md h-48 w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/3802668/pexels-photo-3802668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Painting foam armor"
                className="rounded-lg shadow-md h-48 w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/5417682/pexels-photo-5417682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Pattern cutting"
                className="rounded-lg shadow-md h-48 w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/2573605/pexels-photo-2573605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Finished armor piece"
                className="rounded-lg shadow-md h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download Resources */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeading
            title="Free Downloads"
            subtitle="Templates, patterns, and reference guides to help with your cosplay projects"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <Scissors className="w-16 h-16 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Pattern Templates
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Basic armor and accessory patterns to help you get started
                  with your cosplay projects.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                >
                  Download PDF
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                <Palette className="w-16 h-16 text-pink-600 dark:text-pink-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Color Reference Guide
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Paint mixing formulas and color references for popular
                  characters and materials.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                >
                  Download PDF
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                <ShoppingBag className="w-16 h-16 text-teal-600 dark:text-teal-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Materials Checklist
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Comprehensive list of materials and tools needed for different
                  types of cosplay projects.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                >
                  Download PDF
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
