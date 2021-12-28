const link = [
  "Meta",
  "About",
  "Blog",
  "Jobs",
  "Help",
  "API",
  "Privacy",
  "Terms",
  "Top Accounts",
  "Hastags",
  "Location",
  "Instagram Lite",
];

export default function Footer() {
  return (
    <footer className="py-5 pt-14">
      <ul className="flex justify-center flex-wrap gap-5">
        {link.map((item) => (
          <li key={item} className="list-none text-xs text-gray-500">
            <a href="#"> {item}</a>
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-500 text-center pt-8">
        © 2021 Instagram from Meta
      </p>
    </footer>
  );
}
