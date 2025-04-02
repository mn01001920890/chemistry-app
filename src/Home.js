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

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9f9f9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>أسئلة كيميائية للصف الثالث الثانوي</h1>
      <button
        style={{ fontSize: '1.25rem', padding: '1rem 2rem', borderRadius: '1rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', cursor: 'pointer' }}
        onClick={() => router.push("/chapters")}
      >
        اضغط هنا لبدء الأسئلة
      </button>
    </div>
  );
}

export function ChaptersPage() {
  const router = useRouter();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', padding: '1.5rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', textAlign: 'center' }}>اختر الباب</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            style={{ backgroundColor: '#f0f0f0', padding: '1rem', textAlign: 'center', borderRadius: '0.5rem', cursor: 'pointer', transition: '0.3s', fontWeight: '500' }}
            onClick={() => router.push(`/chapter/${chapter.id}`)}
          >
            {chapter.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChapterPage({ chapterId }) {
  const router = useRouter();
  const handleClick = (type) => {
    router.push(`/questions/${chapterId}/${type}`);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f0f0', padding: '1.5rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>اختر نوع الأسئلة</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <button onClick={() => handleClick("theory")} style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', borderRadius: '0.5rem', backgroundColor: '#0070f3', color: 'white', border: 'none' }}>أسئلة نظرية</button>
        <button onClick={() => handleClick("practical")} style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', borderRadius: '0.5rem', backgroundColor: '#0070f3', color: 'white', border: 'none' }}>أسئلة عملية</button>
      </div>
    </div>
  );
}

export function Chapter1Theory() {
  const questions = [
    { q: "العناصر الانتقالية هي العناصر التي تمتلئ فيها الأفلاك:", options: ["s", "p", "d", "f"], correct: "d" },
    { q: "أي من العناصر التالية لا يعتبر من العناصر الانتقالية؟", options: ["الحديد", "النحاس", "الزنك", "الكروم"], correct: "الزنك" },
    { q: "تتميز العناصر الانتقالية بأنها:", options: ["غازات خاملة", "فلزات نشطة", "لا فلزات", "أشباه فلزات"], correct: "فلزات نشطة" },
    { q: "التوزيع الإلكتروني للعنصر Cr هو:", options: ["[Ar] 3d4 4s2", "[Ar] 3d5 4s1", "[Ar] 3d6 4s0", "[Ar] 3d3 4s3"], correct: "[Ar] 3d5 4s1" },
    { q: "أي من العناصر التالية له أكبر عدد من حالات التأكسد؟", options: ["الحديد", "المنجنيز", "النحاس", "الكروم"], correct: "المنجنيز" }
  ];
  return <QuestionRenderer questions={questions} />;
}

export function Chapter1Practical() {
  const questions = [
    { q: "عدد الإلكترونات المفردة في ذرة Mn (Z=25):", options: ["3", "4", "5", "6"], correct: "5" },
    { q: "عدد الإلكترونات المفردة في Fe²⁺ (Z=26):", options: ["2", "4", "5", "6"], correct: "4" },
    { q: "عدد الإلكترونات المفردة في Co²⁺ (Z=27):", options: ["1", "2", "3", "4"], correct: "3" },
    { q: "عدد الإلكترونات المفردة في Ni²⁺ (Z=28):", options: ["0", "1", "2", "3"], correct: "2" },
    { q: "عدد الإلكترونات المفردة في Cu²⁺ (Z=29):", options: ["0", "1", "2", "3"], correct: "1" }
  ];
  return <QuestionRenderer questions={questions} />;
}

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