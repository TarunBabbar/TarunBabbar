export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
  <footer className="text-center p-4 bg-[#333] text-white fixed bottom-0 left-0 w-full z-50">
      <p>Developed by Tarun Kumar Babbar ©{currentYear} </p>
    </footer>
  );
}
