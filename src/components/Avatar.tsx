import avatarPixar from "/avatar-pixar.png";

export default function Avatar() {
  return (
    <div className="rounded-full border-4 border-white bg-white">
      <div className="rounded-full h-auto w-40 overflow-hidden">
        <img
          src={avatarPixar}
          alt="Avatar"
          className="object-contain h-full"
        ></img>
      </div>
    </div>
  );
}
