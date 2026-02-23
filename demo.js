import { boxedText ,BOX_STYLE} from "./index.js";

console.clear();

for(const style in BOX_STYLE){
    boxedText(style,BOX_STYLE[style]);
}