import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CourseContent = () => {
  return (
    <section className="py-20">
      <div className="space-y-4">
        <h3 className="h3-semibold text-dark200_light800 mb-6">Kurs tarkibi</h3>
        <ul
          role="list"
          className="list-inside list-disc grid-cols-1 gap-3 gap-x-9 gap-y-4 md:grid-cols-2 lg:flex lg:gap-y-0"
        >
          <li className="paragraph-medium-18 text-dark200_light800">
            <span className="font-bold">55</span> ta dars
          </li>
          <li className="paragraph-medium-18 text-dark200_light800">
            <span className="font-bold">7 soat</span> kurs davomiyligi
          </li>
          <li className="paragraph-medium-18 text-dark200_light800">
            <span className="font-bold">13 ta</span> test va topshiriqlar
          </li>
        </ul>
        <div className="light-border rounded-lg border">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="base-semibold text-dark200_light800 p-6">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="base-regular text-dark200_light800 px-6">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="base-semibold text-dark200_light800 p-6">
                Is it styled?
              </AccordionTrigger>
              <AccordionContent className="base-regular text-dark200_light800 px-6">
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="base-semibold text-dark200_light800 p-6">
                Is it animated?
              </AccordionTrigger>
              <AccordionContent className="base-regular text-dark200_light800 px-6">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
