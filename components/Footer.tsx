export default function Footer() {
  return (
    <footer className="bg-black text-white flex justify-between p-8">
      <div>
        <p className="pr-4">&copy; Harvard Computer Society 2024</p>
        <p className="text-xs">A student-run organization at Harvard College</p>
      </div>
      <p className="pl-4">
        <strong>Contact Us</strong>:{" "}
        <a href="mailto:presidents@hcs.harvard.edu" className="link">
          presidents@hcs.harvard.edu
        </a>
      </p>
    </footer>
  );
}
