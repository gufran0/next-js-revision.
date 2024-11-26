export default function WithAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>
    <h2>WithAuthLayout</h2>
    {children}
    </div>;
}
