import avatarPixar from "/avatar-pixar.png";

export default function Avatar() {
  return (
    <div className="rounded-full border-4 border-white bg-white overflow-hidden">
      <img
        src={avatarPixar}
        alt="Avatar"
        className="object-cover w-40 h-auto"
      ></img>
    </div>
  );
}
