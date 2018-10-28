// This file tests our application code - open the associated HTML file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// Modify the code in your appplication to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

// The following is a helpful summary of all the QUnit asserts: 

//deepEqual(value, expected[, message]): A recursive, strict comparison that works on all the JavaScript types. The assertion passes if value and expected are identical in terms of properties, values, and they have the same prototype;
//equal(value, expected[, message]): Verify the value provided is equal the expected parameter using a non-strict comparison (==).
//notDeepEqual(value, expected[, message]): Same as deepEqual() but tests for inequality;
//notEqual(value, expected[, message]): Same as equal() but tests for inequality;
//propEqual(value, expected[, message]): A strict comparison of the properties and values of an object. The assertion passes if all the properties and the values are identical;
//strictEqual(value, expected[, message]): Verify the value provided is equal to the expected parameter using a strict comparison (===);
//notPropEqual(value, expected[, message]): Same as propEqual() but tests for inequality;
//notStrictEqual(value, expected[, message]): Same as strictEqual() but tests for inequality;
//ok(value[, message]: An assertion that passes if the first argument is truthy;
//throws(function [, expected ] [, message ]): Test if a callback throws an exception, and optionally compare the thrown error;

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Bonus1:Testing calculateSeat function with (4,9)as input with expected output as 36', function (assert) {
  assert.equal(App.calculateSeat(4, 9), 36, 'Tested with two relatively small positive numbers');
 });

QUnit.test('Bonus2:Testing calculateSeat function with (-7,-12) as input with expected output as 0', function (assert) {
  assert.equal(App.calculateSeat(-7, -12), 0, 'Tested with two negative numbers. Any arguments less than 1 will be set to 0.');
});

QUnit.test('Bonus3:Testing calculateSeat function with (700,1000) as input with expected output as 0', function (assert) {
  assert.equal(App.calculateSeat(700, 1000),0, 'Tested with two large positive numbers. ');
});

QUnit.test('Bonus4:Testing calculateSeat function with empty inputs ', function (assert) {
  assert.throws(function () { App.calculateSeat(); }, /The given argument is not a number/, 'Missing or Invalid arguments');
});

QUnit.test('Bonus5:Testing calculateSeat function with (r,b) as input ', function (assert) {
  assert.throws(function () { App.calculateSeat('r', 'b'); }, /The given argument is not a number/, 'Passing in a string correctly raises an Error');
});

QUnit.test('Bonus6:Testing calculateSeat function with  (5.1,6.8) as input with expected output as 35', function (assert) {
  assert.equal(App.calculateSeat(5.1,6.8),35,'Tested with two positive non- integer number')
});
