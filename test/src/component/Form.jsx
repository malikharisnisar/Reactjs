import { useState } from "react";
import ReviewsList from "./list-reviews";

function Form() {
  const emptyReview = {
    name: '',
    email: '',
    group: '',
    semester: '',
    department: '',
    instructor: '',
    rating: '',
    reviewsText: '',
  };

  const [reviews, setReviews] = useState(emptyReview);
  const [allReviews, setAllReviews] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [filter, setFilter] = useState("AllReviews");
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviews((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // UPDATE REVIEW
      const updatedReviews = [...allReviews];
      updatedReviews[editIndex] = reviews;
      setAllReviews(updatedReviews);
      setEditIndex(null);
    } else {
      // ADD NEW REVIEW
      setAllReviews((prev) => [...prev, reviews]);
    }

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    setReviews(emptyReview);
  };

  const handleEdit = (index) => {
    setReviews(allReviews[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setAllReviews((prev) => prev.filter((_, i) => i !== index));
  };

  const filteredReviews = allReviews.filter((review) => {
    if (filter === "4plus") return review.name === 'haris';
    if (filter === "5only") return Number(review.rating) === 5;
    return true;
  });

  return (
    <div className="container mx-auto">

      <h1 className="text-2xl font-semibold mb-6 text-center">Student Reviews Portal</h1>

      {submitted && <p className="text-green-500 text-center mb-4">Review Successfully Submitted</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John"
            required
            value={reviews.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john@example.com"
            required
            value={reviews.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="group" className="block text-sm font-medium">Group:</label>
          <input
            type="text"
            name="group"
            id="group"
            placeholder="Group Name"
            required
            value={reviews.group}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="semester" className="block text-sm font-medium">Semester:</label>
          <select
            name="semester"
            id="semester"
            value={reviews.semester}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select your Semester</option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
            <option value="6th">6th</option>
            <option value="7th">7th</option>
            <option value="8th">8th</option>
          </select>
        </div>

        <div>
          <label htmlFor="department" className="block text-sm font-medium">Department:</label>
          <select
            name="department"
            id="department"
            value={reviews.department}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select your Department</option>
            <option value="Bio-Science">Bio-Science</option>
            <option value="Pre-engeering">Pre-Engeering</option>
            <option value="Commerce">Commerce</option>
            <option value="Arts">Arts</option>
          </select>
        </div>

        <div>
          <label htmlFor="instructor" className="block text-sm font-medium">Instructor:</label>
          <input
            type="text"
            name="instructor"
            id="instructor"
            placeholder="Instructor Name"
            required
            value={reviews.instructor}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <p className="text-sm font-medium">Give Rating:</p>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <span key={num}>
                <input
                  type="radio"
                  id={`rating-${num}`}
                  name="rating"
                  value={num}
                  checked={reviews.rating === String(num)}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor={`rating-${num}`} className="text-sm">{num}</label>
              </span>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="reviewsText" className="block text-sm font-medium">Review:</label>
          <textarea
            name="reviewsText"
            id="reviewsText"
            placeholder="Your reviews here..."
            required
            value={reviews.reviewsText}
            onChange={handleChange}
            rows={5}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          {editIndex !== null ? "Update Review" : "Submit"}
        </button>
      </form>

      <hr className="my-6" />

      <div>
        <h2 className="text-xl font-semibold mb-4">Reviews List</h2>
        <p>Total Reviews: {filteredReviews.length}</p>
        <label htmlFor="filter" className="block text-sm font-medium">Filter By:</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="AllReviews">All Reviews</option>
          <option value="4plus">4th & Above Reviews</option>
          <option value="5only">5th Reviews</option>
        </select>
      </div>

      <ReviewsList
        reviews={filteredReviews}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Form;



