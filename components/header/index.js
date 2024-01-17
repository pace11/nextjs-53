/**
 *
 * component stateless
 * @param {Number} params.number
 * @param {Function} params.handleSetNumber
 * @returns
 */
export default function Header({ number, handleSetNumber }) {
  return (
    <div>
      <button onClick={handleSetNumber}>Button Number</button>
      <p>Component Header {number}</p>
    </div>
  );
}
