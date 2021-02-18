import {
  IconDefinition,
  IconName,
  library,
} from "@fortawesome/fontawesome-svg-core";

const faTailwind: IconDefinition = {
  prefix: "fab",
  iconName: "tailwind" as IconName,
  icon: [
    64,
    64,
    [],
    "f0005",
    "M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z",
  ],
};

library.add(faTailwind);

export default faTailwind;
