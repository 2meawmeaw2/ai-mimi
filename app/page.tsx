import Hero from "./sections/Hero";
import Who from "./sections/Who";
import Program from "./sections/program";
import Win from "./sections/win";
import Contact from "./sections/Contact";
export default function Home() {
  const steps = [
    "Enter your email address",
    "Create a strong password",
    "Set up two-factor authentication",
    "Verify your identity",
  ];

  return (
    <div className="relative">
      <Hero />
      <div className="">
        <Who />{" "}
        <section id="Who" className="w-full font-arabic bg-black z-50">
          <Win />
          <div className=" w-full max-h-500 ">
            <h1 className="overflow-clip  text-center font-black text-4xl  text-yellow  py-6">
              وش لازملك{" "}
            </h1>

            <div className="h-[15%]   flex items-center justify-center p-5">
              <div className="bg-yellow/10 border border-gray-700 rounded-xl p-8 max-w-md w-full shadow-2xl shadow-yellow-500/20">
                <h2 className="text-yellow text-right text-2xl font-semibold mb-2">
                  ستفد من مزايا حصرية، ل
                </h2>

                <p className="text-yellow/50 text-right text-base mb-7">
                  ستفد من مزايا حصرية، وخصائص مميزة، ل
                </p>

                <ul className="space-y-4 mb-6 ">
                  {steps.map((step, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-evenly"
                    >
                      <span className="text-white text-base font-medium text-right">
                        ستفد من مزايا حصرية، وخصائص مميزة، ل
                      </span>
                      <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-800 pt-6">
                  <p className="text-yellow text-right text-sm leading-relaxed">
                    ستفد من مزايا حصرية، وخصائص مميزة، لا
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full ">
            <Program />
          </div>
          <Contact />
        </section>
      </div>
    </div>
  );
}
