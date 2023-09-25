import { useFloating } from "@floating-ui/react-dom";
import { useRef, useState } from "react";
import { createRoot, Root } from "react-dom/client";

// FloatingUI setReference

function MyFloatingReactComponent() {
  const { refs } = useFloating();
  return <input ref={refs.setReference} />;
}

class MyFloatingWebComponent extends HTMLElement {
  root: Root | null = null;
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    const mountPoint = document.createElement("div");
    this.root = createRoot(mountPoint);

    shadowRoot.appendChild(mountPoint);

    this.root.render(<MyFloatingReactComponent />);
  }

  disconnectedCallback(): void {
    this.root?.unmount();
  }
}

customElements.define("my-floating-web-component", MyFloatingWebComponent);

// End FloatingUI setReference

// React useRef

function MyReactComponent() {
  const inputReference = useRef<HTMLInputElement | null>(null);
  return <input ref={inputReference} />;
}

class MyWebComponent extends HTMLElement {
  root: Root | null = null;
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    const mountPoint = document.createElement("div");
    this.root = createRoot(mountPoint);

    shadowRoot.appendChild(mountPoint);

    this.root.render(<MyReactComponent />);
  }

  disconnectedCallback(): void {
    this.root?.unmount();
  }
}

// Register your Web Component
customElements.define("my-web-component", MyWebComponent);

// End React useRef

export default function App() {
	// No FloatingUI
  const [isWebComponentVisible, setIsWebComponentVisible] = useState(false);
  const [isReactComponentVisible, setIsReactComponentVisible] = useState(false);

  const [isFloatingWebVisible, setIsFloatingWebVisible] = useState(false);
  const [isFloatingVisible, setIsFloatingVisible] = useState(false);

  return (
    <>
      <button
        type="button"
        id="toggle-web-component"
        onClick={() => setIsWebComponentVisible((current) => !current)}
      >
        Web component with React useRef
      </button>
      {isWebComponentVisible ? (
        <p>
          <my-web-component />
        </p>
      ) : null}

      <button
        type="button"
        id="toggle-react-component"
        onClick={() => setIsReactComponentVisible((current) => !current)}
      >
        React component with React useRef
      </button>
      {isReactComponentVisible ? (
        <p>
          <MyReactComponent />
        </p>
      ) : null}

      <hr />

      <button
        type="button"
        id="toggle-floating-web-component"
        onClick={() => setIsFloatingWebVisible((current) => !current)}
      >
        Web component with FloatingUI
      </button>
      {isFloatingWebVisible ? (
        <p>
          <my-floating-web-component />
        </p>
      ) : null}

      <button
        type="button"
        id="toggle-floating-react-component"
        onClick={() => setIsFloatingVisible((current) => !current)}
      >
        React component with FloatingUI
      </button>
      {isFloatingVisible ? (
        <p>
          <MyFloatingReactComponent />
        </p>
      ) : null}
    </>
  );
}
