export default function Experience() {
  return (
    <section id="experience" className="p-8 bg-white rounded-lg scroll-mt-32">
      <h2 className="text-2xl font-bold text-[#ff6f61] mb-6">Professional Experience</h2>

      {[
        {
          company: "Coupa Software (2018–2025)",
          description: "Coupa is a global leader in spend management solutions. I spearheaded test automation across UI, API, and system layers using C#.NET, Selenium, Playwright, and SpecFlow—architecting modular frameworks aligned with SOLID principles. I built CI/CD-integrated platforms with Azure Pipelines and GitHub, led performance testing with VSTS LoadTest, and mentored teams in BDD/TDD excellence across agile sprints."
        },
        {
          company: "Varian Medical Systems (2016–2017)",
          description: "Varian is a pioneer in cancer care and medical imaging technologies. I designed robust UI and performance automation frameworks using Selenium and VSTS, and developed custom testing utilities with WPF and JavaScript. My work streamlined integration testing and supported agile delivery through CI pipeline automation."
        },
        {
          company: "Tata Consultancy Services (2010–2016)",
          description: "TCS is a global IT services and consulting powerhouse. I engineered automation frameworks for Microsoft projects using C#.NET and SpecFlow, migrating legacy systems to Selenium with scalable design patterns. I owned CI/CD and BDD strategies, led onboarding, and drove quality-first delivery across distributed teams."
        },
        {
          company: "Infosys Technologies (2007–2010)",
          description: "Infosys is a major IT services provider with deep ties to Microsoft ODC. I validated core Windows OS components and automated manual workflows to improve testing efficiency. My role involved defect triaging, DCR validation, and ensuring high-quality releases through structured QA processes."
        }
      ].map((exp, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">{exp.company}</h3>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
}
