const ProblemSolved = () => {
  const Problems = [
    {
      id: "01",
      title: "Communication Barrier",
      desc: "Ineffective communication between healthcare professionals create avoidable errors slows decision making and disrupt patient carre coordination",
    },
    {
      id: "02",
      title: "Collaboration Gaps",
      desc: "Without seamless collaboration, clinical teams cannot easily combine their expertise to support patient outcomes. The lack of shared communicatioln channels lead to slower care decision",
    },
    {
      id: "03",
      title: "Limited Expertise Access",
      desc: "Fragmented systems make it hard to tap into knowledge from other experts, reducig collaboration and effiency.",
    },
    {
      id: "04",
      title: "Broken Workflows",
      desc: "Patient information is scattered across multiple systems, making it hard for healthcare teams to cllaborate and deliver seamless care.",
    },
    {
      id: "05",
      title: "Slow, Outdated Systems",
      desc: "When systems lag or fail to integrate, clinicians waste valuable time navigating technology instead of focusing on patient car. This create delays, errors an frustration across the care team.",
    },
    {
      id: "06",
      title: "No Real Time Input",
      desc: "Without fast channels to colleagues, essential insights are delayed-impacting accuracy and treatment speed.",
    },
  ];

  return (
    <section className="w-full bg-blue-600 font-aeonik py-10 flex flex-col">
      <div className="px-20 align-center py-6 border-b border-black border-dashed">
        <p className="font-bold text-white font-bold text-2xl">The Problems We Are Solving</p>
        <p className="text-sm text-gray-300">The world is advancing. Healthcare should not be left behind.</p>
      </div>

      <div className="w-full mx-auto">
        {Problems.map((p, index) => (
          <div
            key={p.id}
            className={`
              flex items-center justify-between font-aeonik text-white text-4xl border-b border-black border-dashed py-16 px-20
              flex-col                 
              md:flex-row    font-aeonik          
              ${index % 2 === 1 ? "md:flex-row-reverse" : ""} 
            `}>
            <div className="text-6xl font-bold mb-4 md:mb-0">{p.id}</div>
            <div className="max-w-xs text-center md:text-left">
              <p className="text-lg text-white font-extrabold">{p.title}</p>
              <p className="text-sm text-gray-300">{p.desc}</p>
            </div>
          </div>

        ))}
      </div>
    </section>
  );
};

export default ProblemSolved;
