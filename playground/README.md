Operatorization Experimental Platform (OEP) - User Guide & Theoretical Manual

This project forms the empirical core of the Operatorization Framework, demonstrating that ontological knowledge objects can be formalized, executed, mathematically verified, and benchmarked within a unified computational state space.

Designed as a research-grade environment, this platform evaluates operational behaviors across Selection, Stabilization, and Evolution regimes, enabling researchers to reproduce metrics for publication in high-impact academic journals.

1. Academic Metadata & Repository Identification

Author: Phan Thanh Trung

Affiliation: Independent Researcher, Vietnam

ORCID Identifier: 0009-0000-7520-6781

Zenodo Archive DOI: 10.5281/zenodo.20669008

GitHub Repository: Artifactsmaker/operatorization-framework

## Live Demo

Run the Operatorization Experimental Platform directly in your browser:

https://artifactsmaker.github.io/operatorization-framework/playground/

No installation required.
No backend required.
Runs entirely in-browser.

2. Core Operator Framework & Mathematical Definitions

The platform instantiates and evaluates three fundamental operator classes over a finite, structured possibility space $S$:

A. Selection Operator ($\Omega_{Tuy}$)

Formal Statement:


$$\Omega_{Tuy}(S) = \{ s \in S \mid \text{Valid}(s) = \text{true} \land \text{Energy}(s) \ge T_v \}$$

Behavior: Prunes the possibility space by slicing off infeasible regions and low-energy candidates under configurable cutting boundaries (Tuy's Cuts).

Execution Modes:

argmin: Target branch containing the absolute global minimum energy.

map: Maximum A Posteriori (MAP) selection of the highest probabilistic weight.

sampling: Probabilistic roulette-wheel sampling over candidate weight distributions.

B. Stabilization Operator ($\Omega_{Brauer}$)

Formal Statement:


$$\tau(H) = \tau_0 + \alpha(1 - H/H_0) \quad \text{where } H \to 0$$

Behavior: Models structural degeneracy at the limit where Brauer Height $H \to 0$. Metric sensitivity collapses, forcing symmetric orbits/variants to merge into a single stable representative node while conserving global invariant physical quantities.

C. Evolution Operator ($\Omega_{DEO2}$)

Formal Statement:


$$\mathcal{D}_{\mathrm{DEO\text{-}2}}(T)=\lim_{n\to\infty}\prod_{k=1}^{n}\Big(\Pi_{t_k}\,\exp(\Delta t_k\,\Lambda(t_k))\,\Pi_{t_k}\Big)$$

Behavior: Disciplined evolution of state vectors $X = (y, v)$ over second-order differential systems. Simulates the uniform transition of physical trajectories constrained by continuous projection-guards (TCU $\rightarrow$ BZNU $\rightarrow$ CEU).

3. Evaluation Metrology & Scoring Engine

To establish scientific validity, the platform implements a dual-tiered evaluation metrology:

A. Behavioral Fidelity Engine

Fidelity (ranging from 0% to 100%) gauges how successfully an operator preserves system invariants and filters undesirable noise:

For $\Omega_{Tuy}$ (Selection):


$$\text{Fidelity}_{Tuy} = 0.50 \times \text{Invalid Removed (\%)} + 0.50 \times \text{Feasible Preserved (\%)}$$

For $\Omega_{Brauer}$ (Stabilization):


$$\text{Fidelity}_{Brauer} = 0.60 \times \text{Energy Preservation Rate (\%)} + 0.40 \times \text{Scaled Compression Score}$$

For $\Omega_{DEO2}$ (Evolution):


$$\text{Fidelity}_{DEO2} = 0.50 \times \text{Transition Validity Rate (\%)} + 0.50 \times \text{Evolution Consistency}$$

B. Unified Operator Score

The final unified quality rating of an operator block is computed under a weighted four-channel multi-criteria decision formula:

$$\text{Operator Score} = 0.40 \times \text{Behavioral Fidelity} + 0.30 \times \text{Executability} + 0.20 \times \text{Reusability} + 0.10 \times \text{Stability}$$

Behavioral Fidelity (40%): Adherence to mathematical invariants.

Executability (30%): Inverted latency score, rewarding sub-millisecond execution times and penalizing runtime errors.

Reusability (20%): Graph transition density, indicating modular composition richness.

Stability (10%): Robustness and variance dispersion calculated via jitter offsets.

4. Operational Instructions & Export Guides

A. Initializing and Editing

Open index.html in any modern web browser.

Adjust State Vector Generator parameters (N, Infeasible Ratio, Symmetry Orbit Groups) and click Re-Generate Possibility Space.

Select any operator tab ($\Omega_{Tuy}$, $\Omega_{Brauer}$, $\Omega_{DEO2}$). You can view its mathematical formula and customize configuration arguments directly inside the JSON text box.

B. Pipeline Composition and Verification

To evaluate operators as composable functions, click Run Pipeline.

The engine immediately chains:


$$S_0 \xrightarrow{\Omega_{Tuy}} S_1 \xrightarrow{\Omega_{Brauer}} S_2 \xrightarrow{\Omega_{DEO2}} S_3$$

The Composition Verification Path flowchart displays the exact node count, execution latency, and cumulative metrics at each state step.

C. Running High-Throughput Benchmarks

Inside the Scientific Benchmark Mode card, select a profile (100, 1000, or 10,000 runs).

Click RUN RESEARCH BENCHMARK.

The simulation divides calculations into asynchronous micro-tasks to prevent browser thread locking. Upon completion, the Descriptive Statistics table populates with Mean ($\mu$), Median ($Med$), Standard Deviation ($\sigma$), Min, and Max ranges.

D. Exporting Academic Assets

Raw Data: Click CSV or JSON to download raw Monte Carlo iteration results directly.

Academic LaTeX Table: Click Get LaTeX. A modal window will display pre-formatted booktabs LaTeX table code, which you can paste directly into your research paper document file.

Academic Report: Click Get Report to render a formal validation document. You can print it or export it as a print-ready PDF file.

Paper Mode Vector Figures: Click Paper Mode in the top navigation bar. High-contrast vector graphics (SVG format) representing your active simulation's Pipeline Schema, Fidelity Distribution Curve, and Computational Latency Density will render. Click Download SVG Vector File to save these files for high-resolution LaTeX typesetting.

5. Licensing & Reproducibility Statement

This framework is licensed under CC-BY-4.0. All algorithms are completely deterministic, and execution logs are traceable, satisfying strict academic peer-review validation and reproducibility requirements.
