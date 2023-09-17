import React, { ReactNode } from "react";

interface AccordionProps {
  children: ReactNode;
}

export default function Accordion({ children, ...restProps }: AccordionProps) {
  return (
    <div {...restProps}>
      <div>{children}</div>
    </div>
  );
}

interface AccordionTitleProps {
  children: ReactNode;
}

Accordion.Title = function AccordionTitle({
  children,
  ...restProps
}: AccordionTitleProps) {
  return <div {...restProps}>{children}</div>;
};

interface AccordionWrapperProps {
  children: ReactNode;
}

Accordion.Wrapper = function AccordionWrapper({
  children,
  ...restProps
}: AccordionWrapperProps) {
  return <div {...restProps}>{children}</div>;
};

interface AccordionItemProps {
  children: ReactNode;
}

Accordion.Item = function AccordionItem({
  children,
  ...restProps
}: AccordionItemProps) {
  return <div {...restProps}>{children}</div>;
};

interface AccordionHeaderProps {
  children: ReactNode;
}

Accordion.ItemHeader = function AccordionHeader({
  children,
  ...restProps
}: AccordionHeaderProps) {
  return (
    <div className="" {...restProps}>
      {children}
    </div>
  );
};

interface AccordionBodyProps {
  children: ReactNode;
}

Accordion.Body = function AccordionBody({
  children,
  ...restProps
}: AccordionBodyProps) {
  return (
    <div className={""} {...restProps}>
      <span>{children}</span>
    </div>
  );
};
