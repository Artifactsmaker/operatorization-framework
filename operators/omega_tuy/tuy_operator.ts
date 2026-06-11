/**
 * ΩTuy
 * Selection Operator
 *
 * Purpose:
 * Reduce infeasible regions and identify feasible solution branches.
 */

export interface Candidate<T> {
  value: T;
  weight: number;
}

export interface OmegaTuyInput<T> {
  candidates: Candidate<T>[];
  constraints?: unknown;
}

export interface OmegaTuyOutput<T> {
  remainingCandidates: Candidate<T>[];
  selectedCandidate: Candidate<T>;
}

export interface OmegaTuyConfig {
  mode: "argmin" | "map" | "sampling";
}

export function omegaTuy<T>(
  input: OmegaTuyInput<T>,
  config: OmegaTuyConfig
): OmegaTuyOutput<T> {
  throw new Error(
    "Reference implementation not yet available."
  );
}