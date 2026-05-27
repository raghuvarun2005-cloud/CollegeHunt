"use client";

import { useState } from "react";

export default function ReviewForm() {

  const [name, setName] =
    useState("");

  const [rating, setRating] =
    useState("");

  const [review, setReview] =
    useState("");

  const [message, setMessage] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    // Validation

    if (
      review.length < 80
    ) {

      setMessage(
        "Review must contain at least 80 characters."
      );

      return;

    }

    const response = await fetch(
      "/api/reviews",
      {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({

          name,

          rating,

          review,

        }),

      }
    );

    const data =
      await response.json();

    if (data.success) {

      setMessage(
        "Review submitted successfully."
      );

      setName("");

      setRating("");

      setReview("");

    }

  };

  return (

    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

      <h2 className="text-3xl font-bold text-[#222222]">

        Student Review

      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 mt-8"
      >

        {/* Name */}

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#FF385C] transition"
          required
        />

        {/* Rating */}

        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) =>
            setRating(
              e.target.value
            )
          }
          className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#FF385C] transition"
          min="1"
          max="5"
          required
        />

        {/* Review */}

        <textarea
          placeholder="Write your detailed review..."
          value={review}
          onChange={(e) =>
            setReview(
              e.target.value
            )
          }
          className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none h-40 resize-none focus:border-[#FF385C] transition"
          required
        />

        {/* Button */}

        <button
          type="submit"
          className="bg-[#FF385C] hover:bg-[#E31C5F] text-white px-8 py-4 rounded-2xl font-semibold transition"
        >

          Submit Review

        </button>

        {/* Message */}

        {message && (

          <p className="text-green-600 font-medium">

            {message}

          </p>

        )}

      </form>

    </div>

  );

}