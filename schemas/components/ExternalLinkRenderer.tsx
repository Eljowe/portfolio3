import React from "react";
import { LaunchIcon } from "@sanity/icons";

interface ExternalLinkRendererProps {
  renderDefault: (props: any) => React.ReactNode; // You may need to adjust the type of renderDefault
  value: {
    href: string;
    // Add other properties as needed
  };
}

const ExternalLinkRenderer: React.FC<ExternalLinkRendererProps> = (props) => {
  return (
    <span>
      {props.renderDefault(props)}
      <a contentEditable={false} href={props.value.href}>
        <LaunchIcon />
      </a>
    </span>
  );
};

export default ExternalLinkRenderer;
