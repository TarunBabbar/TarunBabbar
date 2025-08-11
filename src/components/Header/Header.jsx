export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-r from-[#a58888] to-[#dab080] text-white p-4 shadow-md z-50 text-center">
      <h1 className="text-2xl font-bold">Tarun Kumar Babbar</h1>
      <p className="text-sm">Test Automation Leader | GenAI Innovator | Architect of Scalable Testing Solutions</p>
      <nav className="mt-2">
        <a href="#about" className="mx-2 font-semibold hover:text-[#333]">About</a>
        <a href="#skills" className="mx-2 font-semibold hover:text-[#333]">Skills</a>
        <a href="#experience" className="mx-2 font-semibold hover:text-[#333]">Experience</a>
        <a href="#projects" className="mx-2 font-semibold hover:text-[#333]">Projects</a>
        <a href="#contact" className="mx-2 font-semibold hover:text-[#333]">Contact</a>
      </nav>
    </header>
  );
}
