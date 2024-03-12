import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button } from "@mui/material";
const CartButton = () => {
  return (
    <Button
      variant="contained"
      startIcon={<AddShoppingCartIcon />}
      sx={{
        width: 120,
        height: 30,
        background: "#F9A03F",
        fontSize: 11,
        textTransform: "none",
        fontFamily: "inherit",
        margin: 0,
        padding: 0,
        "&:hover": {
          background: "#fc9526",
        },
      }}
    >
      Add to cart
    </Button>
  );
};

export default CartButton;
