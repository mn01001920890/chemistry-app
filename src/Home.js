/* نسخة معدلة بخلفية أزرق فاتح وخط أبيض وزر رجوع وأسئلة منسقة */

import React, { useState } from "react";
import { useRouter } from "next/router";

const lightBlue = "#4169E1";
const white = "#ffffff";

const chapters = [
  { title: "الباب الأول: العناصر الانتقالية", id: "chapter1" },
  { title: "الباب الثاني: التحليل الكيميائي", id: "chapter2" },
  { title: "الباب الثالث: الاتزان الكيميائي", id: "chapter3" },
  { title: "الباب الرابع: الكيمياء الكهربية", id: "chapter4" },
  { title: "الباب الخامس: الكيمياء العضوية", id: "chapter5" }
];

export default function Home() {
  const router = useRouter();
  return (
    <div style={{ minHeight: '100vh', backgroundColor: lightBlue, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem', color: white }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>أسئلة كيميائية للصف الثالث الثانوي</h1>
      <button style={{ fontSize: '1.25rem', padding: '1rem 2rem', borderRadius: '1rem', backgroundColor: white, color: '#0070f3', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => router.push("/chapters")}>
        اضغط هنا لبدء الأسئلة
      </button>
    </div>
  );
}

export function ChaptersPage() {
  const router = useRouter();
  return (
    <div style={{ minHeight: '100vh', backgroundColor: lightBlue, padding: '1.5rem', color: white }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>اختر الباب</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>
        {chapters.map((chapter) => (
          <div key={chapter.id} style={{ backgroundColor: white, color: '#0070f3', padding: '1rem', textAlign: 'center', borderRadius: '1rem', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => router.push(`/chapter/${chapter.id}`)}>
            {chapter.title}
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button onClick={() => router.push("/")} style={{ padding: '0.75rem 1.5rem', fontWeight: 'bold', backgroundColor: white, color: '#0070f3', borderRadius: '1rem', border: 'none' }}>العودة للرئيسية</button>
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
    <div style={{ minHeight: '100vh', backgroundColor: #5F9EA0, padding: '1.5rem', textAlign: 'center', color: white }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>اختر نوع الأسئلة</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <button onClick={() => handleClick("theory")} style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', fontWeight: 'bold', borderRadius: '1rem', backgroundColor: white, color: '#0070f3', border: 'none' }}>أسئلة نظرية</button>
        <button onClick={() => handleClick("practical")} style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', fontWeight: 'bold', borderRadius: '1rem', backgroundColor: white, color: '#0070f3', border: 'none' }}>أسئلة عملية</button>
        <button onClick={() => router.push("/chapters")} style={{ marginTop: '2rem', padding: '0.5rem 1rem', fontWeight: 'bold', borderRadius: '1rem', backgroundColor: white, color: '#0070f3', border: 'none' }}>⬅ العودة للأبواب</button>
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
  const router = useRouter();

  const checkAnswer = (option) => {
    setAnswer(option);
    setShowResult(true);
  };

  const nextQuestion = () => {
    setAnswer(null);
    setShowResult(false);
    setCurrent(current + 1);
  };

  const prevQuestion = () => {
    if (current > 0) {
      setAnswer(null);
      setShowResult(false);
      setCurrent(current - 1);
    }
  };

  if (current >= questions.length) {
    return (
      <div style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: '#cce4ff', color: 'white', minHeight: '100vh' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>تم الانتهاء من جميع الأسئلة 🎉</h2>
        <button onClick={() => router.push("/")} style={{ marginTop: '1.5rem', padding: '0.75rem 1.5rem', fontWeight: 'bold', backgroundColor: 'white', color: '#0070f3', border: 'none', borderRadius: '1rem' }}>العودة للرئيسية</button>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#cce4ff', padding: '1.5rem', textAlign: 'center', color: 'white' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>سؤال {current + 1}</h2>
      <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 'bold' }}>{q.q}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        {q.options.map((option, index) => (
          <button key={index} onClick={() => checkAnswer(option)} disabled={showResult} style={{ padding: '0.75rem 1.5rem', borderRadius: '1rem', backgroundColor: 'white', color: '#0070f3', cursor: 'pointer', minWidth: '200px', fontFamily: 'monospace', fontWeight: 'bold' }}>
            {option}
          </button>
        ))}
      </div>
      {showResult && (
        <div style={{ marginTop: '1.5rem', fontWeight: 'bold' }}>
          {answer === q.correct ? "✔️ إجابة صحيحة" : `❌ إجابة خاطئة، الإجابة الصحيحة: ${q.correct}`}
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={prevQuestion} style={{ padding: '0.5rem 1rem', backgroundColor: 'white', color: '#0070f3', border: 'none', borderRadius: '1rem', fontWeight: 'bold' }}>⬅ السابق</button>
            <button onClick={nextQuestion} style={{ padding: '0.5rem 1rem', backgroundColor: 'white', color: '#0070f3', border: 'none', borderRadius: '1rem', fontWeight: 'bold' }}>التالي ➡</button>
          </div>
        </div>
      )}
    </div>
  );
}
