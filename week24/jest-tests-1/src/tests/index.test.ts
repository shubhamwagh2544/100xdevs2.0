import { sum, multiply } from "..";
import { describe, it, expect } from "@jest/globals"

describe('Testing Sum Function', () => {
    // tests for sum
    // 1
    it('add positive numbers', () => {
        expect(sum(2, 3)).toBe(5)
    })

    // 2
    it('add negative numbers', () => {
        expect(sum(-1, -2)).toBe(-3)
    })
})

describe('Testing Multiply Function', () => {
    // tests for multiply
    // 1
    it('multiplies positive numbers', () => {
        expect(multiply(2, 3)).toBe(6)
    })

    // 2
    it('multiplies negative numbers', () => {
        expect(multiply(-2, -3)).toBe(6)
    })
})