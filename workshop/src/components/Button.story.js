import React from "react";

import Button from "./Button";
import Page from "../utils-storybook/Page";

const Template = (args) => (
  <Page title="Button" inverted={args.inverted}>
    {/* 🚩 Start here!
            args need to be passed to the component */}
    <Button {...args}>{args.children}</Button>
  </Page>
);

export const BrandPrimary = Template.bind();
export const BrandSecondary = Template.bind();

BrandSecondary.args = {
  type: "brand-secondary"
};

//🎯 Add new stories with different args

const buttonStory = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "I am a button...",
    onClick: () => {
      alert("You clicked me.");
    }
  }
  //🎯 Add an argType for "children"
  //📙 Learn more: https://storybook.js.org/docs/react/api/argtypes
};

export default buttonStory;

//📙 Storybook React Docs: https://storybook.js.org/docs/react/get-started/introduction
