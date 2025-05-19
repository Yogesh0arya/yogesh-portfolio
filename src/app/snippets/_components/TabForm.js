"use client";

import Link from "next/link";
import React from "react";

function TabForm() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Building a Tab Form Component in React
          </h1>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-300">
            Here is a detailed breakdown and explanation of how you built the
            multi-step tab-based form component in React, step-by-step, along
            with code snippets and explanations of logic, validation, state
            management, and navigation.
          </p>

          <div className="text-base text-blue-500 dark:text-blue-300 flex justify-center gap-6 mt-4 underline">
            <Link href="https://codesandbox.io/p/sandbox/tab-form-component-jfgtll?file=%2Fcomponents%2FTabs.js%3A106%2C1">
              Source Code
            </Link>
            <Link href="https://jfgtll.csb.app/">Live Demo</Link>
          </div>
        </div>

        {/* Section 1 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">✅ Objective</h2>
          </div>

          <div>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-2 mt-4">
              You created a multi-step Tab Form Component where:
            </p>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>
                The user fills in profile details, selects interests, and
                chooses theme settings.
              </li>
              <li>
                Navigation between tabs is allowed only if the current tab is
                valid.
              </li>
              <li>
                The form is broken into 3 tabs: Profile, Interests, and
                Settings.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">
              ✅ 1. Overall State and Structure (Tabs.js)
            </h2>
          </div>
          <p className="text-base text-gray-500 dark:text-gray-300 mb-4">
            🧠 Core States
          </p>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`const [activeTabIndex, setActiveTabIndex] = useState(0); // Track current tab
              const [data, setData] = useState({
                name: "Yogesh Arya",
                age: "20",
                email: "yogesh@gmil.com",
                interests: ["Drawing"],
                theme: "dark",
              });
              const [errors, setErrors] = useState({});`}
          </pre>
          <div>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>activeTabIndex: Controls which tab is currently active.</li>
              <li>data: Holds the form data shared across all tabs.</li>
              <li>errors: Holds validation error messages for each field.</li>
            </ul>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">
              ✅ 2. Tab Configuration with Validation Logic
            </h2>
          </div>

          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`const tabs = [
              {
                name: "Profile",
                component: Profile,
                validate: () => {
                  const err = {};
                  if (!data.name || data.name.length < 2) err.name = "Invalid Name";
                  if (!data.age || data.age < 18) err.age = "Invalid Age";
                  if (!data.email || data.email.length < 2) err.email = "Invalid Email";
                  setErrors(err);
                  return !(err.name || err.age || err.email);
                },
              },
              {
                name: "Interests",
                component: Interests,
                validate: () => {
                  const err = {};
                  if (data.interests.length < 1) err.interests = "Invalid Interests";
                  setErrors(err);
                  return !err.interests;
                },
              },
              {
                name: "Settings",
                component: Settings,
                validate: () => true, // No validation
              },
            ];`}
          </pre>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-2 mt-4">
              Each tab:
            </p>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>Has a name, a component, and a validate function.</li>
              <li>
                validate() is run before moving to the next tab or switching
                manually.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 4 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">
              ✅ 3. Dynamic Component Rendering
            </h2>
          </div>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`const TabBody = tabs[activeTabIndex]?.component;
<TabBody data={data} setData={setData} errors={errors} />`}
          </pre>
          <div>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>
                The active component (Profile, Interests, or Settings) is
                rendered based on activeTabIndex.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 5 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">✅ 4. Navigation Logic</h2>
          </div>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`const handlePrev = () => {
  setActiveTabIndex((prev) => prev - 1);
};

const handleNext = () => {
  if (tabs[activeTabIndex].validate()) {
    setActiveTabIndex((prev) => prev + 1);
  }
};

const handleSubmit = () => {
  console.log("Submitting:", data);
};`}
          </pre>
          <div>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>Next: Proceeds only if current tab is validation passes.</li>
              <li>Prev: Goes back without validation.</li>
              <li>Submit: Shown only on the last tab.</li>
            </ul>
          </div>
        </div>

        {/* Section 6 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">✅ 5. Tab Header Buttons</h2>
          </div>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`<div className="tabs">
  {tabs.map((tab, index) => (
    <button
      key={index}
      onClick={() =>
        tabs[activeTabIndex].validate() && setActiveTabIndex(index)
      }
    >
      {tab.name}
    </button>
  ))}
</div>`}
          </pre>
          <div>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>
                Clicking a tab header will only change tabs if the current tab
                is valid.
              </li>
              <li>
                Prevents skipping validation by jumping directly to another tab.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 7 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">
              ✅ 6. Profile Tab (Profile.js)
            </h2>
          </div>
          <p className="text-base text-gray-500 dark:text-gray-300 mb-4">
            Purpose: Enter name, age, and email.
          </p>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`<input
  type="text"
  name="name"
  value={data.name}
  onChange={handleChange}
/>
{errors.name && <p className="error">{errors.name}</p>}`}
          </pre>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-2 mt-4">
              Logic:
            </p>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>Controlled inputs using data and setData.</li>
              <li>Shows error messages based on errors.</li>
            </ul>
          </div>
        </div>

        {/* Section 8 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">
              ✅ 7. Interests Tab (Interests.js)
            </h2>
          </div>
          <p className="text-base text-gray-500 dark:text-gray-300 mb-4">
            Purpose: Choose one or more interests via checkboxes.
          </p>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`<input
  type="checkbox"
  checked={data.interests.includes("Coding")}
  onChange={(e) => handleChangeInterests(e, "Coding")}
/>`}
          </pre>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-2 mt-4">
              Logic:
            </p>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>Toggles interest selection.</li>
              <li>Validation ensures at least one is selected.</li>
            </ul>
          </div>

          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`setData((prev) => ({
  ...prev,
  interests: e.target.checked
    ? [...prev.interests, value]
    : prev.interests.filter((val) => val !== value),
}));
            `}
          </pre>
        </div>

        {/* Section 9 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">
              ✅ 8. Settings Tab (Settings.js)
            </h2>
          </div>
          <p className="text-base text-gray-500 dark:text-gray-300 mb-4">
            Purpose: Select theme (radio button for dark or light).
          </p>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`<input
  type="radio"
  checked={data.theme === "dark"}
  name="dark"
  onChange={handleThemeChange}
/>`}
          </pre>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-2 mt-4">
              Logic:
            </p>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>Controlled via data.theme</li>
              <li>Updates theme in global form data.</li>
            </ul>
          </div>
        </div>

        {/* Section 10 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">✅ 9. Final Buttons</h2>
          </div>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`{activeTabIndex > 0 && <button onClick={handlePrev}>prev</button>}
{activeTabIndex < tabs.length - 1 && (
  <button onClick={handleNext}>next</button>
)}
{activeTabIndex === tabs.length - 1 && (
  <button onClick={handleSubmit}>Submit</button>
)}`}
          </pre>
          <div>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>
                Conditionally renders Prev/Next/Submit buttons based on the tab.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 11 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">✅ 10. Example Form Flow</h2>
          </div>

          <div>
            <ol className="list-decimal list-inside text-base text-gray-500 dark:text-gray-300">
              <li>Profile → Fill name, age (≥18), and email → Click Next</li>
              <li>Interests → Select at least one checkbox → Click Next</li>
              <li>Settings → Choose a theme → Click Submit</li>
            </ol>
          </div>
        </div>

        {/* Section 12 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">✅ Enhancement Ideas</h2>
          </div>

          <div>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>Add animations between tab transitions.</li>
              <li>Disable tabs that are not yet valid.</li>
              <li>Show step indicators (Step 1 of 3).</li>
              <li>Highlight tab headers with errors.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabForm;
