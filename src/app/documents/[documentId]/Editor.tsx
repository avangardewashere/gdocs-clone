import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello Worlds</p>",
  });

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
};
