export default function Footer() {
  return (
    <footer className="bg-black text-white flex justify-between p-8">
      <p className="pr-4">&copy; Harvard Computer Society 2024</p>
      <p className="pl-4">
        <strong>Contact Us</strong>:{" "}
        <a href="mailto:hcs-board@hcs.harvard.edu" className="link">
          hcs-board@hcs.harvard.edu
        </a>
      </p>
    </footer>
  );
}
