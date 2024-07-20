import FAQ from "@/components/home/FAQ";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/constants/FaqData";

const FaqPage = () => {
  return (
    <>
      <section className="flex flex-col space-y-8 pt-12">
        <h2 className="h2-semibold-36 text-dark200_light800">
          Ko&apos;p Beriladigan Savollar!!
        </h2>
        <p className="paragraph-medium text-light500_dark600">
          Yana sizni qiziqtirgan savollar bo&apos;lsa, biz bilan
          bog&apos;laning.
        </p>
        <div className="light-border rounded-lg border">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((data, index) => {
              return (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="base-semibold text-dark200_light800 p-6">
                    {data.label}
                  </AccordionTrigger>
                  <AccordionContent className="base-regular text-dark200_light800 px-6">
                    {data.description}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>
      <FAQ />
    </>
  );
};

export default FaqPage;
