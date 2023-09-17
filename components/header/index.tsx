import React, { ReactNode } from "react";

interface PageHeaderProps {
  children: ReactNode;
}

export default function PageHeader({
  children,
  ...restProps
}: PageHeaderProps) {
  return (
    <div className="page-header flex" {...restProps}>
      <div className="logo">Your Logo</div>
      <div className="navigation">{children}</div>
    </div>
  );
}

interface PageHeaderTitleProps {
  children: ReactNode;
}

PageHeader.Title = function PageHeaderTitle({
  children,
  ...restProps
}: PageHeaderTitleProps) {
  return (
    <div className="title" {...restProps}>
      {children}
    </div>
  );
};

interface PageHeaderNavbarProps {
  children: ReactNode;
}

PageHeader.Navbar = function PageHeaderNavbar({
  children,
  ...restProps
}: PageHeaderNavbarProps) {
  return (
    <div className="navbar" {...restProps}>
      {children}
    </div>
  );
};

interface PageHeaderItemProps {
  children: ReactNode;
}

PageHeader.Item = function PageHeaderItem({
  children,
  ...restProps
}: PageHeaderItemProps) {
  return (
    <div className="item" {...restProps}>
      {children}
    </div>
  );
};
