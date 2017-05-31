// This file was procedurally generated from the following sources:
// - src/dstr-assignment/array-elem-target-simple-no-strict.case
// - src/dstr-assignment/default/for-await-of.template
/*---
description: Identifiers that appear as the DestructuringAssignmentTarget in an AssignmentElement should take on the iterated value corresponding to their position in the ArrayAssignmentPattern. (for-await-of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [destructuring-binding, async-iteration]
flags: [generated, noStrict, async]
info: |
    IterationStatement :
      for await ( LeftHandSideExpression of AssignmentExpression ) Statement

    1. Let keyResult be the result of performing ? ForIn/OfHeadEvaluation(« »,
       AssignmentExpression, iterate).
    2. Return ? ForIn/OfBodyEvaluation(LeftHandSideExpression, Statement,
       keyResult, assignment, labelSet).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    5. If destructuring is true and if lhsKind is assignment, then
       a. Assert: lhs is a LeftHandSideExpression.
       b. Let assignmentPattern be the parse of the source text corresponding to
          lhs using AssignmentPattern as the goal symbol.
    [...]
---*/
var argument, eval;

var counter = 0;

async function fn() {
  for await ([arguments, eval] of [[2, 3]]) {
    assert.sameValue(arguments, 2);
    assert.sameValue(eval, 3);
    counter += 1;
  }
}

fn()
  .then(() => assert.sameValue(counter, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);