import { sum, multiply } from "..";
import { describe, it, expect } from "@jest/globals"

describe('Testing Calculator Functionality', () => {
    describe('addition', () => {
        it('adds 2 numbers', () => {
            expect(sum(1, 1)).toBe(2)
        })
    })

    describe('multiplication', () => {
        it('multiplies 2 numbers', () => {
            expect(multiply(2, 2)).toBe(4)
        })
    })
})
