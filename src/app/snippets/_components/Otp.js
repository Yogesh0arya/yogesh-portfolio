import Link from "next/link";
import React from "react";

function Otp() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Building an OTP Input Component in React
          </h1>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-300">
            A step-by-step guide to creating a 5-digit OTP input with automatic
            focus management
          </p>

          <div className="text-base text-blue-500 dark:text-blue-300 flex justify-center gap-6 mt-4 underline">
            <Link href="https://codesandbox.io/p/sandbox/otp-l7p9f9?file=%2Fsrc%2FApp.js%3A21%2C5">
              Source Code
            </Link>
            <Link href="https://l7p9f9.csb.app/">Live Demo</Link>
          </div>
        </div>

        {/* Section 1 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">
              ✅ 1. Initial Setup and State Management
            </h2>
          </div>
          <p className="text-base text-gray-500 dark:text-gray-300 mb-4">
            Start by importing essential React hooks and defining component
            state:
          </p>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`import { useEffect, useRef, useState } from "react";

const DIGIT_COUNT = 5;
const [value, setValue] = useState(new Array(DIGIT_COUNT).fill(""));
const refArr = useRef([]);`}
          </pre>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-2 mt-4">
              Then, inside the component App, you define:
            </p>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>DIGIT_COUNT – how many OTP input boxes you want</li>
              <li>value – state array to store each digit</li>
              <li>refArr – a mutable array to store refs for input boxes</li>
            </ul>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold ">
              ✅ 2. Initial Focus Management
            </h2>
          </div>
          <p className="text-base text-gray-500 dark:text-gray-300 mb-4">
            Use useEffect to focus the first input on component mount:
          </p>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`useEffect(() => {
  refArr.current[0]?.focus();
}, []);`}
          </pre>
        </div>

        {/* Section 3 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold ">
              ✅ 3. Input Change Handling
            </h2>
          </div>
          <p className="text-base text-gray-500 dark:text-gray-300 mb-4">
            Implementation logic for handling input changes:
          </p>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`const handleOnChange = (val, index) => {
  val = val.trim();
  const newArray = [...value];
  newArray[index] = val.slice(-1); // Only last character
  setValue(newArray);

  val && refArr.current[index + 1]?.focus();
};`}
          </pre>
          <p className="md:text-base mt-4 text-gray-500 dark:text-gray-300 text-sm">
            This ensures only the last digit is used when pasting multiple
            characters
          </p>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-2 mt-4">
              You define handleOnChange to:
            </p>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>Accept only the last character typed</li>
              <li>Update the state for the current index</li>
              <li>Automatically focus the next input box if there is input</li>
            </ul>
          </div>
        </div>

        {/* Section 4 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold ">✅ 4. Backspace Handling</h2>
          </div>
          <p className="text-base text-gray-500 dark:text-gray-300 mb-4">
            Implement backward navigation for better UX:
          </p>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`const handleOnKeyDown = (e, index) => {
  if (!value[index] && e.key === "Backspace") {
    refArr.current[index - 1]?.focus();
  }
};`}
          </pre>
          <p className="md:text-base mt-4 text-gray-500 dark:text-gray-300 text-sm">
            This improves UX for deleting digits quickly.
          </p>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-2 mt-4">
              You define handleOnKeyDown to handle backward navigation:
            </p>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>
                If the current input is empty and the user presses Backspace,
                move focus to the previous input
              </li>
            </ul>
          </div>
        </div>

        {/* Section 5 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold ">
              ✅ 5. Rendering the OTP Boxes
            </h2>
          </div>

          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`{value.map((val, index) => {
                return (
                  <input
                    className="box"
                    key={index}
                    type="number"
                    value={value[index]}
                    onChange={(e) => handleOnChange(e.target.value, index)}
                    ref={(val) => (refArr.current[index] = val)}
                    onKeyDown={(e) => handleOnKeyDown(e, index)}
                  />
                );
              })}`}
          </pre>

          <div>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-2 mt-4">
              You map over the value array and render an{" "}
              <code>&lt;input&gt;</code> for each digit:
            </p>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>Assign ref so you can control focus</li>
              <li>Limit input to one number</li>
              <li>Call the respective handlers for onChange and onKeyDown</li>
            </ul>
          </div>
        </div>

        {/* Section 6 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold ">
              ✅ 6. Styling (Assumed from styles.css)
            </h2>
          </div>
          <p className="text-base text-gray-500 dark:text-gray-300 mb-4">
            Each input is styled with the .box class to look uniform and
            user-friendly. A typical CSS for OTP boxes might look like:
          </p>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`.box {
              width: 40px;
              height: 40px;
              font-size: 24px;
              text-align: center;
              margin: 0 5px;
            }`}
          </pre>
        </div>

        {/* Section 7 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold ">✅ 7. Resulting Behavior</h2>
          </div>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-2 mt-4">
              The final OTP input component:
            </p>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>Renders 5 separate input boxes</li>
              <li>Focuses the first input on load</li>
              <li>Automatically moves focus as you type or backspace</li>
              <li>Accepts only 1 digit per box</li>
              <li>
                Provides a smooth user experience like most OTP inputs on modern
                apps
              </li>
            </ul>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-50 mb-2">
            Key Features
          </h3>
          <ul className="text-base list-disc list-inside text-blue-700 dark:text-blue-300 space-y-2">
            <li>Automatic focus progression</li>
            <li>Single character validation</li>
            <li>Backspace navigation</li>
            <li>Paste handling</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Otp;
