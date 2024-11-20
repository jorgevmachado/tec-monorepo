import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { OContext } from "../../utils";

import Rating from './Rating';


const meta = {
    args: {
        length: 5,
        rating: 4.7587,
        context: 'neutral',
        halfStar: false,
        ratingInfo: undefined,
        ratingCount: undefined,
        roundRating: false,
        ratingInfoText: 'Service Satisfaction',
    },
    title: 'Components/Rating',
    component: Rating,
} satisfies Meta<typeof Rating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { }
};

export const Context: Story = {
    args: {
        length: 5,
        rating: 3.5,
    },
    render: (args) => (
        <>
            { OContext.map((context) => (
                <Rating {...args} context={context} />
            )) }
        </>
    )
};

export const RatingLength: Story = {
    args: {
        length: 5,
        rating: 4.9,
        ratingCount: 102,
    }
};

export const RatingInfo: Story = {
    args: {
        length: 5,
        rating: 4.9,
        ratingInfo: true,
        ratingCount: 102,
    }
};

export const RatingWithHalfStar: Story = {
    args: {
        length: 5,
        rating: 3.5,
        halfStar: true,
    }
};

export const RatingRatingLabelRounded: Story = {
    args: {
        length: 5,
        rating: 2.5,
        roundRating: true,
    }
};