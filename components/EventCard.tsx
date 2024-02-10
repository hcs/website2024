import { Button } from "@/components/ui/button";

export default function EventCard({
  title,
  date,
  description,
  link,
}: {
  title: string;
  date: string;
  description: string;
  link: string;
}) {
  return (
    <div className="flex flex-col gap-3 shadow-lg p-10 rounded-lg max-w-md justify-center bg-slate-50">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-500">{date}</p>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      <div className="flex justify-end">
        <a href={link} target="_blank">
          <Button size="lg">Learn More</Button>
        </a>
      </div>
    </div>
  );
}
