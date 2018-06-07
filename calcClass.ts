class Calculator {
 input1: number;
 input2: number;
 constructor(num1: number, num2: number) {
  this.input1 = num1;
  this.input2 = num2;
 }
 add() {
  return this.input1 + this.input2;
 }
 subtract() {
  return this.input1 - this.input2;
 }
 divide() {
  return this.input1 / this.input2;
 }
 multiply() {
  return this.input1 * this.input2;
 }
 powerTo() {
  return Math.pow(this.input1, this.input2);
 }
 squareRoot() {
  return Math.sqrt(this.input1);
 }
}