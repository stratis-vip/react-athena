import { type EffectCallback, useEffect, useRef } from "react";

function deepEqual(a: unknown, b: unknown): boolean {
  if (Object.is(a, b)) return true; // handles primitives and NaN
  if (
    typeof a !== "object" ||
    a === null ||
    typeof b !== "object" ||
    b === null
  )
    return false;

  const keysA = Object.keys(a as Record<string, unknown>);
  const keysB = Object.keys(b as Record<string, unknown>);
  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
    if (!deepEqual((a as any)[key], (b as any)[key])) return false;
  }

  return true;
}

export const useDeepCompareEffect = <TDeps extends readonly unknown[]>(
  effect: EffectCallback,
  deps: TDeps,
) => {
  const prevDepsRef = useRef<TDeps | undefined>(undefined);
  const triggerRef = useRef(0);

  if (!deepEqual(prevDepsRef.current, deps)) {
    prevDepsRef.current = deps;
    triggerRef.current += 1;
  }
  // eslint-disable-next-line
  useEffect(effect, [triggerRef.current]);
};
