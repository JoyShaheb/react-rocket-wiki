import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import DataCard from "./DataCard";

export default {
  title: "Rocket Wiki/components/DataCard",
  component: DataCard,
  argTypes: {},
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ width: "280px" }}>{Story()}</div>
      </BrowserRouter>
    ),
  ],
  parameters: {
    backgrounds: {
      default: "mui dark theme bg",
    },
  },
} as ComponentMeta<typeof DataCard>;

const Template: ComponentStory<typeof DataCard> = (args) => (
  <DataCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: "Card",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum inventore culpa, ipsam distinctio odit fugit!",
};
