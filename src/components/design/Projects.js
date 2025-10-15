"use client";
import { useState, useEffect, useCallback } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Project 2020",
      images: ["/images/projects/Bayer/1.jpg","/images/projects/Bayer/2.jpg","/images/projects/Bayer/3.jpg","/images/projects/Bayer/4.jpg"],
      year: "2020",
      duration: "4 Months",
      role: "Project Management & Design",
      area: "955 sq Gross",
      description: ""
    },
    {
      id: 2,
      title: "Project 2021",
      images: ["/images/projects/Coca Cola/1.jpg","/images/projects/Coca Cola/2.jpg","/images/projects/Coca Cola/3.jpg","/images/projects/Coca Cola/4.jpg","/images/projects/Coca Cola/5.jpg"],
      year: "2021",
      duration: "",
      role: "Project Management",
      area: "375 sq Gross",
      description: ""
    },
    {
      id: 3,
      title: "Project 2022",
      images: ["/images/projects/Roullier/1.jpg","/images/projects/Roullier/2.jpg","/images/projects/Roullier/3.jpg","/images/projects/Roullier/4.jpg","/images/projects/Roullier/5.jpg"],
      year: "2022",
      duration: "",
      role: "Design and Build",
      area: "2750 sq Gross",
      description: ""
    },
    {
      id: 4,
      title: "Project 2023",
      images: ["/images/projects/Abbvie/1.jpg", "/images/projects/Abbvie/2.jpg","/images/projects/Abbvie/3.jpg","/images/projects/Abbvie/4.jpg"],
      year: "2023",
      duration: "",
      role: "Project management & Design",
      area: "350 sq Gross",
      description: ""
    },
        {
      id: 5,
      title: "Project 2025",
      images: ["/images/projects/Amgen/1.jpg", "/images/projects/Amgen/2.jpg","/images/projects/Amgen/3.jpg","/images/projects/Amgen/4.jpg","/images/projects/Amgen/5.jpg"],
      year: "2025",
      duration: "",
      role: "Design & Build",
      area: "380 sq Gross",
      description: ""
    },
        {
      id: 6,
      title: "Project 2023",
      images: ["/images/projects/ABBOTT/1.jpg", "/images/projects/ABBOTT/2.jpg","/images/projects/ABBOTT/3.jpg","/images/projects/ABBOTT/4.jpg","/images/projects/ABBOTT/5.jpg"],
      year: "2023",
      duration: "",
      role: "Design & Project Management",
      area: "350 sq Gross",
      description: ""
    },
        {
      id: 7,
      title: "Project 2024",
      images: ["/images/projects/Lufthansa/1.jpg", "/images/projects/Lufthansa/2.jpg","/images/projects/Lufthansa/3.jpg","/images/projects/Lufthansa/4.jpg"],
      year: "2024",
      duration: "",
      role: "Design & Build",
      area: "200 sq Gross",
      description: ""
    },
        {
      id: 8,
      title: "Project Algiers 2021",
      images: ["/images/projects/Maersk/Maersk Alger/1.jpg","/images/projects/Maersk/Maersk Alger/2.jpg","/images/projects/Maersk/Maersk Alger/3.jpg","/images/projects/Maersk/Maersk Alger/4.jpg","/images/projects/Maersk/Maersk Alger/5.jpg"],
      year: "2021",
      duration: "",
      role: "Design & Project Management",
      area: "750 sq Gross",
      description: ""
    },
            {
      id: 9,
      title: "Project Bejaia 2023",
      images: ["/images/projects/Maersk/Maersk Bejaia/1.jpg","/images/projects/Maersk/Maersk Bejaia/2.jpg","/images/projects/Maersk/Maersk Bejaia/3.jpg","/images/projects/Maersk/Maersk Bejaia/4.jpg"],
      year: "2023",
      duration: "",
      role: "Design & Build",
      area: "175 sq Gross",
      description: ""
    },
            {
      id: 10,
      title: "Project Oran 2022",
      images: ["/images/projects/Maersk/Maersk Oran/1.jpg","/images/projects/Maersk/Maersk Oran/2.jpg","/images/projects/Maersk/Maersk Oran/3.jpg","/images/projects/Maersk/Maersk Oran/4.jpg"],
      year: "2022",
      duration: "",
      role: "Design & Build",
      area: "410 sq Gross",
      description: ""
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const navigateProjects = useCallback((direction) => {
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedProject(projects[newIndex]);
    setCurrentImageIndex(0);
  }, [selectedProject, projects]);

  const navigateImages = (direction) => {
    const totalImages = selectedProject.images.length;
    let newIndex = currentImageIndex;

    if (direction === "prev") {
      newIndex = currentImageIndex === 0 ? totalImages - 1 : currentImageIndex - 1;
    } else {
      newIndex = currentImageIndex === totalImages - 1 ? 0 : currentImageIndex + 1;
    }

    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          navigateImages("prev");
          break;
        case "ArrowRight":
          navigateImages("next");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, closeModal, navigateImages]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);
const sortedProjects = [...projects].sort((a, b) => parseInt(a.year) - parseInt(b.year));

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light tracking-tight text-gray-900 mb-2 text-center">
          Our <span className="font-medium">Projects</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
Discover our latest projects:        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {sortedProjects.map((project) => (            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl cursor-pointer h-64"
              onClick={() => openModal(project)}
            >
              <div className="absolute inset-0 bg-black/30 z-10"></div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <div className="relative w-full h-full">
                <img
  src={project.images[0]}
  alt={project.title}
  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 absolute inset-0"
/>

              </div>
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                <h3 className="text-xl font-medium text-white">{project.title}</h3>
                <p className="text-gray-200 mt-1">View details</p>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
              aria-hidden="true"
              onClick={closeModal}
            ></div>

            <div className="flex items-center justify-center min-h-screen p-4 text-center">
              <div
                className="inline-block w-full max-w-5xl text-left align-middle transition-all transform relative z-50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-xl relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-6 right-6 p-2 rounded-full bg-white/90 text-gray-800 hover:bg-gray-100 transition-colors shadow-md z-20"
                    aria-label="Close modal"
                  >
                    <FaTimes className="w-6 h-6" />
                  </button>

                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-64 md:h-96 md:w-4/5">
                    <img
  src={selectedProject.images[currentImageIndex]}
  alt={selectedProject.title}
  className="w-full h-full object-cover object-center absolute inset-0"
/>

                    </div>

                    <div className="p-6 md:w-1/2">
                      <h3 className="text-2xl font-medium text-gray-900 mb-3">
                        {selectedProject.title}{" "}
                      </h3>

                      <div className="flex items-center text-gray-600 mb-3">
                         {  /*    <svg
                          className="w-5 h-5 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                 <span>
                          <strong>Duration:</strong> {selectedProject.duration}
                        </span>*/}
                      </div>

                      <div className="flex items-start text-gray-600 mb-3">
                        <svg
                          className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span>
                          <strong>Our Role:</strong> {selectedProject.role}
                        </span>
                      </div>

                      <div className="flex items-start text-gray-600 mb-3">
                        <svg
                          className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 12l9 3-3 9-3-9-9-3 3-9 3 9z"
                          />
                        </svg>
                        <span>
                          <strong>Total Area:</strong> {selectedProject.area}
                        </span>
                      </div>

                      <div className="border-t border-gray-200 my-4"></div>

                      <p className="text-gray-700 mb-6">{selectedProject.description}</p>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-between w-full px-6">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateImages("prev");
                      }}
                      className={`p-2 rounded-full bg-white/90 text-gray-800 hover:bg-gray-100 transition-colors shadow-md ${
                        selectedProject.images.length <= 1 || currentImageIndex === 0
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      aria-label="Previous image"
                      disabled={selectedProject.images.length <= 1 || currentImageIndex === 0}
                    >
                      <FaChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateImages("next");
                      }}
                      className={`p-2 rounded-full bg-white/90 text-gray-800 hover:bg-gray-100 transition-colors shadow-md ${
                        selectedProject.images.length <= 1 || currentImageIndex === selectedProject.images.length - 1
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      aria-label="Next image"
                      disabled={selectedProject.images.length <= 1 || currentImageIndex === selectedProject.images.length - 1}
                    >
                      <FaChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
