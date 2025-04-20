
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const questions = [
  {
    question: "ما أول سورة نزلت في القرآن؟",
    answer: "اقرأ باسم ربك الذي خلق"
  },
  {
    question: "ما هي السورة التي لا تبدأ بالبسملة؟",
    answer: "سورة التوبة"
  },
  {
    question: "ما هي أطول سورة في القرآن الكريم؟",
    answer: "سورة البقرة"
  }
];

export default function QuranQuizApp() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextQuestion = () => {
    setShowAnswer(false);
    setIndex((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-100 to-lime-100 p-4">
      <Card className="w-full max-w-xl text-center shadow-xl">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-emerald-800">سؤال قرآني</h2>
          <p className="text-xl text-gray-800">{questions[index].question}</p>

          {showAnswer && (
            <p className="text-green-700 font-semibold">الإجابة: {questions[index].answer}</p>
          )}

          <div className="flex justify-center gap-4 pt-4">
            <Button onClick={() => setShowAnswer(true)} variant="outline">
              عرض الإجابة
            </Button>
            <Button onClick={nextQuestion}>
              سؤال آخر
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
تعديل وعلى السؤال
