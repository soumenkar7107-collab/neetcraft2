"use client";

import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState("Dashboard");

  return (
    <div className="main-bg flex min-h-screen text-white">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <h1 className="logo">NEETCraft</h1>

        {["Dashboard","Syllabus","Coach"].map((t)=>(
          <div key={t}
            onClick={()=>setTab(t)}
            className={`nav-item ${tab===t?"active":""}`}>
            {t}
          </div>
        ))}
      </aside>

      {/* MAIN */}
      <main className="content">

        {/* HEADER */}
        <div className="header">
          <h1>SOUMEN</h1>
          <div className="warning">⚠ You are underperforming</div>
        </div>

        {/* STATS */}
        <div className="grid">

          <div className="card">XP: 60</div>
          <div className="card">Level: 1</div>
          <div className="card">Questions: 0/90</div>

        </div>

        {/* PROGRESS */}
        <div className="card progress">
          <div className="bar">
            <div className="fill" style={{width:"0%"}}></div>
          </div>
        </div>

      </main>
    </div>
  );
}
