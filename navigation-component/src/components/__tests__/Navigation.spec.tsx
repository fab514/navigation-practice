import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NavigationComponent } from '../NavigationComponent';

describe('navigation component', () => {
    it('has a navigation wrapper that renders', () => {
        render (
            <NavigationComponent />
        )
        expect(screen.getByTestId('navigation'))
    });
});