import { useRouter } from 'next/router';
import { ChapterPage } from '../../src/Home';

export default function ChapterRoute() {
  const router = useRouter();

  if (!router.isReady || !router.query.chapterId) {
    return null; // أو ممكن تعرضي رسالة تحميل: <p>جارٍ التحميل...</p>
  }

  return <ChapterPage chapterId={router.query.chapterId} />;
}
