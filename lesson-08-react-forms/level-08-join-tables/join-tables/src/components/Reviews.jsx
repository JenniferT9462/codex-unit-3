import { Fragment } from "react";

export default function Reviews({ reviews }) {
  // Guard clause: if reviews is missing or empty, return null
  if (!reviews || reviews.length === 0) return null;

  return <dl>{reviews.map(toDetails)}</dl>;
}

function toDetails(item, index) {
  const key = `${index}-${item.id}`;

  return (
    <Fragment key={key}>
      <dt className="font-semibold">Stars: {item.stars} ⭐</dt>
      <dd className="mb-2 text-sm">
        Review by User ID: {item.user_id}
        {item.users && (
          <span> ({item.users.name || item.users.email || "User"})</span>
        )}
      </dd>
    </Fragment>
  );
}
