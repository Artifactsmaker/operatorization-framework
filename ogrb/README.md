Operator-Guided Reasoning Benchmark (OGRB)

Welcome to the official repository for the Operator-Guided Reasoning Benchmark (OGRB), a reproducible academic validation platform designed to enforce, simulate, and verify formal algebraic boundary structures in Large Language Model (LLM) reasoning trajectories.

OGRB introduces Operator Intelligence (O.i), embedding executable algebraic transformations directly into the model's environment to guarantee logical consistency and reduce unconstrained search space violations to zero.

1. Project Metadata & Attribution

Principal Investigator: Phan Thanh Trung (Independent Researcher, Vietnam)

ORCID Identifiers: 0009-0000-7520-6781

Preprint DOI: 10.5281/zenodo.20669008

Code Repository: Artifactsmaker/operatorization-framework

Academic Submission Track: IEEE Transactions on Operator Intelligence (IEEE-TOI-2026-X8712)

2. Core Mathematical Operators

The OGRB framework validates three distinct structural operational paradigms to prevent logical drift under strict multi-variable constraints:

2.1 Tuy Selection Operator ($\Omega_{\mathrm{Tuy}}$)

Designed for space pruning in non-convex or polyhedral constraint networks. It iteratively constructs algebraic cutting planes to shrink candidate search spaces ($\Psi$):

$$\Omega_{\mathrm{Tuy}}(\Psi) \rightarrow \operatorname{argmin}_{x \in \Psi} \mathcal{E}(x)$$

This operator systematically filters out mathematically infeasible sub-regions before LLM decoding converges on a boundary crash.

2.2 Brauer Height-Collapse Operator ($\Omega_{\mathrm{Brauer}}$ / $\mathcal{H}_{0}^{\perp}$)

Enforces grammatical and contextual semantic stability under contextual perturbations. Under severe representation metric decay where metric height $H \to 0$, representations collapse onto an invariant symmetric orbit $\operatorname{Orb}(x)$:

$$\mathcal{H}_{0}^{\perp} = \lim_{H \to 0} g_H \quad \text{s.t.} \quad \det(g_H) \to 0$$

Any paraphrasing of a prompt within the orbit group triggers the same canonical, stable response pattern.

2.3 DEO2 Operator ($\Omega_{\mathrm{DEO2}}$)

Tracks dynamic second-order physical processes over bounded domains via product-limits of projection manifolds ($\Pi$) and step transition matrices ($\Lambda$):

$$\mathcal{D}_{\mathrm{DEO\text{-}2}}(T)=\lim_{n\to\infty}\prod_{k=1}^{n}\Big(\Pi_{t_k}\,\exp(\Delta t_k\,\Lambda(t_k))\,\Pi_{t_k}\Big)$$

This structures iterative execution, ensuring constraint criteria hold strictly across long-horizon step-by-step simulations.

3. Key Platform Features

The repository contains a fully self-contained, publication-grade academic dashboard (operator_guided_reasoning_benchmark.html) featuring:

Benchmark Corpus Manager: Dataset versioning selector supporting v1.4.0 (Stable Grounding), v1.5.1 (Extreme Bounds), and v1.6.0 (Degenerate Coordinates) alongside custom JSON task importing/exporting.

Deterministic Reproducibility Engine: Unified Mulberry32 Pseudo-Random Number Generator (PRNG) configuration locking down stochastic variance. Supports instant state snapshot capturing and replay configs.

Statistical Validation Engine: Computes Mean, Standard Deviation, and 95% Confidence Intervals. Performs parametric Student t-tests, non-parametric Mann-Whitney U tests, Cohen's d effect sizes, and p-value levels.

Ablation Study Matrix: Evaluates 7 distinct configurations (Baseline vs. Single Operators vs. Combined Permutations) to map cooperative synergy.

Bilingual Localization: Switch between Vietnamese and English layouts dynamically with a unified global toggle button.

Preprint Mode: Instantly formats the entire interface into a distraction-free, light-mode paper conforming to IEEE Transactions preprint formatting guidelines for physical PDF generation.

4. Getting Started

4.1 Running the Desktop Validation App

No installation of complex Python compilers or local virtual environments is necessary. The application is completely portable.

Download the operator_guided_reasoning_benchmark.html file from this repository.

Double-click the file to open it in any modern web browser (Chrome, Firefox, Safari, Edge).

The platform will automatically render KaTeX math environments, compile standard Chart.js analytics graphs, and activate the evaluation runtime.

4.2 Step-by-Step Benchmarking Run

Go to the Reproducibility Engine panel, set your target pseudo-random seed (e.g., 1337), and click Apply to lock down the PRNG state.

Select your Problem Domain and set Tasks Per Run (e.g., 120) and Repeated Runs (e.g., 8).

Select an Active Evaluation Model Configuration (e.g., Full Unified Core or Baseline LLM).

Click Run Active Config inside the main header and watch the live execution traces process dynamically in the Playground.

Once the sweep concludes, click Compute Synergy Values inside the Ablation Matrix to map cooperative gains.

5. Custom Task Schema (JSON)

Researchers can extend the OGRB library by importing their own domain tasks. Paste a valid JSON array into the Import Tasks modal conforming to this structure:

[
  {
    "id": "task.custom_boundary_sieve",
    "title": "Custom Space Optimization",
    "difficulty": "Expert",
    "prompt": "Minimize f(x) under linear constraints.",
    "constraints": "{\n  \"bounds\": [-10, 10]\n}",
    "expectation": "Target localized securely.",
    "trace": [
      "Initializing bounds...",
      "[Baseline] Trajectory drifted outside bounds.",
      "[ΩTuy] Applied space cuts successfully.",
      "Final state verified."
    ],
    "baselineSuccess": false,
    "opSuccess": true,
    "opMode": "tuy"
  }
]


6. Citation & Academic Reference

If you use this benchmark platform, its data structures, or the underlying mathematical operatorology models in your research, please cite the framework using the following metadata:

APA 7th Edition

Phan, T. T. (2026). Operator-Guided Reasoning Benchmark (OGRB): Empirical Validation of Executable Invariant Structures in LLM Systems. Zenodo. https://doi.org/10.5281/zenodo.20669008

BibTeX

@software{phan_2026_ogrb,
  author       = {Phan Thanh Trung},
  title        = {{Operator-Guided Reasoning Benchmark (OGRB): Empirical 
