import Link from "next/link";
import React from "react";

function ProgressBar() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Building an Progress Bar Component in React
          </h1>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-300">
            Here is a complete breakdown and explanation of how you built the
            animated Progress Bar in React, including how it works, animations,
            and styling — all step-by-step.
          </p>

          <div className="text-base text-blue-500 dark:text-blue-300 flex justify-center gap-6 mt-4 underline">
            <Link href="https://codesandbox.io/p/sandbox/progress-bar-32wjjt">
              Source Code
            </Link>
            <Link href="https://32wjjt.csb.app/">Live Demo</Link>
          </div>
        </div>

        {/* Section 1 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">✅ Objective</h2>
          </div>

          <div>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-2 mt-4">
              You built a smooth animated progress bar that visually represents
              a percentage using:
            </p>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>React state and effect (useState, useEffect)</li>
              <li>CSS transitions</li>
              <li>Transform-based animation for smooth rendering</li>
            </ul>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold ">✅ 1. Component & Props</h2>
          </div>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`export default function ProgressBar({ progress }) {
  const [value, setValue] = useState(0);
  ...
}`}
          </pre>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-2 mt-4">
              ✅ What is happening here:
            </p>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>
                The component receives a progress prop (a number between 0 and
                100).
              </li>
              <li>
                Internally, you use value state to animate from old to new
                progress.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold ">
              ✅ 2. Animating with useEffect
            </h2>
          </div>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`useEffect(() => {
  setTimeout(() => setValue(progress), 100);
}, [progress]);`}
          </pre>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-2 mt-4">
              ✅ Explanation:
            </p>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>
                When progress changes, you use a delayed state update
                (setTimeout).
              </li>
              <li>
                This enables the CSS transition to animate smoothly from old to
                new value.
              </li>
              <li>
                You could also use requestAnimationFrame or a transition
                library, but setTimeout with CSS transitions works great for
                simple cases.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 4 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold ">
              ✅ 3. Rendering the Progress Bar
            </h2>
          </div>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`<div className="box">
  <div className="bar" style={{ transform: \`translateX(${"$"}{value - 100}%)\` }}>
    {progress}%
  </div>
</div>`}
          </pre>

          <div>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-2 mt-4">
              ✅ What is going on:
            </p>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>
                The .bar is animated by shifting its position using transform:
                translateX(...).
              </li>
              <li>When value is 0 → translateX(-100%) (hidden)</li>
              <li>When value is 100 → translateX(0%) (fully visible)</li>
              <li>
                Intermediate values animate smoothly between these states.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 5 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold ">
              ✅ 4. Styling the Progress Bar
            </h2>
          </div>

          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`.App {
  font-family: sans-serif;
  text-align: center;
}

.box {
  border: 2px solid black;
  border-radius: 10px;
  overflow: hidden;
}

.bar {
  background-color: green;
  color: white;
  text-align: end;
  padding: 2px;
  transition: 0.5s ease-in;
}
`}
          </pre>

          <div>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-2 mt-4">
              ✅ Key Points:
            </p>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>
                .box: Acts as a container with rounded borders and hidden
                overflow to clip .bar.
              </li>
              <li>
                .bar: The animated fill. Uses transition for smoothness and
                transform for movement.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 6 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold ">
              ✅ 5. Complete Component Code Recap
            </h2>
          </div>
          <p className="text-base text-gray-500 dark:text-gray-300 mb-4">
            ✅ ProgressBar.js
          </p>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`import { useEffect, useState } from "react";

export default function ProgressBar({ progress }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setTimeout(() => setValue(progress), 100);
  }, [progress]);

  return (
    <div className="box">
      <div className="bar" style={{ transform: \`translateX(${"$"}{value - 100}%)\` }}>
        {progress}%
      </div>
    </div>
  );
}
`}
          </pre>

          <p className="text-base text-gray-500 dark:text-gray-300 mb-4">
            ✅ styles.css
          </p>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`.App {
  font-family: sans-serif;
  text-align: center;
}

.box {
  border: 2px solid black;
  border-radius: 10px;
  overflow: hidden;
}

.bar {
  background-color: green;
  color: white;
  text-align: end;
  padding: 2px;
  transition: 0.5s ease-in;
}

`}
          </pre>
        </div>

        {/* Section 7 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold ">✅ 6. Example Usage</h2>
          </div>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`import { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function App() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      <h1>Animated Progress Bar</h1>
      <button onClick={() => setProgress((p) => (p + 10) % 110)}>Increase</button>
      <ProgressBar progress={progress} />
    </div>
  );
}
`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
