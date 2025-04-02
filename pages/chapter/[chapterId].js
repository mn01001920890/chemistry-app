import { useRouter } from 'next/router';
import { ChapterPage } from '../../src/Home';

export default function ChapterRoute() {
  const router = useRouter();

  // مهم جدًا علشان ما يرندرش الصفحة قبل ما يجهز chapterId
  if (!router.isReady || !router.query.chapterId) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>جاري تحميل الصفحة...</div>;
  }

  return <ChapterPage chapterId={router.query.chapterId} />;
}
