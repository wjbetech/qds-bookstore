import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta = {
  title: "Components/Inputs",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["outlined", "standard", "filled"],
      control: { type: "dropdown" },
    }
  }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Control: Story = {
  args: {
    label: "Control Input",
    type: "text",
    placeholder: "Control Input Placeholder",
    maxLength: 15,
    minLength: 5,
  },
}