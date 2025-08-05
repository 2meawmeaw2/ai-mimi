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
      title: "مصمم للمطورين",
      description: "مصمم للمهندسين والمطورين والحالمين والمفكرين والمنفذين.",
      icon: <IconTerminal2 />,
    },
    {
      title: "سهل الاستخدام",
      description: "سهل الاستخدام مثل أجهزة Apple، وغالي مثلها.",
      icon: <IconEaseInOut />,
    },
    {
      title: "أسعار لا مثيل لها",
      description: "أفضل الأسعار في السوق. بدون اشتراك، بدون بطاقة ائتمان.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "ضمان تشغيل 100٪",
      description: "لا أحد يستطيع إيقافنا.",
      icon: <IconCloud />,
    },
    {
      title: "هيكل متعدد المستخدمين",
      description: "شارك كلمات المرور بدلًا من شراء عضويات جديدة.",
      icon: <IconRouteAltLeft />,
    },
  ];
  return (
    <div
      id="Win"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto"
      dir="rtl"
    >
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
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
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-yellow-400/30",
        (index === 0 || index === 4) && "lg:border-l border-yellow-400/30",
        index < 4 && "lg:border-b border-yellow-400/30"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-yellow-100/30 dark:from-yellow-900/10 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-yellow-100/30 dark:from-yellow-900/10 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-yellow-600 dark:text-yellow-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute right-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tl-full rounded-bl-full bg-yellow-300 dark:bg-yellow-700 group-hover/feature:bg-yellow-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:-translate-x-2 transition duration-200 inline-block text-yellow-800 dark:text-yellow-200">
          {title}
        </span>
      </div>
      <p className="text-sm text-yellow-700 dark:text-yellow-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
