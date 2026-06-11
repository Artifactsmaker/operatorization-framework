/**
 * ΩBrauer — Minimal Executable Stabilization Operator
 *
 * Reference implementation v0.1
 * Operatorization Framework
 */

export interface OmegaBrauerInput<T> {
  states: T[];
}

export interface OmegaBrauerOutput<T> {
  stableStates: T[];
}

export interface OmegaBrauerConfig {
  maxStates?: number;
}

export function omegaBrauer<T>(
  input: OmegaBrauerInput<T>,
  config: OmegaBrauerConfig = {}
): OmegaBrauerOutput<T> {

  const limit = config.maxStates ?? input.states.length;

  const stableStates = input.states.slice(0, limit);

  return {
    stableStates
  };
}

/**
 * Example
 *
 * const result = omegaBrauer(
 *   { states: ["A", "B", "C", "D"] },
 *   { maxStates: 2 }
 * );
 */
