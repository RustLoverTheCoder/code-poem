import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Editor from "./ui/Editor";

function App() {
  return (
    <div class="w-full h-full flex">
      <div class="w-20 h-full border-r border-white/10"></div>
      <Editor />
    </div>
  );
}

export default App;
