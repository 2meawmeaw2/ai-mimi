"use client";
import { useState } from "react";

const Program: React.FC = () => {
  const [activeModule, setActiveModule] = useState(0);

  const courseModules = [
    {
      title: "مقدمة في الذكاء الاصطناعي",
      duration: "4 أسابيع",
      lessons: 12,
      topics: [
        "تاريخ وتطور الذكاء الاصطناعي",
        "أنواع الذكاء الاصطناعي",
        "التطبيقات العملية",
        "الأدوات والبرمجيات",
      ],
    },
    {
      title: "تعلم الآلة والخوارزميات",
      duration: "6 أسابيع",
      lessons: 18,
      topics: [
        "أساسيات تعلم الآلة",
        "الخوارزميات المشرفة",
        "الخوارزميات غير المشرفة",
        "التقييم والتحسين",
      ],
    },
    {
      title: "الشبكات العصبية العميقة",
      duration: "8 أسابيع",
      lessons: 24,
      topics: [
        "مقدمة في الشبكات العصبية",
        "التعلم العميق",
        "شبكات CNN و RNN",
        "مشاريع عملية",
      ],
    },
  ];

  const totalWeeks = courseModules.reduce((sum, module) => {
    return sum + parseInt(module.duration.split(" ")[0]);
  }, 0);

  const totalLessons = courseModules.reduce(
    (sum, module) => sum + module.lessons,
    0
  );
  return (
    <section className="bg-black text-white font-arabic min-h-screen py-12 px-4 md:px-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-yellow mb-4">
            برنامج دورة الذكاء الاصطناعي
          </h1>
          <p className="text-lg md:text-xl text-yellow/70 mb-8 max-w-3xl mx-auto">
            تعلم الذكاء الاصطناعي من الصفر حتى الاحتراف مع مشاريع عملية وشهادة
            معتمدة
          </p>

          {/* Course Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            <div className="bg-yellow/10 border border-yellow/20 rounded-xl p-4 md:p-6">
              <div className="text-2xl md:text-3xl font-bold text-yellow mb-2">
                {totalWeeks}
              </div>
              <div className="text-sm md:text-base text-yellow/70">أسبوع</div>
            </div>
            <div className="bg-yellow/10 border border-yellow/20 rounded-xl p-4 md:p-6">
              <div className="text-2xl md:text-3xl font-bold text-yellow mb-2">
                {totalLessons}
              </div>
              <div className="text-sm md:text-base text-yellow/70">درس</div>
            </div>
            <div className="bg-yellow/10 border border-yellow/20 rounded-xl p-4 md:p-6 col-span-2 md:col-span-1">
              <div className="text-2xl md:text-3xl font-bold text-yellow mb-2">
                6
              </div>
              <div className="text-sm md:text-base text-yellow/70">وحدات</div>
            </div>
          </div>
        </div>

        {/* Course Modules */}
        <div className="space-y-4 md:space-y-6">
          {courseModules.map((module, index) => (
            <div
              key={index}
              className={`bg-yellow/5 border rounded-xl overflow-hidden transition-all duration-300 ${
                activeModule === index
                  ? "border-yellow shadow-lg shadow-yellow/20"
                  : "border-gray-700 hover:border-yellow/50"
              }`}
            >
              {/* Module Header */}
              <div
                className="p-4 md:p-6 cursor-pointer"
                onClick={() =>
                  setActiveModule(activeModule === index ? -1 : index)
                }
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-black font-bold text-sm md:text-base">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-2xl font-bold text-yellow">
                        {module.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-3 md:gap-6 text-sm md:text-base text-yellow/70 mr-0 md:mr-14">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{module.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{module.lessons} درس</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0 mr-2 md:mr-4">
                    <svg
                      className={`w-5 h-5 md:w-6 md:h-6 text-yellow transition-transform duration-300 ${
                        activeModule === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Module Content */}
              {activeModule === index && (
                <div className="border-t border-gray-700 p-4 md:p-6 bg-black/30">
                  <h4 className="text-lg md:text-xl font-semibold text-yellow mb-4 text-right">
                    المواضيع المشمولة:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {module.topics.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="flex items-center justify-end gap-3 p-3 bg-yellow/5 rounded-lg border border-yellow/10"
                      >
                        <span className="text-white text-sm md:text-base text-right">
                          {topic}
                        </span>
                        <div className="w-2 h-2 bg-yellow rounded-full flex-shrink-0"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow/10 to-yellow/5 border border-yellow/20 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-yellow mb-4">
              ابدأ رحلتك في الذكاء الاصطناعي اليوم
            </h3>
            <p className="text-yellow/70 mb-6 text-sm md:text-base">
              انضم إلى آلاف الطلاب الذين تعلموا الذكاء الاصطناعي وغيروا مسارهم
              المهني
            </p>
            <button className="bg-yellow text-black font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl hover:bg-yellow/90 transition-colors duration-300 text-sm md:text-base w-full md:w-auto">
              سجل الآن واحصل على خصم 30%
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Program;
