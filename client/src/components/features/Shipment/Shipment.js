const Shipment = ({ shipment, setShipment, shipmentPrices }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Shipment options</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              type="radio"
              id="carrier"
              name="carrier"
              value="carrier"
              checked={shipment === 'carrier'}
              onChange={() => setShipment('carrier')}
            />

            <label htmlFor="carrier">
              Carrier <span>1-2 days</span>{' '}
              <span>{shipmentPrices.carrier}$</span>
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="radio"
              id="parcel locker"
              name="parcel locker"
              value="parcel locker"
              checked={shipment === 'parcelLocker'}
              onChange={() => setShipment('parcelLocker')}
            />
            <label htmlFor="parcel locker">
              Parcel Locker <span>1-2 days</span>{' '}
              <span>{shipmentPrices.parcelLocker}$</span>
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="radio"
              id="post"
              name="post"
              value="post"
              checked={shipment === 'post'}
              onChange={() => setShipment('post')}
            />
            <label htmlFor="post">
              Post <span>2-3 days</span> <span>{shipmentPrices.post}$</span>
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="radio"
              id="selfPickup"
              name="selfPickup"
              value="selfPickup"
              checked={shipment === 'selfPickup'}
              onChange={() => setShipment('selfPickup')}
            />
            <label htmlFor="selfPickup">
              Self-pickup <span>{shipmentPrices.selfPickup} $</span>
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Shipment;
