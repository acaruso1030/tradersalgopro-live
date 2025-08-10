"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";

export function ToggleFlag({
  initialEnabled,
  flagKey,
}: { initialEnabled: boolean; flagKey: string }) {
  const [enabled, setEnabled] = useState(initialEnabled);
  const [isPending, startTransition] = useTransition();

  async function update(next: boolean) {
    startTransition(async () => {
      await fetch("/api/flags/toggle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: flagKey, enabled: next }),
      });
      setEnabled(next);
    });
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm opacity-80">sample_feature: {enabled ? "ON" : "OFF"}</span>
      <Button onClick={() => update(true)} disabled={isPending || enabled}>Enable</Button>
      <Button onClick={() => update(false)} disabled={isPending || !enabled} variant="secondary">
        Disable
      </Button>
    </div>
  );
}
