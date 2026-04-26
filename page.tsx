"use client";

import { useState, useEffect } from "react";

type Chapter = { name: string; done: boolean; subject: string };

export default function Home() {
  const [tab, setTab] = useState("Dashboard");
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [questions, setQuestions] = useState(0);
  const [xpPopup, setXpPopup] = useState("");
  const [plan, setPlan] = useState<string[]>([]);
  const [coach, setCoach] = useState("");
  const [warning, setWarning] = useState("");

 const [syllabus, setSyllabus] = useState<Chapter[]>([

  // ---------------- PHYSICS ----------------
  {name:"Units & Measurements",done:false,subject:"Physics"},
  {name:"Motion in a Straight Line",done:false,subject:"Physics"},
  {name:"Motion in a Plane",done:false,subject:"Physics"},
  {name:"Laws of Motion",done:false,subject:"Physics"},
  {name:"Work, Energy & Power",done:false,subject:"Physics"},
  {name:"System of Particles & Rotational Motion",done:false,subject:"Physics"},
  {name:"Gravitation",done:false,subject:"Physics"},
  {name:"Mechanical Properties of Solids",done:false,subject:"Physics"},
  {name:"Mechanical Properties of Fluids",done:false,subject:"Physics"},
  {name:"Thermal Properties of Matter",done:false,subject:"Physics"},
  {name:"Thermodynamics (Physics)",done:false,subject:"Physics"},
  {name:"Kinetic Theory",done:false,subject:"Physics"},
  {name:"Oscillations",done:false,subject:"Physics"},
  {name:"Waves",done:false,subject:"Physics"},
  {name:"Electric Charges & Fields",done:false,subject:"Physics"},
  {name:"Electrostatic Potential & Capacitance",done:false,subject:"Physics"},
  {name:"Current Electricity",done:false,subject:"Physics"},
  {name:"Moving Charges & Magnetism",done:false,subject:"Physics"},
  {name:"Magnetism & Matter",done:false,subject:"Physics"},
  {name:"Electromagnetic Induction",done:false,subject:"Physics"},
  {name:"Alternating Current",done:false,subject:"Physics"},
  {name:"Ray Optics",done:false,subject:"Physics"},
  {name:"Wave Optics",done:false,subject:"Physics"},
  {name:"Dual Nature of Radiation & Matter",done:false,subject:"Physics"},
  {name:"Atoms",done:false,subject:"Physics"},
  {name:"Nuclei",done:false,subject:"Physics"},
  {name:"Semiconductors",done:false,subject:"Physics"},

  // ---------------- PHYSICAL CHEMISTRY ----------------
  {name:"Some Basic Concepts of Chemistry",done:false,subject:"Chemistry"},
  {name:"Structure of Atom",done:false,subject:"Chemistry"},
  {name:"States of Matter",done:false,subject:"Chemistry"},
  {name:"Thermodynamics (Chemistry)",done:false,subject:"Chemistry"},
  {name:"Equilibrium",done:false,subject:"Chemistry"},
  {name:"Redox Reactions",done:false,subject:"Chemistry"},
  {name:"Solutions",done:false,subject:"Chemistry"},
  {name:"Electrochemistry",done:false,subject:"Chemistry"},
  {name:"Chemical Kinetics",done:false,subject:"Chemistry"},
  {name:"Surface Chemistry",done:false,subject:"Chemistry"},

  // ---------------- INORGANIC CHEMISTRY ----------------
  {name:"Classification of Elements & Periodicity",done:false,subject:"Chemistry"},
  {name:"Chemical Bonding & Molecular Structure",done:false,subject:"Chemistry"},
  {name:"Hydrogen",done:false,subject:"Chemistry"},
  {name:"s-Block Elements",done:false,subject:"Chemistry"},
  {name:"p-Block Elements (Group 13-18)",done:false,subject:"Chemistry"},
  {name:"d & f Block Elements",done:false,subject:"Chemistry"},
  {name:"Coordination Compounds",done:false,subject:"Chemistry"},
  {name:"Environmental Chemistry",done:false,subject:"Chemistry"},

  // ---------------- ORGANIC CHEMISTRY ----------------
  {name:"General Organic Chemistry (GOC)",done:false,subject:"Chemistry"},
  {name:"Hydrocarbons",done:false,subject:"Chemistry"},
  {name:"Haloalkanes & Haloarenes",done:false,subject:"Chemistry"},
  {name:"Alcohols, Phenols & Ethers",done:false,subject:"Chemistry"},
  {name:"Aldehydes, Ketones & Carboxylic Acids",done:false,subject:"Chemistry"},
  {name:"Amines",done:false,subject:"Chemistry"},
  {name:"Biomolecules (Chemistry)",done:false,subject:"Chemistry"},
  {name:"Polymers",done:false,subject:"Chemistry"},
  {name:"Chemistry in Everyday Life",done:false,subject:"Chemistry"},

  // ---------------- BOTANY ----------------
  {name:"The Living World",done:false,subject:"Biology"},
  {name:"Biological Classification",done:false,subject:"Biology"},
  {name:"Plant Kingdom",done:false,subject:"Biology"},
  {name:"Morphology of Flowering Plants",done:false,subject:"Biology"},
  {name:"Anatomy of Flowering Plants",done:false,subject:"Biology"},
  {name:"Cell: Structure & Function",done:false,subject:"Biology"},
  {name:"Cell Cycle & Division",done:false,subject:"Biology"},
  {name:"Transport in Plants",done:false,subject:"Biology"},
  {name:"Mineral Nutrition",done:false,subject:"Biology"},
  {name:"Photosynthesis in Higher Plants",done:false,subject:"Biology"},
  {name:"Respiration in Plants",done:false,subject:"Biology"},
  {name:"Plant Growth & Development",done:false,subject:"Biology"},

  // ---------------- ZOOLOGY ----------------
  {name:"Animal Kingdom",done:false,subject:"Biology"},
  {name:"Structural Organisation in Animals",done:false,subject:"Biology"},
  {name:"Human Physiology",done:false,subject:"Biology"},
  {name:"Reproduction",done:false,subject:"Biology"},
  {name:"Genetics & Evolution",done:false,subject:"Biology"},
  {name:"Biotechnology",done:false,subject:"Biology"},
  {name:"Ecology & Environment",done:false,subject:"Biology"},

]);
   
  /* STORAGE */
  useEffect(()=>{
    const data=localStorage.getItem("neetcraft-final");
    if(data){
      const d=JSON.parse(data);
      setXp(d.xp||0);
      setQuestions(d.questions||0);
      setSyllabus(d.syllabus||syllabus);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem("neetcraft-final",
      JSON.stringify({xp,questions,syllabus})
    );
  },[xp,questions,syllabus]);

  /* SYSTEM */
  useEffect(()=>{
    if(xp>level*100) setLevel(l=>l+1);
  },[xp]);

  useEffect(()=>{
    if(questions<30) setWarning("⚠️ You are underperforming");
    else setWarning("🔥 Keep consistency");
  },[questions]);

  /* AI COACH */
  useEffect(()=>{
    const weak=syllabus.filter(s=>!s.done);
    if(weak.length>0){
      setCoach(`Focus on ${weak[0].name}. Complete it today.`);
      setPlan([
        `Revise ${weak[0].name}`,
        "Solve 90 Questions",
        "Revise NCERT"
      ]);
    }
  },[syllabus]);

  /* ACTION */
  const toggle=(i:number)=>{
    const u=[...syllabus];
    u[i].done=!u[i].done;
    setSyllabus(u);
    setXp(xp+5);
    setXpPopup("+5 XP");
    setTimeout(()=>setXpPopup(""),1000);
  };

  return (
    <div className="flex min-h-screen text-white">

      {xpPopup && <div className="xp-popup">{xpPopup}</div>}

      {/* SIDEBAR */}
      <aside className="w-64 p-5 bg-black/70 border-r border-red-500/20">
        <h1 className="text-red-500 text-xl mb-6">NEETCraft</h1>
        {["Dashboard","Syllabus","Coach"].map(t=>(
          <div key={t} onClick={()=>setTab(t)}
            className="p-2 mb-2 hover:bg-white/10 cursor-pointer">
            {t}
          </div>
        ))}
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-6 space-y-6">

        <h1 className="text-3xl text-red-500">SOUMEN</h1>
        <div className="warning">{warning}</div>

        {tab==="Dashboard" && (
          <>
            <div className="grid grid-cols-3 gap-4">
              <Card>XP: {xp}</Card>
              <Card>Level: {level}</Card>
              <Card>Questions: {questions}/90</Card>
            </div>

            <Circle value={questions} max={90}/>
          </>
        )}

        {tab==="Syllabus" && (
          <Card>
            {["Physics","Chemistry","Biology"].map(sub=>(
              <div key={sub}>
                <h2 className="text-red-400">{sub}</h2>
                {syllabus.filter(s=>s.subject===sub).map((c,i)=>(
                  <div key={i} onClick={()=>toggle(i)}
                    className={`p-2 mb-1 ${c.done?"bg-green-500/20":"bg-white/10"}`}>
                    {c.name}
                  </div>
                ))}
              </div>
            ))}
          </Card>
        )}

        {tab==="Coach" && (
          <Card>
            <h2 className="text-red-400">AI Coach</h2>
            <p>{coach}</p>

            <h3 className="mt-4">Today's Plan</h3>
            {plan.map((p,i)=>(<div key={i}>{p}</div>))}
          </Card>
        )}

      </main>
    </div>
  );
}

function Card({children}:any){
  return <div className="card p-4">{children}</div>;
}

function Circle({value,max}:any){
  const r=50;
  const c=2*Math.PI*r;
  const offset=c-(value/max)*c;

  return (
    <svg width="120" height="120">
      <circle cx="60" cy="60" r={r} stroke="#222" strokeWidth="8" fill="none"/>
      <circle cx="60" cy="60" r={r}
        stroke="red" strokeWidth="8"
        fill="none"
        strokeDasharray={c}
        strokeDashoffset={offset}
        transform="rotate(-90 60 60)"/>
    </svg>
  );
}