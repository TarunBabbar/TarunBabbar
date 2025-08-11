export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center p-4 bg-[#333] text-white mt-8">
      <p>© {currentYear} Tarun Kumar Babbar</p>
    </footer>
  );
}
