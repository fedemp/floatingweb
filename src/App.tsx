import { useRef, useState } from "react";
import { createRoot, Root } from "react-dom/client";

// useState

function MyStateReactComponent() {
  const [ref, setRef] = useState<HTMLInputElement|null>();
  return <input ref={setRef} />;
}

class MyStateWebComponent extends HTMLElement {
  root: Root | null = null;
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    const mountPoint = document.createElement("div");
    this.root = createRoot(mountPoint);

    shadowRoot.appendChild(mountPoint);

    this.root.render(<MyStateReactComponent />);
  }

  disconnectedCallback(): void {
    this.root?.unmount();
  }
}

customElements.define("my-state-web-component", MyStateWebComponent);

// useRef

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
  const [isWebComponentVisible, setIsWebComponentVisible] = useState(false);
  const [isReactComponentVisible, setIsReactComponentVisible] = useState(false);

  const [isStateWebVisible, setIsStateWebVisible] = useState(false);
  const [isStateVisible, setIsStateVisible] = useState(false);

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
        id="toggle-state-web-component"
        onClick={() => setIsStateWebVisible((current) => !current)}
      >
        Web component with useState
      </button>
      {isStateWebVisible ? (
        <p>
          <my-state-web-component />
        </p>
      ) : null}

      <button
        type="button"
        id="toggle-state-react-component"
        onClick={() => setIsStateVisible((current) => !current)}
      >
        React component with useState
      </button>
      {isStateVisible ? (
        <p>
          <MyStateReactComponent />
        </p>
      ) : null}
    </>
  );
}
