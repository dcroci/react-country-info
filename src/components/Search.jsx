import Filter from './Filter';

export default function Search() {
  return (
    <div>
      <div className="flex justify-between w-11/12 mx-auto">
        <input type="text" placeholder="Search for a country..." />
        <Filter />
      </div>
    </div>
  );
}
