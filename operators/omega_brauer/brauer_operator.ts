export interface OmegaBrauerInput {
states: unknown[];
metricSpace?: unknown;
height?: number;
}

export interface OmegaBrauerOutput {
stableStates: unknown[];
invariants?: unknown;
}

export interface OmegaBrauerConfig {
mode: "stabilization" | "invariance";
}

export function omegaBrauer(
input: OmegaBrauerInput,
config: OmegaBrauerConfig
): OmegaBrauerOutput {

throw new Error(
"Reference implementation not yet available."
);

}
