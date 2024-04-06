import "./FavHeart.css";

export default function Favorite() {
  return (
    <>
    <div className="heart-box">
      <p className="add-favourite">Add to favourites</p>
      <label title="Add to Favourites" class="container">
        <input type="checkbox" />
        <div class="checkmark">
          <svg viewBox="0 0 256 256">
            <rect fill="none" height="200" width="200"></rect>
            <path
              d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
              stroke-width="20px"
              stroke="#e17749"
              fill="none"
            ></path>
          </svg>
        </div>
      </label>
      </div>
    </>
  );
}
