export type Reservations = {
  id: number;
  id_usuario: number;
  id_sala: number;
  data_hora_inicio: string;
  data_hora_fim: string;
  status: "ativo" | "cancelado";
};

export type CreateReservations = Omit<Reservations, "id">;
