import { FaHome, FaPaintBrush, FaWrench, FaClipboardList } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-6 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">
              <span className="text-principal">Comprehensive</span> Property Management
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
            Wherever the client is, whatever the complexity is, whenever challenges occur—our duty is to deliver, as we are committed to supporting our customers with their property needs."

</p>
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">

             Our duty is to deliver as we committed to support our customers on their properties needs.

            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <FaHome className="text-3xl text-principal" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Property Management</h3>
                  <p className="text-gray-600">Expert handling of your properties, from leasing to general upkeep.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaPaintBrush className="text-3xl text-principal" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Cleaning & Maintenance</h3>
                  <p className="text-gray-600">Comprehensive cleaning and regular maintenance to keep your properties pristine.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaWrench className="text-3xl text-principal" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Repairs & Upgrades</h3>
                  <p className="text-gray-600">We provide top-tier repair services and home upgrades to add value to your property.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaClipboardList className="text-3xl text-principal" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Tenant Management</h3>
                  <p className="text-gray-600">From tenant screening to rent collection, we handle all aspects of tenant management.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="/images/about2.jpg"
              alt="Property management"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
