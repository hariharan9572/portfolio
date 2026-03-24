const runtime = globalThis as typeof globalThis & {
  localStorage?: { getItem?: unknown }
}

if (typeof window === "undefined") {
  const storage = runtime.localStorage

  if (storage && typeof storage.getItem !== "function") {
    delete (runtime as Record<string, unknown>).localStorage
  }
}
