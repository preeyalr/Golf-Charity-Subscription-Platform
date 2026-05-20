const PublicVisitorCard = () => {
  return (
    <div className="border border-gray-300 p-6 bg-gray-100 w-full">
      
      {/* Title */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-4 bg-green-900"></div>
        <h3 className="text-md font-semibold text-gray-800">
          Public Visitor
        </h3>
      </div>

      {/* List */}
      <ul className="text-gray-600 space-y-1 pl-4 list-disc">
        <li>View platform concept</li>
        <li>Explore listed charities</li>
        <li>Understand draw mechanics</li>
        <li>Initiate subscription</li>
      </ul>

    </div>
  );
};

export default PublicVisitorCard;