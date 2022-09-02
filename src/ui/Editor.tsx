// import { createCodeMirror } from "solid-codemirror";
// import { javascript } from "@codemirror/lang-javascript";
import { createSignal, onMount } from "solid-js";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";

const Editor = () => {
  let editorRef: HTMLDivElement;
  onMount(() => {
    let startState = EditorState.create({
      doc: "Hello World",
    });
    let view = new EditorView({
      state: startState,
      parent: editorRef,
    });
    console.log("view", view);
  });

  //@ts-ignore
  return <div ref={editorRef} class="w-full h-full text-sm" />;
};

export default Editor;
