// Router.tsx
import type { FunctionComponent } from "preact";
import { useState, useEffect } from "preact/hooks";

interface RouterProps {
  children: any[];
  defaultRoute?: string;
}

export const Router: FunctionComponent<RouterProps> = ({
  children,
  defaultRoute = "1",
}) => {
  const [route, setRoute] = useState(defaultRoute);

  useEffect(() => {
    const updateRoute = () => {
      const params = new URLSearchParams(window.location.search);
      setRoute(params.get("p") || defaultRoute);
    };

    updateRoute();
    window.addEventListener("popstate", updateRoute);
    return () => window.removeEventListener("popstate", updateRoute);
  }, [defaultRoute]);

  // @ts-ignore
  const activeComponent = children.find(
    (child) => child.props?.route === route,
  );

  return activeComponent || <div>404</div>;
};

// Helper for navegations
export const goTo = (page: string) => {
  const url = new URL(window.location.href);
  url.searchParams.set("p", page);
  window.history.pushState({}, "", url);
  window.dispatchEvent(new PopStateEvent("popstate"));
};
