export function HeaderWrapper({
  children,
}: {
  children: JSX.Element | string;
}) {
  return (
    <header className="border-b border-border" style={{ backgroundColor: 'rgb(2 3 40 / var(--tw-bg-opacity))' }}>
      <div className="mx-8 h-16">{children}</div>
    </header>
  );
}
