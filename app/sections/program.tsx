"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Program: React.FC = () => {
  const [activeModule, setActiveModule] = useState(0);

  const courseModules = [
    {
      title: "كيفاش يخدم الذكاء الاصطناعي؟ وكيفاش نستغلو افضل استغلال ؟",
      duration: "أسبوع واحد",
      lessons: 1,
      topics: [
        "نفهمو كيفاش يخدم الذكاء الاصطناعي فالكواليس بطريقة مبسطة",
        "نتعرفو على تقنيات Prompting (فن طرح الأسئلة)",
        "كيفاش الذكاء الاصطناعي مايرجعنيش غبي كي نستعملو ؟",
      ],
    },
    {
      title: "صناعة المحتوى الذكي: من الفكرة للنشر",
      duration: "أسبوع واحد",
      lessons: 1,
      topics: [
        "كيفاش تجيب أفكار محتوى أوتوماتيكياً",
        "توليد منشورات، فيديوهات، صور، scripts بطريقة احترافية",
        "أسرار توليد الصور والفيديوهات بأفضل نتيجة ممكنة",
        "أدوات جاهزة + قوالب تنفعك تخدم وتنشر بسهولة",
      ],
    },
    {
      title: "دير موقعك بلا ماتتعلم برمجة",
      duration: "أسبوع واحد",
      lessons: 1,
      topics: [
        "كيفاش تبني landing page ولا موقع صغير بخطوات بسيطة",
        "أدوات مجانية تخليك تبني portfolio أو منصة خدمتك",
        "تطبيق مباشر: نبنيو موقع بسيط لشركة تأليف قصص",
      ],
    },
    {
      title: "خلي AI يجاوب على الزبائن في بلاصتك",
      duration: "أسبوع واحد",
      lessons: 1,
      topics: [
        "كيفاش تدرب ذكاء اصطناعي يجاوب على الأسئلة المتكررة",
        "بناء بوت يجاوب تلقائيًا في الموقع، واتساب، إنستغرام...",
        "التطبيق: تنشئ بوت خاص بخدمتك في نفس الحصة",
      ],
    },
    {
      title: "خدم GPT خاص يخدم معاك",
      duration: "أسبوع واحد",
      lessons: 1,
      topics: [
        "نبنيو نسخة خاصة بك من GPT",
        "تدريب عملي على بناء GPT Assistant يخدم مهام معينة لي تحتاجها",
        "أمثلة فالدرس: GPT محامي، GPT خاص للطلبة، ...",
      ],
    },
    {
      title: "خلّي المهام التافهة تتخدم وحدها (AI Automations)",
      duration: "أسبوع واحد",
      lessons: 1,
      topics: [
        "نتعلمو كيفاش نوتوماتيزيو المهام لي نكرهوهم ونعاودوهم",
        "ربط أدوات مع بعض (مواقع، نماذج، Google Sheets...)",
        "استعمال أدوات مثل Make و Zapier بدون برمجة",
        "التطبيق: أتمتة عملية صناعة المحتوى في صفحة أخبار",
      ],
    },
    {
      title: "كيفاش تدخل دراهم من الذكاء الاصطناعي؟",
      duration: "أسبوع واحد",
      lessons: 1,
      topics: [
        "نكتشفو أمثلة تع خدمات ومنتجات تقدر تصنعهم وتبيعهم بالذكاء الاصطناعي",
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
    <section className=" relative z-50 text-white font-arabic min-h-screen py-8 sm:py-12 px-3 sm:px-4 md:px-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-yellow mb-3 sm:mb-4">
            برنامج دورة الذكاء الاصطناعي
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-yellow/70 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            تعلم الذكاء الاصطناعي من الصفر حتى الاحتراف مع مشاريع عملية وشهادة
            معتمدة
          </p>

          {/* Course Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 max-w-md mx-auto">
            <div className="bg-yellow/10 border border-yellow/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow mb-1 sm:mb-2">
                4
              </div>
              <div className="text-xs sm:text-sm md:text-base text-yellow/70">
                أسابيع
              </div>
            </div>
            <div className="bg-yellow/10 border border-yellow/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow mb-1 sm:mb-2">
                12
              </div>
              <div className="text-xs sm:text-sm md:text-base text-yellow/70">
                ساعة{" "}
              </div>
            </div>
            <div className="bg-yellow/10 border border-yellow/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 col-span-2 sm:col-span-1">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow mb-1 sm:mb-2">
                8
              </div>
              <div className="text-xs sm:text-sm md:text-base text-yellow/70">
                حصص
              </div>
            </div>
          </div>
        </div>

        {/* Course Modules */}
        <div className="space-y-3 sm:space-y-4 md:space-y-6 transition-all  duration-300">
          {courseModules.map((module, index) => (
            <div
              key={index}
              className={`bg-yellow/5 border rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 ${
                activeModule === index
                  ? "border-yellow shadow-md sm:shadow-lg shadow-yellow/20"
                  : "border-gray-700 hover:border-yellow/50"
              }`}
            >
              {/* Module Header */}
              <div
                className="p-3 sm:p-4 md:p-6 cursor-pointer   "
                onClick={() =>
                  setActiveModule(activeModule === index ? -1 : index)
                }
              >
                <div className="flex items-start justify-between gap-2 transition-all duration-300">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 md:gap-4 mb-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-black font-bold text-xs sm:text-sm md:text-base">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-yellow">
                        {module.title}
                      </h3>
                    </div>

                    <div className="transition-all duration-300 flex flex-wrap gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm md:text-base text-yellow/70 sm:mr-14">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4"
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
                      <div className="flex items-center gap-1 sm:gap-2">
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{module.lessons} درس</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0 mt-1 sm:mt-0">
                    <svg
                      className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow transition-transform duration-300 ${
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
              <AnimatePresence initial={false}>
                {activeModule === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="border-t border-gray-700 p-3 sm:p-4 md:p-6 bg-black/30">
                      <h4 className="text-base sm:text-lg md:text-xl font-semibold text-yellow mb-3 sm:mb-4 text-right">
                        المواضيع المشمولة:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                        {module.topics.map((topic, topicIndex) => (
                          <div
                            key={topicIndex}
                            className="flex items-center justify-end gap-2 sm:gap-3 p-2 sm:p-3 bg-yellow/5 rounded-md sm:rounded-lg border border-yellow/10"
                          >
                            <span className="text-white text-sm sm:text-base text-right">
                              {topic}
                            </span>
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow rounded-full flex-shrink-0"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="bg-gradient-to-br from-yellow/10 to-yellow/0 border border-yellow/30 rounded-xl sm:rounded-2xl shadow-md shadow-yellow/20 p-4 sm:p-6 md:p-8 mt-10 sm:mt-12">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-black text-sm sm:text-base md:text-lg">
                      🎯
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-yellow">
                    المشروع النهائي: خدمتك الرقمية بالذكاء الاصطناعي
                  </h3>
                </div>
                <div className="text-yellow/80 text-sm sm:text-base md:text-lg mb-2">
                  المدة: أسبوع واحد – عدد الحصص: 1
                </div>
              </div>
            </div>

            <div className="mt-4 border-t border-yellow/20 pt-4 sm:pt-6">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-yellow mb-3 sm:mb-4 text-right">
                المواضيع المشمولة:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                <div className="flex items-center justify-end gap-2 sm:gap-3 p-2 sm:p-3 bg-yellow/5 rounded-md sm:rounded-lg border border-yellow/10">
                  <span className="text-white text-sm sm:text-base text-right">
                    كل مشارك راح يخدم خدمة أو منتج رقمي يستغل فيه الذكاء
                    الاصطناعي
                  </span>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow rounded-full flex-shrink-0"></div>
                </div>
                <div className="flex items-center justify-end gap-2 sm:gap-3 p-2 sm:p-3 bg-yellow/5 rounded-md sm:rounded-lg border border-yellow/10">
                  <span className="text-white text-sm sm:text-base text-right">
                    إنشاء خطة تسويق بسيطة لهذا المنتج أو الخدمة
                  </span>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow rounded-full flex-shrink-0"></div>
                </div>
                <div className="flex items-center justify-end gap-2 sm:gap-3 p-2 sm:p-3 bg-yellow/5 rounded-md sm:rounded-lg border border-yellow/10">
                  <span className="text-white text-sm sm:text-base text-right">
                    عرض العمل النهائي أمام المشاركين والمشرفين
                  </span>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow rounded-full flex-shrink-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow/10 to-yellow/5 border border-yellow/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow mb-3 sm:mb-4">
              ابدأ رحلتك في الذكاء الاصطناعي اليوم
            </h3>
            <p className="text-yellow/70 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base px-1">
              انضم إلى آلاف الطلاب الذين تعلموا الذكاء الاصطناعي وغيروا مسارهم
              المهني
            </p>
            <button className="bg-yellow text-black font-bold py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg sm:rounded-xl hover:bg-yellow/90 transition-colors duration-300 text-sm sm:text-base w-full max-w-xs mx-auto">
              سجل الآن واحصل على خصم 30%
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Program;
