import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Theme = () => {
  const [activeLanguage, setActiveLanguage] = useState("uz");
  const [t] = useTranslation("global");
  const { i18n } = useTranslation("global");

  const languageData = [
    {
      value: "uz",
      label: t("navbar.language.uzb"),
      icon: "/assets/images/uz.png",
    },
    {
      value: "ru",
      label: t("navbar.language.ru"),
      icon: "/assets/images/ru.png",
    },
    {
      value: "eng",
      label: t("navbar.language.eng"),
      icon: "/assets/images/en.png",
    },
  ];

  const activeLanguageData = [
    {
      src: "/assets/images/uz.png",
      alt: "Uzb flag",
      label: "uz",
    },
    {
      src: "/assets/images/ru.png",
      alt: "Ru flag",
      label: "ru",
    },
    {
      src: "/assets/images/en.png",
      alt: "Eng flag",
      label: "eng",
    },
  ];

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {activeLanguageData.map((language) => {
            return (
              activeLanguage === language.label && (
                <img
                  key={language.src}
                  src={language.src}
                  alt={language.alt}
                  width={20}
                  height={20}
                  loading="lazy"
                  decoding="async"
                />
              )
            );
          })}
        </MenubarTrigger>
        <MenubarContent className="light-border background-light900_dark200 absolute -left-7 min-w-[120px] rounded border py-2">
          {languageData.map((data) => {
            return (
              <MenubarItem
                key={data.value}
                className={`${activeLanguage === data.value && "bg-light-700 dark:bg-dark-500"} flex items-center gap-3 rounded-md px-2.5 py-2`}
                onClick={() => {
                  setActiveLanguage(data.value);
                  i18n.changeLanguage(data.value);
                }}
              >
                <img src={data.icon} alt={data.label} width={20} height={20} />
                <p className={`base-medium text-dark200_light800`}>
                  {data.label}
                </p>
              </MenubarItem>
            );
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
