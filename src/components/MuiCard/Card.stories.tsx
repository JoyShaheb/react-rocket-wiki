import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import MuiCard from "./MuiCard";

export default {
  title: "Rocket Wiki/components/MuiCard",
  component: MuiCard,
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
} as ComponentMeta<typeof MuiCard>;

const Template: ComponentStory<typeof MuiCard> = (args) => (
  <MuiCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  // name: "Card",
  // image:
  //   "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g05cyanq9qd26ioa3l3r.png",
  // description:
  //   "Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica",
  // label: "Label",
};
