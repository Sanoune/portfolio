import imgBooki from "/booki-web.png";
import imgFisheye from "/fisheye-web.png";
import imgGameOn from "/gameon-web.png";
import imgKasa from "/kasa-web.png";
import imgOhMyFood from "/ohmyfood-web.png";
import imgPetitsPlats from "/petits-plats-web.png";
import imgSportSee from "/sportsee-web.png";

export default function ProjectShowcase() {
  return (
    <div className="flex flex-col gap-3 ">
      <div className="text-3xl font-bold py-6 self-center">
        <p>Projets</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <a
          href="https://sanoune.github.io/Booki/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl filter grayscale  hover:grayscale-0"
        >
          <img
            src={imgBooki}
            alt="Image web Booki"
            className="rounded-xl w-full h-full object-cover"
          />
        </a>
        <a
          href="https://sanoune.github.io/Front-End-Fisheye/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl filter grayscale  hover:grayscale-0"
        >
          <img
            src={imgFisheye}
            alt="Image web Fisheye"
            className="rounded-xl w-full h-full object-cover"
          />
        </a>
        <a
          href="https://sanoune.github.io/Les-petits-plats/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl filter grayscale  hover:grayscale-0"
        >
          <img
            src={imgPetitsPlats}
            alt="Image web petits plats"
            className="rounded-xl w-full h-full object-cover"
          />
        </a>
        <a
          href="https://sanoune.github.io/Kasa/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl filter grayscale  hover:grayscale-0"
        >
          <img
            src={imgKasa}
            alt=" Image web Kasa"
            className="rounded-xl w-full h-full object-cover"
          />
        </a>
        <a
          href="https://sanoune.github.io/projet-3-openclassrooms-oh-my-food/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl filter grayscale  hover:grayscale-0"
        >
          <img
            src={imgOhMyFood}
            alt="Image web Oh My Food"
            className="rounded-xl w-full h-full object-cover"
          />
        </a>
        <a
          href="https://sanoune.github.io/GameOn-website-FR/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl filter grayscale  hover:grayscale-0"
        >
          <img
            src={imgGameOn}
            alt="Image web Game On"
            className="rounded-xl w-full h-full object-cover"
          />
        </a>
        <a
          href=" https://sanoune.github.io/SportSee/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl filter grayscale  hover:grayscale-0"
        >
          <img
            src={imgSportSee}
            alt="Image Sport See"
            className="rounded-xl w-full h-full object-cover"
          />
        </a>
      </div>
    </div>
  );
}
