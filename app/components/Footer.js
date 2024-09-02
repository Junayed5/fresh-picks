import { CiLocationOn } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto bg-white py-32 grid grid-cols-1 md:grid-cols-3">
      <div className="w-fit">
        <img src="fresh-picks.png" alt="" />

        <div>
          <h3 className="text-2xl mt-10 text-gray-400">
            Got Question? Call us 24/7
          </h3>
          <h2 className="text-xl font-semibold ">[+880]176006906 </h2>
        </div>
        <div>
          <p className="text-sm mt-6">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>

          <button className="bg-secondary h-14 w-32 mt-7 rounded-md text-white text-sm ">
            <a
            className="flex justify-center items-center gap-1"
              target="_blank"
              href="https://www.google.com/maps/@22.6746143,90.3419019,8322m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
            >
              <CiLocationOn className="font-bold"/> View On Map
            </a>
          </button>
        </div>
      </div>
      <div>
        <h3>We Using Safe Payments</h3>
        <p>Secured By :</p>
      </div>
      <div className="flex gap-x-20">
        <div>
          <h3 className="text-lg font-semibold pb-3">Quick Links</h3>
          <ul className="text-gray-600 leading-loose">
            <li>Support Center</li>
            <li>Term & Conditions</li>
            <li>Shipping</li>
            <li>Privacy Policy</li>
            <li>Help</li>
            <li>Products Return</li>
            <li>FAQS</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold pb-3">Our Stores</h3>
          <ul className="text-gray-600 leading-loose ">
            <li>New York</li>
            <li>London SF</li>
            <li>Las Vegas</li>
            <li>Cockfosters BP</li>
            <li>Albarto</li>
            <li>Los Angeles</li>
            <li>Chicago</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
