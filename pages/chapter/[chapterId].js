import { useRouter } from 'next/router';
import { ChapterPage } from '../../src/Home';

export default function ChapterRoute() {
  const router = useRouter();
  if (!router.isReady || !router.query.chapterId) return null;
  return <ChapterPage chapterId={router.query.chapterId} />;
}