const FAKE_ID_SIZE = 10;

export default function generateFakeId() {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  return Array(FAKE_ID_SIZE)
    .fill(undefined)
    .map(() => characters.charAt(Math.floor(Math.random() * charactersLength)))
    .join('');
}
