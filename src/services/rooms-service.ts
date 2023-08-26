import * as RoomsRepository from "../repositories/rooms-repository";

export async function getRooms() {
  return await RoomsRepository.getRooms();
}

export async function getRoomsById(id: number) {
  return await RoomsRepository.getRoomsById(id);
}

export async function deleteRooms(id: number) {
  return await RoomsRepository.deleteRooms(id);
}
