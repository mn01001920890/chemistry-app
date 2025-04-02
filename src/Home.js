import React, { useState } from "react";
import { useRouter } from "next/router";

const chapters = [
  {
    title: "الباب الأول: العناصر الانتقالية",
    id: "chapter1"
  },
  {
    title: "الباب الثاني: التحليل الكيميائي",
    id: "chapter2"
  },
  {
    title: "الباب الثالث: الاتزان الكيميائي",
    id: "chapter3"
  },
  {
    title: "الباب الرابع: الكيمياء الكهربية",
    id: "chapter4"
  },
  {
    title: "الباب الخامس: الكيمياء العضوية",
    id: "chapter5"
  }
];

// (باقي الكود الكامل مأخوذ من الكانفاس في الرسالة السابقة)

function QuestionRenderer({ questions }) {
  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const checkAnswer = (option) => {
    setAnswer(option);
    setShowResult(true);
  };

  const nextQuestion = () => {
    setAnswer(null);
    setShowResult(false);
    setCurrent(current + 1);
  };

  if (current >= questions.length) {
    return <div style={{ padding: '1.5rem', textAlign: 'center' }}>تم الانتهاء من جميع الأسئلة 🎉</div>;
  }

  const q = questions[current];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff', padding: '1.5rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>سؤال {current + 1}</h2>
      <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>{q.q}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        {q.options.map((option, index) => (
          <button
            key={index}
            onClick={() => checkAnswer(option)}
            disabled={showResult}
            style={{ padding: '0.75rem 1.5rem', borderRadius: '0.5rem', backgroundColor: '#eee', cursor: 'pointer', minWidth: '200px' }}
          >
            {option}
          </button>
        ))}
      </div>
      {showResult && (
        <div style={{ marginTop: '1.5rem', fontWeight: 'bold' }}>
          {answer === q.correct ? "✔️ إجابة صحيحة" : `❌ إجابة خاطئة، الإجابة الصحيحة: ${q.correct}`}
          <div style={{ marginTop: '1rem' }}>
            <button onClick={nextQuestion} style={{ padding: '0.5rem 1rem', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '0.5rem' }}>السؤال التالي</button>
          </div>
        </div>
      )}
    </div>
  );
}