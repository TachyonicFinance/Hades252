# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added

### Changed

### Fixed

### Removed


## [0.5.0] - 11-05-20

### Added
- `dusk-plonk_v0.1.0` as proving system.
- `dusk-bls12_381_v0.1.0` as curve-backend

### Changed
- `GadgetStrategy` structure refactor & optimization.
- tests updated & refactored with the new proving system.

### Fixed

### Removed
- `Bulletproofs` is no longer the proving system used.
- `Curve25519-dalek` is no longer used as curve-backend.

## [0.4.0] - 12-04-20

### Added
- Plonk/fast_prover_zexe backend for ZK-Gadget functions
- Algebra, poly_commit & num_traits from Zexe as dependencies to work with PLONK.

### Changed
- Refactored the tests to work with the new ZK-Proof algorithm Plonk.

### Fixed
- Reduced the size of the circuit produced by reducing some gates that could be merged.

### Removed
- Bulletproofs dependencies removal.
- Curve25519 dependencies removal.


## [0.3.0] - 21-03-20

### Added

### Changed
- Bulletproofs dependencies change to use dusk-network/bulletproofs "branch=develop".

### Fixed

### Removed


## [0.2.0] - 15-03-20

### Added

### Changed
- Bulletproofs dependencies change to use dusk-network/bulletproofs "branch=dalek_v2".

### Fixed

### Removed

## [0.1.0] - 27-02-20

### Added

- Basic Hades252 implementation.
- Strategy structure.
- Use `curve25519-dalek` as curve-backend.
- Use `bulletproofs` as proving system.

### Changed

### Fixed

### Removed