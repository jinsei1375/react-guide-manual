import { ENDPOINT } from '@/constants';
import Article from '../../../components/article';

export async function generateMetadata({ params }) {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) => res.json());
  return {
    title: article.title,
    description: article.text,
  };
}

// export const metadata = {
//   title: 'test',
//   description: 'test',
// };

export async function generateStaticParams() {
  const data = await fetch(ENDPOINT).then((res) => res.json());
  console.log(data);
  return data.map((item) => ({ id: item.id }));
}
export default async function Detail({ params }) {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) => res.json());
  return (
    <>
      <Article data={article} />
    </>
  );
}
