const WishlistButton = ({ car, isWished, wishlist, setWishlist }) => {
  const toggle = () => {
    if (isWished) {
      setWishlist(wishlist.filter(item => item.id !== car.id));
    } else {
      setWishlist([...wishlist, car]);
    }
  };

  return (
    <button onClick={toggle} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
      {isWished ? "Remove from Wishlist" : "Add to Wishlist"}
    </button>
  );
};

export default WishlistButton;