import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Components/Buttons",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Control: Story = {
  args: {
    primary: true,
    label: "Button",
    size: "medium"
  }
}

export const Primary: Story = {
  args: {
    label: "Primary",
    size: "medium",
    backgroundColor: "#2287CC",
    color: "#ffffff",
    onClick: () => {
      alert("Primary button clicked!")
    }
  }
}

export const Secondary: Story = {
  args: {
    label: "Secondary",
    size: "medium",
    backgroundColor: "#7834A4",
    color: "#ffffff",
    onClick: () => {
      alert("Secondary button clicked!")
    },
  }
}

export const Large: Story = {
  args: {
    label: "Large",
    size: "large",
    backgroundColor: "#19821D",
    color: "#ffffff",
    onClick: () => {
      alert("Large button clicked!")
    },
  }
}

export const Small: Story = {
  args: {
    label: "Small",
    size: "small",
    backgroundColor: "#19821D",
    color: "#ffffff",
    onClick: () => {
      alert("Small button clicked!")
    },
  }
}