import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">أسئلة كيميائية للصف الثالث الثانوي</h1>
      <Button
        className="text-xl px-6 py-4 rounded-2xl shadow-md"
        onClick={() => router.push("/chapters")}
      >
        اضغط هنا لبدء الأسئلة
      </Button>
    </div>
  );
}

export function ChaptersPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">اختر الباب</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {chapters.map((chapter) => (
          <Card
            key={chapter.id}
            className="cursor-pointer hover:shadow-lg transition"
            onClick={() => router.push(`/chapter/${chapter.id}`)}
          >
            <CardContent className="p-4 text-center text-lg font-medium">
              {chapter.title}
            </CardContent>
          </Card>
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
    <div className="min-h-screen bg-gray-100 p-6 text-center">
      <h2 className="text-2xl font-bold mb-8">اختر نوع الأسئلة</h2>
      <div className="flex flex-col gap-4 items-center">
        <Button onClick={() => handleClick("theory")}>أسئلة نظرية</Button>
        <Button onClick={() => handleClick("practical")}>أسئلة عملية</Button>
      </div>
    </div>
  );
}

export function Chapter1Theory() {
  const questions = [
    {
      q: "العناصر الانتقالية هي العناصر التي تمتلئ فيها الأفلاك:",
      options: ["s", "p", "d", "f"],
      correct: "d"
    },
    {
      q: "أي من العناصر التالية لا يعتبر من العناصر الانتقالية؟",
      options: ["الحديد", "النحاس", "الزنك", "الكروم"],
      correct: "الزنك"
    },
    {
      q: "تتميز العناصر الانتقالية بأنها:",
      options: ["غازات خاملة", "فلزات نشطة", "لا فلزات", "أشباه فلزات"],
      correct: "فلزات نشطة"
    },
    {
      q: "التوزيع الإلكتروني للعنصر الانتقالي Cr هو:",
      options: ["[Ar] 3d4 4s2", "[Ar] 3d5 4s1", "[Ar] 3d6 4s0", "[Ar] 3d3 4s3"],
      correct: "[Ar] 3d5 4s1"
    },
    {
      q: "أي من العناصر التالية له أكبر عدد من حالات التأكسد؟",
      options: ["الحديد", "المنجنيز", "النحاس", "الكروم"],
      correct: "المنجنيز"
    }
  ];

  return <QuestionRenderer questions={questions} />;
}

export function Chapter1Practical() {
  const questions = [
    {
      q: "احسب عدد الإلكترونات المفردة في ذرة المنجنيز Mn (العدد الذري = 25):",
      options: ["3", "4", "5", "6"],
      correct: "5"
    },
    {
      q: "احسب عدد الإلكترونات المفردة في أيون الحديد Fe²⁺ (العدد الذري = 26):",
      options: ["2", "4", "5", "6"],
      correct: "4"
    },
    {
      q: "احسب عدد الإلكترونات المفردة في أيون الكوبالت Co²⁺ (العدد الذري = 27):",
      options: ["1", "2", "3", "4"],
      correct: "3"
    },
    {
      q: "احسب عدد الإلكترونات المفردة في أيون النيكل Ni²⁺ (العدد الذري = 28):",
      options: ["0", "1", "2", "3"],
      correct: "2"
    },
    {
      q: "احسب عدد الإلكترونات المفردة في أيون النحاس Cu²⁺ (العدد الذري = 29):",
      options: ["0", "1", "2", "3"],
      correct: "1"
    }
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
    return <div className="p-6 text-center">تم الانتهاء من جميع الأسئلة 🎉</div>;
  }

  const q = questions[current];

  return (
    <div className="min-h-screen bg-white p-6 text-center">
      <h2 className="text-xl font-semibold mb-4">سؤال {current + 1}</h2>
      <p className="mb-6 text-lg">{q.q}</p>
      <div className="flex flex-col gap-4 items-center">
        {q.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => checkAnswer(option)}
            disabled={showResult}
          >
            {option}
          </Button>
        ))}
      </div>
      {showResult && (
        <div className="mt-6 text-lg font-bold">
          {answer === q.correct ? "✔️ إجابة صحيحة" : `❌ إجابة خاطئة، الإجابة الصحيحة: ${q.correct}`}
          <div className="mt-4">
            <Button onClick={nextQuestion}>السؤال التالي</Button>
          </div>
        </div>
      )}
    </div>
  );
}