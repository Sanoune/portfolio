export default function About() {
  return (
    <div className="flex flex-col gap-10 items-center ">
      <p className="text-2xl sm:text-3xl !tracking-widest p-2  leading-relaxed">
        Chaque projet est une opportunité unique de&nbsp;
        <span className=" bg-black text-white rounded-md p-1 font-bold p-1 leading-9">
          créer
        </span>
        &nbsp;quelque chose qui compte.
      </p>

      <p className="text-xl font-light !tracking-widest  p-2  leading-relaxed">
        Le développement, c'est faire d'une idée une réalité tangible,&nbsp;
        <span className=" bg-black text-white rounded-md p-1 font-bold p-1 leading-9 ">
          avec
        </span>
        &nbsp;rigueur et créativité.
      </p>

      <p className="text-sm font-light !tracking-widest  p-2  !leading-relaxed">
        Sans&nbsp;
        <span className=" bg-black text-white rounded-md p-1 font-bold  p-1 leading-9">
          passion
        </span>
        , rien ne se construit durablement. C'est elle qui donne un sens au
        travail et nous pousse à aller toujours plus loin.
      </p>
    </div>
  );
}
