import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ThemeContext } from "@/context/ThemeProvider";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const Theme = () => {
  const [t] = useTranslation("global");
  const { mode, setMode } = useContext(ThemeContext);

  const themeData = [
    {
      value: "light",
      label: t("navbar.mode.light"),
      icon: "/assets/sun.svg",
    },
    {
      value: "dark",
      label: t("navbar.mode.dark"),
      icon: "/assets/moon.svg",
    },
    {
      value: "system",
      label: t("navbar.mode.system"),
      icon: "/assets/computer.svg",
    },
  ];

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === "dark" ? (
            <img
              src="/assets/sun.svg"
              alt="Sun"
              width={20}
              height={20}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <img
              src="/assets/moon.svg"
              alt="Moon"
              width={20}
              height={20}
              loading="lazy"
              decoding="async"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="light-border background-light900_dark200 absolute -left-7 min-w-[120px] rounded border py-2">
          {themeData.map((theme) => {
            return (
              <MenubarItem
                key={theme.value}
                className={`${mode === theme.value && "bg-light-700 dark:bg-dark-500"} flex items-center gap-3 rounded-md px-2.5 py-2`}
                onClick={() => {
                  setMode(theme.value);

                  if (theme.value !== "system") {
                    localStorage.theme = theme.value;
                  } else {
                    localStorage.removeItem("theme");
                  }
                }}
              >
                <img
                  src={theme.icon}
                  alt={theme.label}
                  width={20}
                  height={20}
                />
                <p className={`base-medium text-dark200_light800`}>
                  {theme.label}
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
