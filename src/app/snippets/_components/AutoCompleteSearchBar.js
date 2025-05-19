import Link from "next/link";
import React from "react";

function AutoCompleteSearchBar() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Building an Auto Complete Search Bar Component in React
          </h1>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-300">
            Here is a step-by-step breakdown and explanation of how you built
            the Autocomplete Search Bar in React, including key concepts like
            debouncing, caching, API calls, and conditional rendering.
          </p>

          <div className="text-base text-blue-500 dark:text-blue-300 flex justify-center gap-6 mt-4 underline">
            <Link href="https://codesandbox.io/p/sandbox/autocomplete-search-bar-2569sd">
              Source Code
            </Link>
            <Link href="https://2569sd.csb.app/">Live Demo</Link>
          </div>
        </div>

        {/* Section 1 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">✅ Objective</h2>
          </div>

          <div>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-2 mt-4">
              You built a live autocomplete search bar that:
            </p>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>Fetches suggestions from an API as the user types.</li>
              <li>Uses debouncing to avoid too many API calls.</li>
              <li>Caches results to improve performance.</li>
              <li>Displays suggestions dynamically in a dropdown.</li>
            </ul>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold ">
              ✅ 1. Initial Setup and State Management
            </h2>
          </div>
          <p className="text-base text-gray-500 dark:text-gray-300 mb-4">
            ✅ States used:
          </p>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`const [result, setResult] = useState([]);      // Search results from API
const [search, setSearch] = useState("");      // Current search input
const [open, setOpen] = useState(false);       // Controls visibility of suggestion box
const [cache, setCahce] = useState({});        // Stores previously fetched results
`}
          </pre>
        </div>

        {/* Section 3 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold ">
              ✅ 2. Fetching Data with Debouncing
            </h2>
          </div>
          <p className="text-base text-gray-500 dark:text-gray-300 mb-4">
            ✅ fetchData() logic:
          </p>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`const fetchData = async () => {
  if (cache[search]) {
    setResult(cache[search]);                 // Use cached result
    console.log("Cache return ", search);
    return;
  }

  const data = await fetch(
    "https://dummyjson.com/recipes/search?q=" + search
  );
  const json = await data.json();

  console.log("API call ", search);
  setResult(json?.recipes);
  setCahce((prev) => ({ ...prev, [search]: json?.recipes }));
};`}
          </pre>
          <div>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>If the result exists in cache, reuse it.</li>
              <li>
                Else, fetch from the API and store the result in both result and
                cache.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 4 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold ">
              ✅ 3. Debounce API Call using useEffect
            </h2>
          </div>

          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`useEffect(() => {
  const timer = setTimeout(() => fetchData(), 300);

  return () => clearTimeout(timer); // Cleanup on re-render or unmount
}, [search]);`}
          </pre>

          <div>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-2 mt-4">
              💡 Why Debounce?
            </p>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>Prevents unnecessary API calls on every keystroke.</li>
              <li>
                Waits for 300ms after the user stops typing before calling the
                API.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 5 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold ">
              ✅ 4. Input Box UI and Interaction
            </h2>
          </div>

          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`<input
  type="text"
  className="input_box"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onFocus={() => setOpen(true)}
  onBlur={() => setOpen(false)}
/>`}
          </pre>

          <div>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-2 mt-4">
              ✅ Features:
            </p>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>Controlled input with search state.</li>
              <li>Opens dropdown on focus.</li>
              <li>Hides dropdown on blur.</li>
            </ul>
          </div>
        </div>

        {/* Section 6 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold ">
              ✅ 5. Conditional Rendering of Suggestions
            </h2>
          </div>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`{search && open && (
  <ul className="result-box">
    {result.map((val) => (
      <li className="result" key={val.id}>
        {val.name}
      </li>
    ))}
  </ul>
)}`}
          </pre>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-2 mt-4">
              ✅ Logic:
            </p>
            <ul className="text-base text-gray-500 dark:text-gray-300">
              <li>
                Render suggestions only if:
                <ul className="list-disc list-inside pl-4">
                  <li>search is non-empty</li>
                  <li>Input is focused (open === true)</li>
                </ul>
              </li>
              <li>Maps result array and displays each name as a list item.</li>
            </ul>
          </div>
        </div>

        {/* Section 7 */}
        <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold ">
              ✅ 6. Complete Code Recap
            </h2>
          </div>
          <pre className="text-sm md:text-base bg-gray-800 p-4 rounded-lg text-gray-100 overflow-x-auto">
            {`export default function App() {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [cache, setCahce] = useState({});

  const fetchData = async () => {
    if (cache[search]) {
      setResult(cache[search]);
      return;
    }
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + search);
    const json = await data.json();
    setResult(json?.recipes);
    setCahce((prev) => ({ ...prev, [search]: json?.recipes }));
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchData(), 300);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="App">
      <h1>Machine Coding Round</h1>
      <h2>Autocomplete Search Bar</h2>

      <input
        type="text"
        className="input_box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      />

      {search && open && (
        <ul className="result-box">
          {result.map((val) => (
            <li className="result" key={val.id}>
              {val.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
`}
          </pre>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-2 mt-4">
              ✅ Extra Ideas to Enhance It
            </p>
            <ul className="list-disc list-inside text-base text-gray-500 dark:text-gray-300">
              <li>Highlight matching keywords in suggestions</li>
              <li>Add keyboard navigation (arrow keys to select).</li>
              <li>Add loading spinner while fetching data.</li>
              <li>Show No results found if result.length === 0.</li>
              <li>
                Provides a smooth user experience like most OTP inputs on modern
                apps
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutoCompleteSearchBar;
