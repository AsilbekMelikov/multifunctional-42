import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { activeLanguageData, languageData } from "@/constants/navbar";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Theme = () => {
  const [activeLanguage, setActiveLanguage] = useState("uz");
  const [t] = useTranslation("global");
  const { i18n } = useTranslation("global");

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
                  width={22}
                  height={22}
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
                <img
                  src={data.icon}
                  alt={data.label}
                  width={22}
                  height={22}
                  loading="lazy"
                  decoding="async"
                />
                <p className={`base-medium text-dark200_light800`}>
                  {t(data.label)}
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
