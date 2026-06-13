# BENCHMARK GUIDE

## Operatorization Experimental Platform (OEP)

This document describes the benchmark configuration system used by the Operatorization Experimental Platform (OEP) and explains how generated possibility spaces are used to evaluate the behavior of ΩTuy, ΩBrauer, ΩDEO2, and their compositions.

---

# 1. State Vector Generator

The State Vector Generator creates the initial possibility space:

[
S_0 = {s_1,s_2,\ldots,s_N}
]

which serves as the starting state for all operator evaluations.

Three parameters control the structure of this possibility space:

* Candidate States (N)
* Infeasible Ratio
* Symmetry Orbit Groups (G)

Together, these parameters provide a controlled and reproducible environment for evaluating executable operators.

---

# 2. Candidate States (N)

## Definition

Candidate States (N) determines the number of initial states generated within the possibility space.

[
S_0 = {s_1,s_2,\ldots,s_N}
]

Larger values create larger search spaces and increase computational complexity.

---

## Typical Values

| N   | Interpretation                      |
| --- | ----------------------------------- |
| 30  | Small possibility space             |
| 100 | Large possibility space             |
| 150 | Maximum supported possibility space |

---
For reproducibility, each benchmark profile was generated once and reused across all operator evaluations. This ensures that ΩTuy, ΩBrauer, ΩDEO2, and the full pipeline are evaluated under identical initial possibility-space conditions.
---

## Role in ΩTuy

ΩTuy performs possibility-space reduction.

Example:

Initial:

[
N = 30
]

After selection:

[
30 \rightarrow 12
]

States that violate constraints or fail selection criteria are removed.

---

## Role in ΩBrauer

ΩBrauer operates on the surviving states and merges structurally equivalent representatives.

Example:

[
12 \rightarrow 5
]

---

## Role in ΩDEO2

ΩDEO2 evolves the remaining states through a controlled evolution process.

---

# 3. Infeasible Ratio

## Definition

Infeasible Ratio specifies the percentage of invalid states intentionally injected into the initial possibility space.

Example:

[
30%
]

with

[
N = 100
]

produces:

* 70 feasible states
* 30 infeasible states

---

## Purpose

The parameter evaluates the ability of ΩTuy to eliminate undesirable states.

Higher values increase the difficulty of the reduction process.

---

## Recommended Noise Levels

| Infeasible Ratio | Classification |
| ---------------- | -------------- |
| 30%              | Moderate Noise |
| 50%              | High Noise     |
| 80%              | Extreme Noise  |

---

## Related Metrics

This parameter directly affects:

* Reduction Rate
* Behavioral Fidelity of ΩTuy
* Overall Operator Score

---

# 4. Symmetry Orbit Groups (G)

## Definition

Symmetry Orbit Groups controls the number of equivalence classes generated within the possibility space.

Example:

[
G = 3
]

creates:

* Orbit A
* Orbit B
* Orbit C

Each orbit contains states that are structurally equivalent under a selected invariant.

Example:

[
{S_1,S_2,S_3}
]

may represent equivalent configurations.

---

## Role in ΩBrauer

ΩBrauer collapses equivalent representatives into a stable canonical state.

[
{S_1,S_2,S_3}
\rightarrow
Representative(S)
]

Example:

[
3 \rightarrow 1
]

This process models stabilization through symmetry reduction.

---

## Recommended Values

| G | Interpretation    |
| - | ----------------- |
| 3 | Low symmetry      |
| 5 | Moderate symmetry |

Larger values increase the stabilization workload assigned to ΩBrauer.

---

# 5. Benchmark Profiles

To provide a reproducible evaluation environment, OEP defines three benchmark profiles representing increasing levels of possibility-space complexity.

These profiles determine the difficulty of the generated possibility space.

---

## Small Profile

```text
Candidate States (N)      = 30
Invalid Ratio             = 30%
Symmetry Orbit Groups (G) = 3
```

Purpose:

* Functional validation
* Operator debugging
* Demonstration experiments

---

## Large Profile

```text
Candidate States (N)      = 100
Invalid Ratio             = 50%
Symmetry Orbit Groups (G) = 5
```

Purpose:

* Performance evaluation
* Scalability analysis
* Comparative benchmarking

---

## Max Profile

```text
Candidate States (N)      = 150
Invalid Ratio             = 80%
Symmetry Orbit Groups (G) = 5
```

Purpose:

* Stress testing
* Robustness evaluation
* Extreme-noise experiments

---

# 6. Benchmark Run Profiles

Benchmark Runs represent the number of repeated simulations executed by the Scientific Benchmark Engine.

Unlike benchmark profiles, benchmark runs do not change the possibility space itself.

Instead, they increase statistical confidence in the reported results.

---

## Run Levels

| Runs  | Purpose                               |
| ----- | ------------------------------------- |
| 100   | Quick validation                      |
| 1000  | Standard research benchmark           |
| 10000 | High-confidence statistical benchmark |

---

## Recommended Configuration

Unless otherwise specified, benchmark datasets included in this repository use:

```text
Benchmark Runs = 1000
```

This configuration provides a practical balance between computational efficiency and statistical stability.

---

# 7. Benchmark Philosophy

The benchmark system evaluates two independent dimensions.

## Possibility-Space Complexity

Controlled by:

* Candidate States (N)
* Infeasible Ratio
* Symmetry Orbit Groups (G)

This dimension determines the difficulty of the generated state space.

---

## Statistical Evaluation Depth

Controlled by:

* Benchmark Runs

This dimension determines the reliability and stability of the reported measurements.

Consequently, a Small, Large, or Max profile may be evaluated using 100, 1000, or 10000 benchmark iterations.

---

# 8. Interpretation within the Operatorization Framework

The State Vector Generator creates an initial possibility space (S_0) consisting of candidate states, infeasible states, and symmetry orbit structures.

These parameters provide a controlled environment for evaluating:

* The reduction capability of ΩTuy
* The stabilization capability of ΩBrauer
* The evolutionary behavior of ΩDEO2
* The behavior of composed operator pipelines

under reproducible experimental conditions.

---

# 9. Reproducibility

All benchmark configurations are deterministic and fully configurable.

Researchers are encouraged to report:

* Candidate States (N)
* Infeasible Ratio
* Symmetry Orbit Groups (G)
* Benchmark Profile
* Benchmark Runs
* Operator Type (ΩTuy, ΩBrauer, ΩDEO2, or Pipeline)

when publishing experimental results obtained using the Operatorization Experimental Platform.
