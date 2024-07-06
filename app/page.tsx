'use client'

import { HtmlProps } from "next/dist/shared/lib/html-context.shared-runtime";

export default function Home() {


  const Btn = (props: any) => {
    return <button style={{ height: 60, width: 60, margin:5, borderRadius:5, fontSize:'1.2rem', backgroundColor:'#1ae5be', border: '1px solid #ccc', cursor:'Pointer',transition:'background-color: 0.3' }} onClick={() => {
      
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor:'#1ecbe1' }}>
    <div style={{
      padding: 20,
      borderRadius: 10,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.9)',
      backgroundColor: '#fff5d5',
    }}>
      <input id="txt" style={{
        height: 40,
        width: '100%',
        fontSize: '1.2rem',
        padding: '0 10px',
        marginBottom: 10,
        borderRadius: 5,
        border: '1px solid #ccc',
        backgroundColor:"#f0f0f0",
        color:"#010101"
      }} />
      <br />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
        <Btn txt="1" />
        <Btn txt="2" />
        <Btn txt="3" />
        <Btn txt="+" />
        <Btn txt="4" />
        <Btn txt="5" />
        <Btn txt="6" />
        <Btn txt="-" />
        <Btn txt="7" />
        <Btn txt="8" />
        <Btn txt="9" />
        <Btn txt="*" />
        <Btn txt="0" />
        <Btn txt="/" />
        <Btn txt="clear" />
        <Btn txt="=" />
      </div>
    </div>
  </div>
  );
}