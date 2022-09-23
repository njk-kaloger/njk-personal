import { Button } from "ui";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button.Primary text="My text" />
      <header>
        <div className="nav-bar">
          <span className="logo">NJK</span>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/examples">Examples</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
