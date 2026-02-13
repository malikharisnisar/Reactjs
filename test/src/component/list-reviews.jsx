function ReviewsList({ reviews, onEdit, onDelete }) {
  const ratingEmoji = {
    1: "😡",
    2: "😞",
    3: "😐",
    4: "🙂",
    5: "😍",
  };

  return (
    <div className="reviews-grid space-y-4">
      {reviews.map((rw, index) => (
        <div key={index} className="review-card p-4 bg-white shadow-lg rounded-lg">
          <p className="font-semibold text-lg text-gray-700"><strong>Name:</strong> {rw.name}</p>
          <p className="text-gray-600"><strong>Email:</strong> {rw.email}</p>
          <p className="text-gray-600"><strong>Group:</strong> {rw.group}</p>
          <p className="text-gray-600"><strong>Semester:</strong> {rw.semester}</p>
          <p className="text-gray-600"><strong>Department:</strong> {rw.department}</p>
          <p className="text-gray-600"><strong>Instructor:</strong> {rw.instructor}</p>
          <p className="text-gray-600"><strong>Rating:</strong> {ratingEmoji[rw.rating]}</p>
          <p className="text-gray-600"><strong>Review:</strong> {rw.reviewsText}</p>

          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => onEdit(index)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(index)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Delete
            </button>
          </div>

          <hr className="my-4 border-t border-gray-300" />
        </div>
      ))}
    </div>
  );
}

export default ReviewsList;
