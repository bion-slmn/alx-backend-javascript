import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const ob = new ClassRoom(19);
  const ob1 = new ClassRoom(20);
  const ob2 = new ClassRoom(34);
  return [ob, ob1, ob2];
}
