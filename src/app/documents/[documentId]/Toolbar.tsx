"use client";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import {
  BoldIcon,
  ItalicIcon,
  LucideIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  Redo2Icon,
  SpellCheck2Icon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
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
        onClick: () => {
          editor?.chain().focus().undo().run();
        },
        // isActive: false,
      },
      {
        label: "Redo",
        icon: Redo2Icon,
        onClick: () => {
          editor?.chain().focus().redo().run();
        },
      },
      {
        label: "Print",
        icon: PrinterIcon,
        onClick: () => {
          window.print();
        },
      },
      {
        label: "Spell Check",
        icon: SpellCheck2Icon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "false" ? "true" : "false"
          );
        },
      },
    ],
    [
      {
        label: "bold",
        icon: BoldIcon,
        onClick: () => {
          editor?.chain().focus().toggleBold().run();
        },
      },
      {
        label: "Italic",
        icon: ItalicIcon,
        onClick: () => {
          editor?.chain().focus().toggleItalic().run();
        },
      },
      {
        label: "Underline",
        icon: UnderlineIcon,
        onClick: () => {
          editor?.chain().focus().toggleUnderline().run();
        },
      },
      {
        label: "Underline",
        icon: UnderlineIcon,
        onClick: () => {
          editor?.chain().focus().toggleUnderline().run();
        },
      },
    ],
    [
      {
        label: "Comment",
        icon: MessageSquarePlusIcon,
        onClick: () => {
          alert("later");
        },
        isActive: false,
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

      <Separator orientation="vertical" className="h-6 bg-neutral-400" />
      {/* TODO: Font family */}
      <Separator orientation="vertical" className="h-6 bg-neutral-400" />
      {/* TODO: Heading */}
      <Separator orientation="vertical" className="h-6 bg-neutral-400" />
      {/* TODO: Font Size */}
      <Separator orientation="vertical" className="h-6 bg-neutral-400" />

      {sections[1].map((item) => (
        <ToolbarButton
          key={item.label}
          {...item}
          onClick={item.onClick}
          icon={item.icon}
          isActive={item.isActive ? true : false}
          // label={item.label}
        />
      ))}
      {/* TODO: Text Color */}
      {/* TODO: Highlight Color */}
      {/* TODO: Link */}
      {/* TODO: Image */}
      {/* TODO: Align */}
      {/* TODO: Line Height */}
      {/* TODO: List */}
    </div>
  );
};

export default Toolbar;
