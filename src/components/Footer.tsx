import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className=" text-black py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Aba Sarah. Tous droits réservés.
        </p>
        <div className="mt-4 sm:mt-0 flex space-x-6 justify-center sm:justify-end">
          <a
            href="https://github.com/Sanoune"
            className="flex items-center gap-2"
            aria-label="Voir mon profil GitHub"
            target="_blank"
          >
            <FaGithub size={24} />
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
