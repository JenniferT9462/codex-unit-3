import { useState } from "react";
import { MountButton } from "./MountButton";
import { UpdateButton } from "./UpdateButton";
import { UnmountButton } from "./UnmountButton";
import { LifecycleMessage } from "./LifecycleMessage";

export function Main({ phase, setPhase, count, setCount }) {
  return (
    <main>
      <p>React components have a 3-phase lifecycle:</p>
      <ol>
        <li>
          <em>Mount phase:</em> When a component is added to the DOM, the
          component has mounted (it appears in the DOM tree).
        </li>
        <li>
          <em>Update phase:</em> When a component changes (text, color, images,
          etc), the component has updated (something in the DOM tree changes).
        </li>
        <li>
          <em>Unmount phase:</em> When a component is removed from the DOM, the
          component has unmounted (it doesn't appear in the DOM tree).
        </li>
      </ol>
      <p>Click on the buttons below to explore lifecycle phases:</p>
      <section id="buttons">
        <MountButton phase={phase} setPhase={setPhase} />
        <UpdateButton
          phase={phase}
          setPhase={setPhase}
          count={count}
          setCount={setCount}
        />
        <UnmountButton phase={phase} setPhase={setPhase} setCount={setCount} />
      </section>
      <LifecycleMessage phase={phase} count={count} />
    </main>
  );
}
