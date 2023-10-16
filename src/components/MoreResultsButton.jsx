export default function MoreResultsButton({
  count,
  incrementCount,
  isDarkMode,
  filterBy,
}) {
  function handleIncrementCount() {
    if (count < 250) {
      incrementCount((prevState) => prevState + 50);
    } else {
      return;
    }
  }
  return (
    <>
      {count < 250 ? (
        <a
          className={`${
            isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'
          } p-6 cursor-pointer mx-auto rounded flex items-center justify-center max-w-xs my-4`}
          onClick={handleIncrementCount}
        >
          More Countries
        </a>
      ) : null}
    </>
  );
}
