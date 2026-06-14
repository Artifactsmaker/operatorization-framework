Operator-Guided Reasoning Benchmark (OGRB) Evaluation & Implementation Guide

This documentation serves as the official evaluation manual for the Operator-Guided Reasoning Benchmark (OGRB) platform. It guides researchers and developers on validating, testing, and expanding formal algebraic boundary-enforcement structures in Large Language Model (LLM) reasoning paths.

1. Theoretical Background & Mathematical Foundations

Standard Large Language Models (LLMs) construct reasoning trajectories as probabilistic token selection paths. This unconstrained search frequently leads to logical drift and boundary violations under strict multi-variable constraints. The OGRB platform implements Operator Intelligence (O.i), embedding executable structural transformations directly into the model's environment to force mathematical consistency.

The benchmark evaluates three distinct operational paradigms:

1.1 ΩTuy Selection Operator (Linear Cut Subspace Selector)

Designed for space pruning in non-convex or polyhedral constraint networks. It iteratively constructs algebraic cutting planes to shrink candidate spaces ($\Psi$):

$$\Omega_{\mathrm{Tuy}}(\Psi) \rightarrow \operatorname{argmin}_{x \in \Psi} \mathcal{E}(x)$$

This operator systematically eliminates mathematically infeasible sub-regions before LLM decoding converges on a boundary crash.

1.2 ΩBrauer Height-Collapse Operator (Invariance Orbit Projection)

Enforces grammatical and contextual semantic stability under contextual perturbations. Under severe representation metric decay where metric height $H \rightarrow 0$, representations collapse onto an invariant symmetric orbit $\mathrm{Orb}(x)$:

$$\mathcal{H}_{0}^{\perp} = \lim_{H \to 0} g_H \quad \text{s.t.} \quad \det(g_H) \to 0$$

Any paraphrasing of a prompt within the orbit group triggers the same canonical, stable response pattern.

1.3 ΩDEO2 Operator (Disciplined Second-Order Evolution)

Tracks dynamic second-order dynamic processes over bounded domains via product-limits of projection manifolds ($\Pi$) and step transition matrices ($\Lambda$):

$$\mathcal{D}_{\mathrm{DEO\text{-}2}}(T)=\lim_{n\to\infty}\prod_{k=1}^{n}\Big(\Pi_{t_k}\,\exp(\Delta t_k\,\Lambda(t_k))\,\Pi_{t_k}\Big)$$

This structures iterative execution, ensuring constraint criteria hold strictly across long-horizon step-by-step simulations.

2. Platform Architecture

The OGRB software stack consists of five interconnected modules running in a unified local sandbox environment:

[ Benchmark Corpus Manager ] <--> [ Reproducibility Engine ]
               |                             |
               +-------------[ Core ]--------+
                             |
                [ Statistical Validation ]
                             |
               [ Ablation Study Framework ]
                             |
             [ Publication Package Generator ]


2.1 Benchmark Corpus Manager

Manages dataset versioning (e.g., standard baseline v1.4.0, extreme constraints v1.5.1, or degenerate coordinate v1.6.0). Tracks task libraries, displays density metrics, and facilitates JSON importing and exporting of testing structures.

2.2 Reproducibility Engine

Guarantees mathematical determinism during identical simulation configurations.

Seeding: Generates pseudo-random configurations via a unified Mulberry32 PRNG.

Deterministic Mode: Forces stochastic variance to zero to lock down comparison baselines.

Snapshot Manager: Captures system metadata snapshots (SNAP-XXX), allowing developers to save and instantly replay specific experimental configurations.

2.3 Statistical Validation Module

Executes rigorous parametric and non-parametric hypothesis testing against the Baseline LLM Core.

Mean & Standard Deviation ($\sigma$): Compiled iteratively over repeated runs ($N$).

Parametric Student t-test: Analyzes whether the performance increase is statistically significant.

Non-Parametric Mann-Whitney U test: Computes ordinal rank sum differences to bypass Gaussian distribution assumptions.

Cohen's d Effect Size: Classifies the magnitude of the improvement (e.g., small, medium, large, or extreme).

2.4 Ablation Study Framework

Compiles and maps a complete ablation matrix comparing all operator configurations:

Baseline LLM (No operators active)

$\Omega_{\mathrm{Tuy}}$ Selection only

$\Omega_{\mathrm{Brauer}}$ Collapse only

$\Omega_{\mathrm{DEO2}}$ Evolution only

$\Omega_{\mathrm{Tuy}}$ + $\Omega_{\mathrm{Brauer}}$ Stack

$\Omega_{\mathrm{Brauer}}$ + $\Omega_{\mathrm{DEO2}}$ Stack

Full Pipeline (All operators unified)

Displays live contribution graphs mapping absolute success gains and cooperative synergy.

2.5 Publication Package Generator

Aggregates active setup metrics, LaTeX methodologies, and statistical summaries into copy-paste panels compliant with IEEE Transactions style guidelines.

3. Operational Guide (Step-by-Step)

3.1 Initial Setup & Seeding

Open the OGRB Dashboard interface.

In the Reproducibility Engine panel, locate the PSEUDO-RANDOM SEED field.

Click Random to generate a clean experimental seed, or input a specific code (e.g., 1337).

Click Apply to lock down the PRNG state. The success metrics will adjust to establish a deterministic testing baseline.

3.2 Configuring the Sweep Parameters

Navigate to the Benchmark Custom Configuration panel.

Select your PROBLEM DOMAIN:

Selection Tasks (Focuses on $\Omega\text{Tuy}$)

Stabilization Tasks (Focuses on $\Omega\text{Brauer}$)

Evolution Tasks (Focuses on $\Omega\text{DEO2}$)

Mixed Evaluation Suite (Aggregates all components)

Set your TASK DIFFICULTY (Novice, Advanced, or Expert).

Slide TASKS PER RUN to set sample size density ($M \in [20, 500]$).

Slide REPEATED RUNS (N) to configure statistical iteration depth ($N \in [2, 30]$).

3.3 Executing the Evaluation Pipeline

Under ACTIVE EVALUATION MODEL CONFIGURATION, check the radio button for the pipeline you wish to test (e.g., Full Unified Core or Baseline LLM).

Click Run Active Config (top header).

Monitor the EVALUATION SWEEP PROGRESS bar and watch the Reasoning Pipeline Topology nodes light up as calculations are processed.

Review the Live Task Playground to inspect step-by-step execution traces, constraint matrices, and target orbits.

Click Next Task to loop through active problems within the dataset.

3.4 Computing Ablation Synergy

Scroll down to the Ablation Study Matrix Configuration Comparison ledger.

Click Compute Synergy Values.

The platform will execute permutations, calculate absolute success increments, and update the Operator Contribution Gains bar chart.

4. Custom Task Integration (Extending the Corpus)

You can extend OGRB by importing your own domain tasks. Ensure your JSON file conforms to the structural schema shown below.

4.1 Schema Definition

Your import payload must be a JSON object or an array of JSON objects matching this exact structure:

{
  "id": "task.custom_unique_id",
  "title": "Descriptive Academic Title",
  "difficulty": "Expert",
  "prompt": "The primary reasoning prompt containing your mathematical or logical constraint problem.",
  "constraints": "{\n  \"bounds\": [-10, 10],\n  \"metric\": \"custom_constraint\"\n}",
  "expectation": "Expected global optimum coordinates or target behavior.",
  "trace": [
    "Initialization tracing line 1...",
    "[Baseline] Description of failure or path drift...",
    "[ΩTuy/ΩBrauer/ΩDEO2] Description of operator corrective action...",
    "Final success step..."
  ],
  "baselineSuccess": false,
  "opSuccess": true,
  "opMode": "tuy" 
}


Note: Set opMode to "tuy", "brauer", or "deo2" to automatically index the task into its corresponding research library.

4.2 Importing Tasks

Click Import Tasks in the Corpus Manager panel.

Paste your JSON array into the textarea.

Click Incorporate Tasks. If valid, the Total Libraries metrics will update, and your task will load into the Playground view.

5. Exporting for Peer-Reviewed Journals

Once your sweeps complete with highly significant results ($p < 0.001$), prepare your publication artifacts:

5.1 Exporting Datasets

Click Export JSON inside the Corpus Manager to back up your problem definitions.

Click Download JSON File inside the Publication Modal to save raw, unformatted metrics.

Click Export CSV (or download options) to compile spreadsheet files detailing accuracy, latency, and violation parameters for external graphing tools (Python Seaborn/R-ggplot).

5.2 Compiling LaTeX Manuscripts

Click Publish & Export in the header.

Select the LaTeX Manuscript tab.

Highlight and copy the IEEE Journal compliant template, pre-populated with your exact experimental seeds, accuracy outputs, and statistical evaluation tables.

Paste the markup directly into your editor (e.g., Overleaf).

5.3 PDF Generation

Click IEEE Preprint Mode in the main header to transition the entire dashboard into a distraction-free light-mode layout matching IEEE Transaction preprint guidelines.

Open the publication modal, go to setup or results, and click Print/Export PDF to output physical copies.

6. Project Attribution & Citing OGRB

To maintain traceability in academic publications, please cite this platform and the initial operatorology theories using the following metadata:

Principal Investigator: Phan Thanh Trung (Independent Researcher, Vietnam)

ORCID Identifiers: 0009-0000-7520-6781

Preprint Document DOI: 10.5281/zenodo.20669008

Research Code Repository: Artifactsmaker/operatorization-framework

Academic Protocol: IEEE Transactions on Operator Intelligence (IEEE-TOI-2026-X8712)
