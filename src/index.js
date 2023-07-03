import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <>
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <SkillList />

      </div>
    </div>
    </>
  )
}

function SkillList() {
  return (
    <div className='skill-list'>
      <Skill skill="PYTHON" emoji="🍊" color="cream" />
      <Skill skill="REACT" emoji="🌷" color="cream" />
      <Skill skill="ARRAY" emoji="🥖" color="cream" />
    </div>
  )
}

function Skill(props) {
  return (
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  )
}

function Intro() {
  return <div>
    <h1>นางสาวสุทธิณี สาริก</h1>
    <p>
      นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร
      คณะวิทยาศาสตร์ มหาวิทยาอุบลราชธานี
      ชื่อนชอบในการออกแบบ วาดภาพโดยใช้คอมพิวเตอร์
      งานอดิเรก คือ อ่านหนังสือ ดูหนัง ซีรีส์ ฟังเพลง เล่นเกมและนอน
    </p>
  </div>
}

function Avatar() {
  return <img className='avatar' src='my.jpg' alt='My Avatar' />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

