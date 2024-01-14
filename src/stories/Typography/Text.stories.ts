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
    fontSize: 16,
    color: "#000000",
    text: "Lorem ipsum dolor sit amet"
  }
}