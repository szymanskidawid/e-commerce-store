import DeleteIcon from '@mui/icons-material/Delete';

const RemoveButton = ({ deleteProductFromBasket }) => (
  <DeleteIcon className="basket-section-remove-button" onClick={deleteProductFromBasket} />
);

export default RemoveButton;
