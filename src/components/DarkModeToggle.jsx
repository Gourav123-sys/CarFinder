const DarkModeToggle = ({ dark, setDark }) => (
    <button
      onClick={() => setDark(!dark)}
      className="bg-gray-800 text-white px-4 py-2 rounded"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
  
  export default DarkModeToggle;