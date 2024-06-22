export default function RootLayout({ children }) {
  return (
    <div style={{ background: 'red' }}>
      <body>{children}</body>
    </div>
  );
}
