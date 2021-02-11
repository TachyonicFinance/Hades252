var searchIndex = JSON.parse('{\
"dusk_hades":{"doc":"","i":[[0,"strategies","dusk_hades","Strategies implemented for the Hades252 algorithm. This …",null,null],[0,"gadget","dusk_hades::strategies","Strategy for zero-knowledge plonk circuits",null,null],[3,"GadgetStrategy","dusk_hades::strategies::gadget","Implements a Hades252 strategy for <code>Variable</code> as input …",null,null],[12,"cs","","A reference to the constraint system used by the gadgets",0,null],[11,"new","","Constructs a new <code>GadgetStrategy</code> with the constraint …",0,[[["standardcomposer",3]]]],[11,"hades_gadget","","Perform the hades permutation on a plonk circuit",0,[[["standardcomposer",3]]]],[0,"scalar","dusk_hades::strategies","Strategy for scalars",null,null],[3,"ScalarStrategy","dusk_hades::strategies::scalar","Implements a Hades252 strategy for <code>BlsScalar</code> as input …",null,null],[11,"new","","Constructs a new <code>ScalarStrategy</code>.",1,[[]]],[8,"Strategy","dusk_hades::strategies","Defines the Hades252 strategy algorithm.",null,null],[11,"next_c","","Fetch the next round constant from an iterator",2,[[],["blsscalar",3]]],[10,"add_round_key","","Add round keys to a set of <code>StrategyInput</code>.",2,[[]]],[10,"quintic_s_box","","Computes <code>input ^ 5 (mod Fp)</code>",2,[[]]],[10,"mul_matrix","","Multiply the values for MDS matrix during the full rounds …",2,[[]]],[11,"apply_partial_round","","Applies a <code>Partial Round</code> also known as a …",2,[[]]],[11,"apply_full_round","","Applies a <code>Full Round</code> also known as a <code>Full S-Box layer</code> to …",2,[[]]],[11,"perm","","Applies a <code>permutation-round</code> of the <code>Hades252</code> strategy.",2,[[]]],[11,"rounds","","Return the total rounds count",2,[[]]],[17,"TOTAL_FULL_ROUNDS","dusk_hades","Total ammount of full rounds that will be applied. This …",null,null],[17,"PARTIAL_ROUNDS","","Total ammount of partial rounds that will be applied. …",null,null],[17,"WIDTH","","Maximum input width for the rounds",null,null],[11,"from","dusk_hades::strategies::gadget","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","dusk_hades::strategies::scalar","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"add_round_key","dusk_hades::strategies::gadget","",0,[[]]],[11,"quintic_s_box","","",0,[[["variable",3]]]],[11,"mul_matrix","","Adds a constraint for each matrix coefficient …",0,[[]]],[11,"add_round_key","dusk_hades::strategies::scalar","",1,[[]]],[11,"quintic_s_box","","",1,[[["blsscalar",3]]]],[11,"mul_matrix","","",1,[[]]],[11,"default","","",1,[[],["scalarstrategy",3]]]],"p":[[3,"GadgetStrategy"],[3,"ScalarStrategy"],[8,"Strategy"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);