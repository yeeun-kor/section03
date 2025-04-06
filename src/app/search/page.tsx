export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  return <div>search페이지 입니다. {q}</div>;
}
