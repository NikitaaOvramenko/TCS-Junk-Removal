import FurnitureRemovalIcon from "../assets/images/Home-Images/furniture-removal.svg?react";
import PropertyCleanoutsIcon from "../assets/images/Home-Images/property-cleanouts.svg?react";
import ApplianceRemovalIcon from "../assets/images/Home-Images/appliance-removal.svg?react";
import WasteRemovalIcon from "../assets/images/Home-Images/waste-removal.svg?react";
import FurnitureRemovalBg from "../assets/images/Home-Images/furniture-removal-bg.png";
import PropertyCleanoutBg from "../assets/images/Home-Images/property-cleanouts-bg.png";
import ApplianceRemovalBg from "../assets/images/Home-Images/appliance-removal-bg.png";
import WasteRemovalBg from "../assets/images/Home-Images/waste-removal-bg.png";

export const services = [
  {
    id: "furniture",
    name: "Furniture Removal",
    icon: FurnitureRemovalIcon,
    bg: FurnitureRemovalBg,
  },
  {
    id: "property",
    name: "Property Cleanouts",
    icon: PropertyCleanoutsIcon,
    bg: PropertyCleanoutBg,
  },
  {
    id: "appliance",
    name: "Appliance Removal",
    icon: ApplianceRemovalIcon,
    bg: ApplianceRemovalBg,
  },
  {
    id: "waste",
    name: "Waste Removal",
    icon: WasteRemovalIcon,
    bg: WasteRemovalBg,
  },
];
