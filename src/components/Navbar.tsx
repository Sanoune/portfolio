import { FaRegUserCircle } from "react-icons/fa";
import { HiAtSymbol } from "react-icons/hi";
import iconLink from "/linkedin.png";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between gap-2 p-3 sm:px-12 px-6 my-6 sm:gap-3 w-full text-lg">
        <div>
          <ul className="flex flex-1 gap-3">
            <li>
              <a
                href="https://linkedin.com/in/sarah-aba-0b73202b0"
                target="_blank"
                className="flex sm:flex-row flex-col gap-1 items-center "
              >
                <img src={iconLink} alt="Logo Fisheye" className="w-6 h-6" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-3">
            <li className="flex sm:flex-row flex-col items-center gap-1">
              <FaRegUserCircle size={24} />
              <a
                href="/cv-aba-sarah.pdf"
                download="SarahAba_DeveloppeuseFrontEnd"
              >
                CV
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="flex  sm:flex-row flex-col items-center gap-1"
                href="mailto:sarah.aba@hotmail.fr"
              >
                <HiAtSymbol size={24} className="" />
                <span>Mail</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
