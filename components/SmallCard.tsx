export default function SmallCard({
  title,
  description,
  link,
  image,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <a href={link} target="_blank">
      <div className="flex flex-row gap-5 shadow-lg p-4 rounded-lg max-w-sm justify-center items-center hover:bg-red-50 border-rose-700 border-2 transition-colors">
        <img src={image} alt="decorative" className="w-20 h-20" />
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="flex justify-end"></div>
      </div>
    </a>
  );
}
