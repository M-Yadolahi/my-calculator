'use client'

import { HtmlProps } from "next/dist/shared/lib/html-context.shared-runtime";

export default function Home() {


  const Btn = (props: any) => {
    return <button style={{ height: 60, width: 60 }} onClick={() => {
      
      let op = props.txt;
      let el = (document.getElementById("txt") as HTMLInputElement);

      if (op == "clear") {
        el.value = "";
        return;
      }
      if (op == "=") {
        el.value = eval(el.value)
      }
      else {
        el.value = el.value + op;
      }

    }} > {props.txt}</button>
  }




  return (
    <div>
      <input id="txt" style={{ height: 40, width: 240 }}></input>
      <br />
      <Btn txt="-" />
      <Btn txt="1" />
      <Btn txt="2" />
      <Btn txt="3" />
      <br />
      <Btn txt="+" />
      <Btn txt="4" />
      <Btn txt="5" />
      <Btn txt="6" />
      <br />
      <Btn txt="0" />
      <Btn txt="7" />
      <Btn txt="8" />
      <Btn txt="9" />
      <br />
      <Btn txt="="/>
      <Btn txt="clear"/>



      <br />

    </div>
  );
}