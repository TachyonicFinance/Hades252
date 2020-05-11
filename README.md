[![Build Status](https://travis-ci.com/dusk-network/Hades252.svg?branch=master)](https://travis-ci.com/dusk-network/Hades252)
[![codecov](https://codecov.io/gh/dusk-network/Hades252/branch/master/graph/badge.svg)](https://codecov.io/gh/dusk-network/Hades252)
[![Repository](https://dusk-network.github.io/Hades252/repo-badge.svg)](https://github.com/dusk-network/Hades252)
[![Documentation](https://dusk-network.github.io/Hades252/badge.svg)](https://dusk-network.github.io/Hades252/index.html)

# Hades252

Implementation of Hades252 over the Bls12-381 Scalar field.

*Unstable* : No guarantees can be made regarding the API stability.

## Documentation

To generate the `Hades252` documentation:

```sh
make doc
make doc-internal
```

## Use

To import `Hades252`, add the following to the dependencies section of your project's `Cargo.toml`:

```toml
Hades252 = "0.2"
```

By default `Hades252` has a `width` equals to `5`.
It's possible to use an arbitrary value, between `3` and `9`, by setting the
environment variable `HADES252_WIDTH` to the desired number.

## Parameters

- p = `0x73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001`

- Security level is 117 -120 bits of security [NCCG] bits.

- width = 5

- Number of full rounds = 8 . There are four full rounds at the beginning and four full rounds at the end,
where each full round has `WIDTH` quintic S-Boxes.

- Number of partial rounds = 59, where each partial round has one quintic S-Box and (width-1) identity functions.

- Number of round constants = 960

## Example with permutation of scalars using the `ScalarStrategy`.
```rust
use hades252::{BlsScalar, ScalarStrategy, Strategy, WIDTH};

// Generate the inputs that will permute.
// The number of values we can input is equivalent to `WIDTH`

let input = vec![BlsScalar::from(1u64); hades252::WIDTH];
let mut strategy = ScalarStrategy::new();

let mut output = input.clone();
strategy.perm(output.as_mut_slice());

assert_ne!(&input, &output);
assert_eq!(input.len(), output.len());

```

## Example with permutation of Variables using the `GadgetStrategy`
```rust
//! Proving that we know the pre-image of a hades-252 hash.
use hades252::{BlsScalar, GadgetStrategy, Strategy, WIDTH};
use dusk_plonk::constraint_system::composer::StandardComposer;

// Setup OG params.
let public_parameters = PublicParameters::setup(CAPACITY, &mut rand::thread_rng()).unwrap();
let (ck, vk) = public_parameters.trim(CAPACITY).unwrap();
let domain = EvaluationDomain::new(CAPACITY).unwrap();

// Gen composer
let mut composer = StandardComposer::new();

// Gen inputs
let mut inputs = [Scalar::one(); WIDTH];

// Call the gadget
GadgetStrategy::hades_gadget(&mut composer, &mut inputs);

// Now your composer has been filled with a hades permutation
// inside.
// Now you can build your proof or keep extending your circuit.
```

## Deviations

- Round constants for the full rounds are generated following: [https://extgit.iaik.tugraz.at/krypto/hadesmimc/blob/master/code/calc_round_numbers.py](https://extgit.iaik.tugraz.at/krypto/hadesmimc/blob/master/code/calc_round_numbers.py)
They are then mapped onto `Scalar`s in the Ristretto scalar field.

- The MDS matrix is a cauchy matrix, the method used to generate it, is noted in section "Concrete Instantiations Poseidon and Starkad"

## Reference

[https://eprint.iacr.org/2019/458.pdf](https://eprint.iacr.org/2019/458.pdf)