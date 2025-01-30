"use client";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import { LucideIcon, Undo2Icon } from "lucide-react";
import React from "react";

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive: boolean;
  icon: LucideIcon;
}

const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonProps) => {
  if (!Icon) return null;
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 items-center justifycenter roundedsm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80"
      )}
    >
      {/* {Icon} */}
      <Icon />
    </button>
  );
};
//Type '{ label: string; icon: Element; onClick: () => void; }[]' is missing the following properties from type '{ label: string; icon: LucideIcon; onClick: () => void; }': label, icon, onClick
const Toolbar = () => {
  const { editor } = useEditorStore();
 
  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: Boolean;
  }[][] = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () =>{ editor?.chain().focus().undo().run()},
        // isActive: false,
      },
    ],
  ];
  return (
    <div className="bg-[#f1f4f9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auot">
      {sections[0].map((item) => (
        <ToolbarButton
          key={item.label}
          {...item}
          onClick={item.onClick}
          icon={item.icon}
          isActive={item.isActive ? true : false}
          // label={item.label}
        />
      ))}
    </div>
  );
};

export default Toolbar;
