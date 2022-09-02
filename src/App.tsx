import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Editor from "./ui/Editor";

function App() {
  return (
    <div class="w-full h-full">
      <Editor />
    </div>
  );
}

export default App;
