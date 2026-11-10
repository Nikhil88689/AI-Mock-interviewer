import { AppShell } from "@/components/layout/app-shell";
import { DesignSystemShowcase } from "@/components/design-system/design-system-showcase";

export const metadata = { title: "Design system preview" };

export default function DesignSystemPage() {
  return <AppShell><DesignSystemShowcase /></AppShell>;
}
