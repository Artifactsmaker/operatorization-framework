/**
 * ΩTuy — Minimal Executable Selection Operator
 *
 * Reference implementation v0.1
 * Operatorization Framework
 */

export type SelectionMode = "argmin" | "map" | "sampling";

export interface Candidate<T> {
  value: T;
  weight: number;
}

export interface OmegaTuyInput<T> {
  candidates: Candidate<T>[];
}

export interface OmegaTuyOutput<T> {
  remainingCandidates: Candidate<T>[];
  selectedCandidate: Candidate<T>;
}

export interface OmegaTuyConfig {
  mode: SelectionMode;
}

export function omegaTuy<T>(
  input: OmegaTuyInput<T>,
  config: OmegaTuyConfig
): OmegaTuyOutput<T> {

  if (input.candidates.length === 0) {
    throw new Error("Candidate space is empty.");
  }

  let selected: Candidate<T>;

  switch (config.mode) {

    case "argmin":
      selected = input.candidates.reduce((best, current) =>
        current.weight < best.weight ? current : best
      );
      break;

    case "map":
      selected = input.candidates.reduce((best, current) =>
        current.weight > best.weight ? current : best
      );
      break;

    case "sampling": {
      const totalWeight = input.candidates.reduce(
        (sum, c) => sum + Math.max(0, c.weight),
        0
      );

      if (totalWeight <= 0) {
        selected = input.candidates[0];
        break;
      }

      let r = Math.random() * totalWeight;

      selected = input.candidates[0];

      for (const candidate of input.candidates) {
        r -= Math.max(0, candidate.weight);

        if (r <= 0) {
          selected = candidate;
          break;
        }
      }

      break;
    }

    default:
      selected = input.candidates[0];
  }

  return {
    remainingCandidates: input.candidates,
    selectedCandidate: selected
  };
}

/**
 * Example
 *
 * const result = omegaTuy(
 *   {
 *     candidates: [
 *       { value: "A", weight: 0.2 },
 *       { value: "B", weight: 0.5 },
 *       { value: "C", weight: 0.3 }
 *     ]
 *   },
 *   { mode: "map" }
 * );
 */
