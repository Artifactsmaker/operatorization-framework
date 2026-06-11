/**
 * ΩDEO2 — Minimal Executable Evolution Operator
 *
 * Reference implementation v0.1
 * Operatorization Framework
 */

export interface OmegaDEO2Input<T> {
  currentState: T;
}

export interface OmegaDEO2Output<T> {
  updatedState: T;
  step: number;
}

export interface OmegaDEO2Config<T> {
  evolve?: (state: T) => T;
}

export function omegaDEO2<T>(
  input: OmegaDEO2Input<T>,
  config: OmegaDEO2Config<T> = {}
): OmegaDEO2Output<T> {

  const updatedState = config.evolve
    ? config.evolve(input.currentState)
    : input.currentState;

  return {
    updatedState,
    step: 1
  };
}

/**
 * Example
 *
 * const result = omegaDEO2(
 *   { currentState: 10 },
 *   {
 *     evolve: (x) => x + 1
 *   }
 * );
 */
