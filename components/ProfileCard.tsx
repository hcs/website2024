export default function ProfileCard({
  name,
  position,
  image,
}: {
  name: string;
  position: string;
  image: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={name} className="w-60 h-60 rounded-full mb-4" />
      <h2 className="font-bold text-3xl text-center">{name}</h2>
      <p className="font-extralight text-lg text-center">{position}</p>
    </div>
  );
}
