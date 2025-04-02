/* نسخة معدلة بخلفية أزرق فاتح وخط أبيض وزر رجوع وأسئلة منسقة */

import React, { useState } from "react";
import { useRouter } from "next/router";

const lightBlue = "#cce4ff";
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
    <div style={{ minHeight: '100vh', backgroundColor: lightBlue, padding: '1.5rem', textAlign: 'center', color: white }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>اختر نوع الأسئلة</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <button onClick={() => handleClick("theory")} style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', fontWeight: 'bold', borderRadius: '1rem', backgroundColor: white, color: '#0070f3', border: 'none' }}>أسئلة نظرية</button>
        <button onClick={() => handleClick("practical")} style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', fontWeight: 'bold', borderRadius: '1rem', backgroundColor: white, color: '#0070f3', border: 'none' }}>أسئلة عملية</button>
        <button onClick={() => router.push("/chapters")} style={{ marginTop: '2rem', padding: '0.5rem 1rem', fontWeight: 'bold', borderRadius: '1rem', backgroundColor: white, color: '#0070f3', border: 'none' }}>⬅ العودة للأبواب</button>
      </div>
    </div>
  );
}