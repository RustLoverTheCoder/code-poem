import { createCodeMirror } from "solid-codemirror";
import { createSignal, onMount } from "solid-js";

const Editor = () => {
  const { editorView, ref: editorRef } = createCodeMirror({
    // The initial value of the editor
    value: "console.log('hello world!')",
    // Fired whenever the editor code value changes.
    onValueChange: (value) => console.log("value changed", value),
    // Fired whenever a change occurs to the document. There is a certain difference with `onChange`.
    onModelViewUpdate: (modelView) => {
      //   console.log("modelView updated", modelView);
    },
  });
  return <div ref={editorRef} class="w-full h-full" />;
};

export default Editor;
