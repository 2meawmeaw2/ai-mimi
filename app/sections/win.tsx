import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export default function Win() {
  const features = [
    {
      title: "8 حصص لايف (ومسجلة تبقى عندك)",
      description: "تتعلم خطوة بخطوة وتعاود ترجع لأي درس وقت ما تحب.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "مجموعة تلغرام تفاعلية",
      description:
        "تطرح أسئلتك، تتبادل أفكارك، وتلقى الدعم من المشاركين والمدرّبة.",
      icon: <IconTerminal2 />,
    },
    {
      title: "دليل PDF شامل فيه +100 أداة",
      description: "مع قوالب Prompts جاهزة باش تطلق خدمتك مباشرة وتربح الوقت.",
      icon: <IconEaseInOut />,
    },
    {
      title: "بوت تسويق مخصص للسوق الجزائري",
      description: "يسقسيك شوية أسئلة ويعطيك خطة تسويق تخدمها بلا صداع.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "هدية: حساب ChatGPT Plus مدفوع",
      description: "تجرب وتطبق فيه كلشي بالراحة… بلا ما تخلص عليه.",
      icon: <IconCloud />,
    },
  ];
  return (
    <div
      id="Win"
      className="font-arabic relative z-10 py-10 max-w-7xl mx-auto px-4"
      dir="rtl"
    >
      {/* Title - Full width, centered */}
      <h1 className="text-right mr-7 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-yellow mb-10">
        كي تسجل راح تدي :
      </h1>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-[#deb71d] text-black  text-center max-h-[70vh] p-6  shadow-lg overflow-auto w-full">
        <h2 className="text-[1.7em] font-black mb-4">هل الدورة هادي ليك؟</h2>
        <p className="mb-8 font-bold text-[0.9em]">
          إذا جاوبت بـ "نعم" على وحدة من هاد الأسئلة… راك في المكان الصح:
        </p>
        <ul className="text-[0.89em] list-disc list-inside space-y-2 mb-4">
          <li>تحس روحك تضيّع وقت في مهام تتعاود؟</li>
          <li>تحب تدير خدمتك أسرع وتدخل دخل أكثر؟</li>
          <li>حاب تطلق مشروع ذكي موقع ولا تطبيق… بس ماكش مبرمج؟</li>
          <li>صانعة محتوى، مصمّم، ولا طالب حاب تطور خدمتك بلا فريق؟</li>
          <li>فضولي تحب تفهم الذكاء الاصطناعي وتخدم به حياتك اليومية؟</li>
        </ul>
      </div>
    </div>
  );
}
const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <>
      {" "}
      <div
        className={cn(
          "flex flex-col lg:border-r py-10 relative group/feature border-white/30",
          (index === 0 || index === 4) && "lg:border-l border-white/30",
          index < 4 && "lg:border-b border-white/30"
        )}
      >
        {index < 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-white/30 dark:from-white/10 to-transparent pointer-events-none" />
        )}
        {index >= 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-white/30 dark:from-white/10 to-transparent pointer-events-none" />
        )}
        <div className="mb-4 relative z-10 px-10 text-white dark:text-white">
          {icon}
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute right-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tl-full rounded-bl-full bg-white/70 dark:bg-white/20 group-hover/feature:bg-white transition-all duration-200 origin-center" />
          <span className="group-hover/feature:-translate-x-2 transition duration-200 inline-block text-white dark:text-white">
            {title}
          </span>
        </div>
        <p className="text-sm text-white/80 dark:text-white/70 max-w-xs relative z-10 px-10">
          {description}
        </p>
      </div>
    </>
  );
};
