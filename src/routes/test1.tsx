import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/test1")({
  component: () => <div>Hello Test-1</div>,
});
