import { suite, test } from '@testdeck/mocha';
import { expect } from 'chai';
import calc from './../src/calc';
import Comp1 from './../src/Components/Comp1/Comp1';
import Comp2 from './../src/Components/Comp2/Comp2';
import Comp2Model from './../src/Components/Comp2/Model/Comp2Model';

@suite class HelloWorldServiceUnitTests {

  private one: number;

  before() {
    this.one = 2;
  }

  @test 'should do something when call a method'() {
    expect(1).equal(2);
  }
}