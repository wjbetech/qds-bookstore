import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./Text";

const meta = {
  title: "Typography/Texts",
  component: Text,
  parameters: {
    layout: "left",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Control: Story = {
  args: {
    color: "#000000",
    text: "Control Text"
  }
}

export const HeaderOne: Story = {
  args: {
    fontSize: 24,
    color: "#000000",
    text: "Header 1"
  }
}

export const HeaderTwo: Story = {
  args: {
    fontSize: 20,
    color: "#000000",
    text: "Header 2"
  }
}

export const HeaderThree: Story = {
  args: {
    fontSize: 16,
    color: "#000000",
    text: "Header 3"
  }
}