import Menu from "@/components/Menu/Menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Menu></Menu>
      {children}
    </div>
  );
}
