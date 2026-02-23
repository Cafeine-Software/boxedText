import { padCenter } from "@cafeine-software/padcenter";

export const BOX_STYLE = {
    "LIGHT":["┌","─","┐","│","└","┘"],
    "HEAVY":["┏","━","┓","┃","┗","┛"],
    "DOUBLE":["╔","═","╗","║","╚","╝"],
    "ROUNDED":["╭","─","╮","│","╰","╯"],
    "VERTICAL_LIGHT_&_HEAVY_TOP":["┍","━","┑","│","┕","┙"],
    "VERTICAL_HEAVY_&__LIGHT_TOP":["┎","─","┒","┃","┖","┚"],
    "VERTICAL_LIGHT_&_DOUBLE_TOP":["╒","═","╕","│","╘","╛"],
    "VERTICAL_DOUBLE_&_LIGHT_TOP":["╓","─","╖","║","╙","╜"],
}

export function boxedText(text,style = BOX_STYLE.LIGHT,log = true){

    const [tl, h, tr, v, bl, br] = style;
    const length = text.length + 2;

    if(log){
        console.log(tl + h.repeat(length) + tr);
        console.log(v + padCenter(text, length) + v);
        console.log(bl + h.repeat(length) + br);
    }else{
        return tl + h.repeat(length) + tr + "\n" +
               v + padCenter(text, length) + v + "\n" +
               bl + h.repeat(length) + br;
    }


}