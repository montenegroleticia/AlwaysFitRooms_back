import { CreateReservations, Reservations } from "../protocols";
import * as reservationsRepository from "../repositories/reservations-repository";

export async function CreateReservations(Reservations: CreateReservations) {
  return await reservationsRepository.createReservations(Reservations);
}

export async function getReservations() {
  return await reservationsRepository.getReservations();
}

export async function getReservationsById(id: number) {
  return await reservationsRepository.getReservationsById(id);
}

export async function putReservations(
  reservationsId: number,
  updatedReservations: Reservations
) {
  updatedReservations.id = reservationsId;
  return await reservationsRepository.putReservations(updatedReservations);
}

export async function deleteReservations(id: number) {
  return await reservationsRepository.deleteReservations(id);
}
