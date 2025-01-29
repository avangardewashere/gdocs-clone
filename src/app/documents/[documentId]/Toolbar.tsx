import { cn } from "@/lib/utils";
import { LucideIcon,  Undo2Icon } from "lucide-react";
import React from "react";

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}

const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 items-center justifycenter roundedsm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80"
      )}
    >
      <Icon />
    </button>
  );
};
//Type '{ label: string; icon: Element; onClick: () => void; }[]' is missing the following properties from type '{ label: string; icon: LucideIcon; onClick: () => void; }': label, icon, onClick
const Toolbar = () => {
  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: Boolean;
  }[][] = [
    [
      {
        label: "",
        icon: Undo2Icon,
        onClick: () => {},
        isActive: false,
      },
    ],
  ];
  return (
    <div className="bg-[#f1f4f9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auot">
      Toolbar
    </div>
  );
};

export default Toolbar;
