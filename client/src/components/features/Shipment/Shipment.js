import styles from './Shipment.module.scss';

const Shipment = ({ shipment, setShipment, shipmentPrices }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.head}>
          <th>
            <span className="m-2">Shipment options </span>
          </th>
        </tr>
      </thead>
      <tbody className={styles.body}>
        <tr className={shipment === 'carrier' ? styles.selected_row : ''}>
          <td>
            <input
              type="radio"
              id="carrier"
              name="carrier"
              value="carrier"
              checked={shipment === 'carrier'}
              onChange={() => setShipment('carrier')}
            />
            <label htmlFor="carrier">Carrier</label>
          </td>

          <td>1-2 days</td>
          <td>
            <span>{shipmentPrices.carrier}$</span>
          </td>
        </tr>
        <tr className={shipment === 'parcelLocker' && styles.selected_row}>
          <td>
            <input
              type="radio"
              id="parcel locker"
              name="parcel locker"
              value="parcel locker"
              checked={shipment === 'parcelLocker'}
              onChange={() => setShipment('parcelLocker')}
            />
            <label htmlFor="parcel locker">Parcel Locker </label>
          </td>

          <td>
            <span>1-2 days</span>
          </td>
          <td>
            <span>{shipmentPrices.parcelLocker}$</span>
          </td>
        </tr>
        <tr className={shipment === 'post' && styles.selected_row}>
          <td>
            <input
              type="radio"
              id="post"
              name="post"
              value="post"
              checked={shipment === 'post'}
              onChange={() => setShipment('post')}
            />
            <label htmlFor="post">Post</label>
          </td>

          <td>
            <span>2-3 days</span>
          </td>
          <td>
            <span>{shipmentPrices.post}$</span>
          </td>
        </tr>
        <tr className={shipment === 'selfPickup' && styles.selected_row}>
          <td>
            <input
              type="radio"
              id="selfPickup"
              name="selfPickup"
              value="selfPickup"
              checked={shipment === 'selfPickup'}
              onChange={() => setShipment('selfPickup')}
            />
            <label htmlFor="selfPickup">Self-pickup</label>
          </td>

          <td>-</td>
          <td>
            <span>{shipmentPrices.selfPickup} $</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Shipment;
