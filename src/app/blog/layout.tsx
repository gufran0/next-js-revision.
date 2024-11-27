import Loading from "./loading";
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Loading />
      <div>{children}</div>
    </>
  );
}
