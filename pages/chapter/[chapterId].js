import { useRouter } from 'next/router';
import { ChapterPage } from '../../src/Home';

export default function ChapterRoute() {
  const router = useRouter();
  return <ChapterPage chapterId={router.query.chapterId} />;
}