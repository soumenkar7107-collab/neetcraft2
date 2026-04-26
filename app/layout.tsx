@tailwind base;
@tailwind components;
@tailwind utilities;

/* BACKGROUND */
.main-bg {
  background: radial-gradient(circle at top right, #3a0000, #050505);
}

/* SIDEBAR */
.sidebar {
  width: 240px;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(20px);
  padding: 20px;
  border-right: 1px solid rgba(255,0,0,0.2);
}

.logo {
  color: #ff2e2e;
  font-size: 22px;
  margin-bottom: 30px;
}

.nav-item {
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.3s;
}

.nav-item:hover {
  background: rgba(255,255,255,0.1);
}

.active {
  background: rgba(255,0,0,0.2);
}

/* CONTENT */
.content {
  flex: 1;
  padding: 40px;
}

/* HEADER */
.header {
  margin-bottom: 20px;
}

.warning {
  color: #ff4444;
  margin-top: 5px;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* CARD */
.card {
  background: rgba(20,20,20,0.6);
  padding: 20px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,0,0,0.2);
}

/* PROGRESS */
.bar {
  height: 10px;
  background: #222;
  border-radius: 10px;
}

.fill {
  height: 10px;
  background: red;
  border-radius: 10px;
}
