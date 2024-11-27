

export default function Layout({
  children,
  users,
  notifications,
  revenue,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLogin = true;
  return isLogin ? (
    <div>
      {children}
      {/* technically children = complex-dashboard/children/  page.tsx */}
      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {users}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {notifications}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {revenue}
        </div>
      </div>
    </div>
  ) : (
    login
  );
}
