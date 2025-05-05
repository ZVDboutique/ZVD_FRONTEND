import React, { ReactNode } from "react";

export const Show = ({ children }: { children: ReactNode | null }) => {
  let when: ReactNode | null = null;
  let otherwise: ReactNode | null = null;

  React.Children.toArray(children).forEach((child) => {
    const childElement = child as any;

    if (childElement.type === Show.When && childElement.props.isTrue) {
      when = childElement.props.children;
    } else if (childElement.type === Show.Else) {
      otherwise = childElement.props.children;
    }
  });

  return when !== null ? when : otherwise;
};

Show.When = ({ isTrue, children }: { isTrue: boolean; children: ReactNode }) =>
  isTrue ? children : null;

Show.Else = ({ children }: { children: ReactNode }) => children;
