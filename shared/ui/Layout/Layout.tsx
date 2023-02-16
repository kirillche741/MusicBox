import React, { FC, ReactNode } from "react";
import { styled } from "@linaria/react";

type Props = {
  children: ReactNode;
};

const Root = styled.main`
  margin-left: 180px;
  margin-right: 180px;
  background-color: #333;
  min-height: 100%;
`;

export const Layout: FC<Props> = ({ children }) => {
  return <Root>{children}</Root>;
};
