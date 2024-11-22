import { FaUserGraduate } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
export default function Formation() {
  return (
    <div className="sm:p-8 sm:py-24 py-12 p-6 flex flex-col sm:flex-row gap-12 ">
      <div className="flex flex-col flex-1 items-center text-center gap-4">
        <FaUserGraduate size={35} className="" />
        <p className="text-xl leading-relaxed">
          Développeuse conceptrice logiciel RNCP niveau 6(bac+3/4)
          <br></br>
          <span className="font-bold text-base">
            Je suis toujours prête à apprendre et explorer de nouvelles
            technologies
          </span>
        </p>
      </div>

      <div className="flex flex-col flex-1 items-center text-center gap-4">
        <MdWork size={35} className="" />
        <p className="text-xl leading-relaxed">
          Développeuse web freelance, disponible pour des
          <br></br>
          <span className="font-bold text-base">contrats en CDI, CDD. </span>
        </p>
      </div>
    </div>
  );
}
