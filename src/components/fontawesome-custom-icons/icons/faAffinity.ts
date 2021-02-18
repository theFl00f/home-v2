import {
  IconDefinition,
  IconName,
  library,
} from "@fortawesome/fontawesome-svg-core";

const faAffinity: IconDefinition = {
  prefix: "fab",
  iconName: "affinity" as IconName,
  icon: [
    700,
    700,
    [],
    "f0009",
    "M263.7 0h106.4l8.9 15.5h30.5l266.1 461-57.3 97.7H385.4l23.6 40.7h-10.3l-23.6-40.7H86l-14.8-26H52.9L0 456.6h.1L67.9 339l62.8-36.2 103.9-179.9-20.9-36.2 50-86.7zm62.7 159.1L142.6 476.6h175.9l-20.3-35.1 191.7.2-163.5-282.6z",
  ],
};

library.add(faAffinity);

export default faAffinity;
