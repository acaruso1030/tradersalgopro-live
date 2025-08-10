import { ToggleFlag } from "@/components/ToggleFlag";
import { isEnabled } from "@/lib/flags";

export default async function Page() {
  const enabled = await isEnabled("sample_feature");
  return (
    <main className="min-h-dvh grid place-items-center gap-4">
      <div className="text-2xl font-semibold">TradersAlgoPro Base 🟢</div>
      <ToggleFlag initialEnabled={enabled} flagKey="sample_feature" />
    </main>
  );
}
